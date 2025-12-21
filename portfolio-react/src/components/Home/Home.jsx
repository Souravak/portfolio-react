import react from 'react';
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Skills from "../Skills/Skills";
import Works from "../Works/Works"; 
import Contact from "../Contact/Contact"; 
import Footer from "../Footer/Footer";  
import MyApps from "../MyApps/MyApps";
import Message from "../Message/Message";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      {/* <MyApps /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default Home