import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const handleClick = () => {
  const emailAddress = 'souravak211@gmail.com';
  const subject = 'Job Opportunity';

  const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}`;

  window.location.href = mailtoLink;
};

const Intro = () => {

  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Sourav</span><br />Website Developer</span>
            <p className="introPara">I am a skilled web developer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <Link><button className="btn hireBtn" onClick={handleClick}><img src={btnImg} alt="Hire Me Img" className="btnImg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro