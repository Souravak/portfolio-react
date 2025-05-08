import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import job from '../../assets/job.gif';
import downloadImg from '../../assets/download.gif';

const handleClick = () => {
  const emailAddress = 'souravak211@gmail.com';
  const subject = 'Job Opportunity';

  const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}`;

  window.location.href = mailtoLink;
};

const handleResumeClick = () => {
  window.open('https://drive.google.com/drive/folders/1PV7mJIkMxks3DDqcHfS3RFV_BC_J_ard?usp=sharing', '_blank');
};


const Intro = () => {
  
  return (
    <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">I'm <span className="introName">Sourav</span><br />Full-Stack Developer</span>
          <p className="introPara">I am an aspiring web developer skilled in ReactJS, JavaScript, Python, and Java Spring Boot Microservice, with a passion for creating visually stunning, user-friendly, and efficient web applications.</p>
          <div className="hireme-resume">
            <button className="hireBtn" onClick={handleClick}>
              Hire Me<img src={job} alt="Hire Me Img" className="btnImg" />
            </button>
            <button className="hireBtn" onClick={handleResumeClick}>
              Resume<img src={downloadImg} alt="Download Img" className="btnImg" />
            </button>
          </div>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro