import React from 'react';
import './Footer.css';
import MessageIcon from '../../assets/message.png';
import Message from '../../components/Message/Message';
import { Link } from 'react-router-dom';  

// const message = () => {
//   window.location.href = '/message';
// };

const Footer = () => {
  return (
    <footer className="footer">
        <div>Copyright &#169; 2025 Sourav A K. All right reserved.</div>
        <div className="version">version : 2.2.4</div>
        <div className="messageBox">
          
          <span class="alt-text">Text Me</span>
          <Link to="/message">
            <img src={MessageIcon} alt="Message Icon" className="messageIcon"  />
          </Link>
        </div>
    </footer>
  )
}

export default Footer