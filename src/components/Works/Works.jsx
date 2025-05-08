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
              <li>Technologies used: Python, PyAutoGUI, OpenCV.</li>
              <li>Developed a system that enables hands-free control of the computer cursor using hand gestures detected by a camera.</li>
              <li>Implemented basic mouse operations such as clicking, dragging, and scrolling based on hand movements.</li>
              <li>Enhanced the system with additional functionalities including volume control, screen brightness adjustment, zooming in and out, opening new tabs, closing windows, and navigating between applications.</li>
              <li>Integrated a secure user authentication system based on unique hand gesture patterns, ensuring safe system access.</li>
            </ul>
          </div>
          <div className="workItems">
            <p>2. Automatic Number Plate Recognition and Parking Prediction System(ANPRPPS)</p>
            <ul>
              <li>Technologies used: Python, OpenCV, Machine Learning, HTML, CSS, JavaScript, Firebase (Firestore)</li>
              <li>Developed an ANPR system using Python and OpenCV for real-time number plate recognition and parking space prediction.</li>
              <li>Used machine learning to process images and predict parking space availability.</li>
              <li>Leveraged OpenCV for plate detection, character segmentation and OCR, and achieved 95% recognition accuracy rate.</li>
              <li>Created a web interface with Firebase’s Firestore as database to display real-time parking data for both public and admins.</li>
              <li>Integrated Firebase Firestore for real-time data synchronization and status updates</li>
            </ul>
          </div>
          <div className="workItems">
            <p>3. Electricity Bill Management System</p>
            <ul>
              <li>Technologies used: Java, JDBC, SQL, JSP, HTML, CSS, JavaScript</li>
              <li>Developed a comprehensive Electricity Bill Management System as part of the ILP program at TCS.</li>
              <li>Implemented the system using Java, ensuring smooth integration with JDBC and SQL for database management.</li>
              <li>Created dynamic JSP pages for user interaction, enabling functionalities like bill generation and payment processing</li>
              <li>Optimized database queries for better performance and reduced response time.</li>
            </ul>
          </div>
          <div className="workItems">
            <p>4. Prison Management System</p>
            <ul>
              <li>Technologies used: PHP, phpMyAdmin, SQL, HTML, CSS, JavaScript</li>
              <li>Developed and hosted a prison management system on a local server to streamline operations.</li>
              <li>Designed a database using phpMyAdmin and SQL for efficient management of inmate and staff records.</li>
              <li>Built dynamic web interfaces with PHP and JavaScript for real-time data interaction and visualization.</li>
              <li>Implemented authentication and role-based access control to ensure system security.</li>
            </ul>
          </div>

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