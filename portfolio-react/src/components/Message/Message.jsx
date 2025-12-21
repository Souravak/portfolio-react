import React, {useState} from 'react';
import './Message.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Message = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nMessage: ${message}`);
        // Optionally, you can clear the input fields after submitting
        setName('');
        setMessage('');
    }

  return (
    <div id="messagePage">
        <h1 className="messagePageTitle">Message UI</h1>
        <div className="sendName form-group">
            <label htmlFor="name">Name:</label>
            <input className="form-control" type="text" id="name" value={name} onChange={handleNameChange} placeholder="Enter your name" />
        </div>
        <div className="sendMessage form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" id="message" value={message} onChange={handleMessageChange} placeholder="Enter your message" ></textarea>
        </div>
        <button onClick={handleSubmit} className="btn btn-success">Submit</button>
    </div>
  )
}

export default Message