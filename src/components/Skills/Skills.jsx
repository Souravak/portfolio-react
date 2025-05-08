import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import airpmoLogo from '../../assets/airpmo.png';
import appleLogo from '../../assets/apple.jpg';
import walgreensLogo from '../../assets/walgreens.png';

const Skills = () => {
  return (
    <section className="skills">
      <span className="skillTitle">Experience Details</span>
      <span className="skillDesc">Currently employed at Tata Consultancy Services (TCS) as an Associate Software Developer, having joined in October 2023.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={walgreensLogo} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Walgreens.com</h2>
            <p>Currently serving at TCS as a Production Support Specialist for Walgreens Boots Alliance since October 2024.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appleLogo} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Apple.com</h2>
            <p>Served 9 months at TCS for Apple.com (Dec 2023–Aug 2024) as a WebMethods.io and Java Spring Boot Developer.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={airpmoLogo} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>AirPMO.co</h2>
            <p>Served 1.5 years as Senior Web Developer at AirPMO (Apr 2022–Aug 2023), building and maintaining the company’s website.</p>
          </div>
        </div>
      </div>
    </section>
  )
  
  
}

export default Skills