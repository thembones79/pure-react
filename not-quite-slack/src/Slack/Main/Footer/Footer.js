import React from 'react';
import './Footer.css';

const Footer = ({ inputText, handleEnter, handleChange, activeChannel }) => {
    return (
      <div className="footer">
        <input
          className="message"
          placeholder={`Type your message here. Press ENTER to send.`}
          value={inputText}
          onKeyPress={handleEnter}
          onChange={handleChange}
          disabled={activeChannel === "none"}
        />
      </div>
    );
  };

export default Footer;