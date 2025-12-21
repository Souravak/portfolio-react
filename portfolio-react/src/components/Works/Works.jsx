import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const redirectToGitHub = () => {
  window.open('https://github.com/souravak', '_blank');
};

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I'm excited to bring my skills and experience to help business achieve their goals and create a strong online presence."</span>
        <div className="worksTable">
          <div className="workItems">
            <p>1. Vision-Based Computer Cursor Control and Authentication Using Hand</p>
            <ul>
              <li><i>Technologies: Python, PyAutoGUI, OpenCV, MediaPipe, WMI</i></li>
              <li>Built a gesture-controlled virtual mouse system using MediaPipe and OpenCV to enable hands-free computer interaction, aimed at assisting users with limited mobility.</li>
              <li>Implemented real-time hand-tracking and gesture recognition with practical accuracy under normal usage conditions</li>
              <li>Optimized gesture detection for smooth, real-time cursor movement on standard hardware.</li>
            </ul>
          </div>
          <div className="workItems">
            <p>2. Automatic Number Plate Recognition and Parking Prediction System(ANPRPPS)</p>
            <ul>
              <li><i>Technologies used: Python, OpenCV, Machine Learning, HTML, CSS, JavaScript, Firebase (Firestore)</i></li>
              <li>Developed a college-level web application to track vehicle entry and exit using number plate  recognition implemented with OpenCV and basic machine learning techniques.</li>
              <li>Implemented logic to identify and restrict unauthorized vehicles and implemented rule-based alerts for guest vehicles exceeding allowed parking duration of 15 minutes.</li>
              <li>Stored vehicle and entry/exit records in Firebase (Firestore) and displayed data through a simple web interface for monitoring and review.</li>
            </ul>
          </div>
          {/* <div className="workItems">
            <p>3. Electricity Bill Management System</p>
            <ul>
              <li>Technologies used: Java, JDBC, SQL, JSP, HTML, CSS, JavaScript</li>
              <li>Developed a comprehensive Electricity Bill Management System as part of the ILP program at TCS.</li>
              <li>Implemented the system using Java, ensuring smooth integration with JDBC and SQL for database management.</li>
              <li>Created dynamic JSP pages for user interaction, enabling functionalities like bill generation and payment processing</li>
              <li>Optimized database queries for better performance and reduced response time.</li>
            </ul>
          </div> */}
          {/* <div className="workItems">
            <p>4. Prison Management System</p>
            <ul>
              <li>Technologies used: PHP, phpMyAdmin, SQL, HTML, CSS, JavaScript</li>
              <li>Developed and hosted a prison management system on a local server to streamline operations.</li>
              <li>Designed a database using phpMyAdmin and SQL for efficient management of inmate and staff records.</li>
              <li>Built dynamic web interfaces with PHP and JavaScript for real-time data interaction and visualization.</li>
              <li>Implemented authentication and role-based access control to ensure system security.</li>
            </ul>
          </div> */}

            {/* <img src={Portfolio1} alt="Portfolio Image1" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio Image2" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio Image3" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio Image4" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio Image5" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio Image6" className="worksImg" /> */}
        </div>
        <button className="worksBtn" onClick={redirectToGitHub}>See More</button>
    </section>
  )
}

export default Works