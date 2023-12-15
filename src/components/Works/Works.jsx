import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
const Works = () => {
  return (
    <section className="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I tae pride in paying attention to the smallest details and making sure that my work is pixel perfect. I'm excited to bring my skills and experience to help business achieve their goals and create a strong online presence."</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="Portfolio Image1" className="worksImgs" />
            <img src={Portfolio2} alt="Portfolio Image2" className="worksImgs" />
            <img src={Portfolio3} alt="Portfolio Image3" className="worksImgs" />
            <img src={Portfolio4} alt="Portfolio Image4" className="worksImgs" />
            <img src={Portfolio5} alt="Portfolio Image5" className="worksImgs" />
            <img src={Portfolio6} alt="Portfolio Image6" className="worksImgs" />
        </div>
    </section>
  )
}

export default Works