import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section className="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionate web developer with experience in HTML. CSS and JavaScript, as well as design software such as Abobe Photoshop and Illustrator.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Crafting intuitive UI/UX design to elevate user experience and seamlessly guide visitors through your website's content, ensuring engagement and satisfaction.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Designing captivating and user-centric web interfaces to enhance usability and create visually compelling online experiences.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Crafting sleek and intuitive app designs, blending functionality with aesthetic appeal to deliver a seamless and delightful user experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills