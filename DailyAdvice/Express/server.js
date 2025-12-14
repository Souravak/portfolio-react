require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 3000;

// -------------------- FIREBASE --------------------
const firebaseKeyBase64 = process.env.FIREBASE_KEY_BASE64;
if (!firebaseKeyBase64) {
  throw new Error('FIREBASE_KEY_BASE64 missing');
}

const serviceAccount = JSON.parse(
  Buffer.from(firebaseKeyBase64, 'base64').toString('utf8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// -------------------- EMAILJS --------------------
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.EMAILJS_USER_ID;

// -------------------- CORE LOGIC --------------------
async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  return data.slip.advice;
}

async function getSubscriberEmails() {
  const doc = await db
    .collection('daily_advice_subscribers')
    .doc('subscribers_list')
    .get();

  const data = doc.data();
  if (!data) return [];

  return Object.entries(data)
    .filter(([_, subscribed]) => subscribed === true)
    .map(([email]) => email);
}

async function sendEmail(advice, toEmail) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: USER_ID,
      template_params: {
        advice_text: advice,
        to_email: toEmail,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
}

// -------------------- TRIGGER ENDPOINT --------------------
let server;

app.get('/trigger', async (req, res) => {
  // 🔐 Optional security
  if (process.env.TRIGGER_SECRET && req.query.key !== process.env.TRIGGER_SECRET) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    console.log('🚀 Trigger endpoint called');

    const advice = await getAdvice();
    const emails = await getSubscriberEmails();

    for (const email of emails) {
      await sendEmail(advice, email);
    }

    res.json({
      success: true,
      sent_to: emails.length,
      advice,
    });

    // Gracefully shutdown after successful completion
    console.log('✅ Trigger completed. Shutting down server...');
    setTimeout(() => {
      server.close(() => {
        console.log('🛑 Server shut down');
        process.exit(0);
      });
    }, 1000);
  } catch (err) {
    console.error('❌ Trigger failed:', err);
    res.status(500).json({
      success: false,
      error: err.message,
    });

    // Shutdown on error after sending response
    setTimeout(() => {
      server.close(() => {
        console.log('🛑 Server shut down');
        process.exit(1);
      });
    }, 1000);
  }
});

// -------------------- HEALTH ENDPOINT --------------------
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime_seconds: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// -------------------- START SERVER --------------------
server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
