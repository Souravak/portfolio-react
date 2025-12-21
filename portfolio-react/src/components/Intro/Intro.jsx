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
  window.open('https://drive.google.com/file/d/1qPsseEyVsKrQ2wGc2QeDMsV0f1ZOSqFQ/view?usp=sharing', '_blank');
};


const Intro = () => {
  
  return (
    <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">I'm <span className="introName">Sourav</span><br />Full-Stack Developer | React & Django</span>
          <p className="introPara">Software Engineer with 2+ years of experience building and maintaining web applications using React
            and Django. Experienced in developing reusable UI components, integrating REST APIs, and improving
            application performance for internal and external users. Comfortable working in Agile teams and
            contributing to production systems.</p>
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