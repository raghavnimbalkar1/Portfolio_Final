import React from "react";
import "../styles.css"; 
import profilePic from "../assets/pfp.png";

function Header() {
  return (
    <header className="header">
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <div className="profile-details">
          <h1>Raghav Nimbalkar</h1>
          <p>Student at DYPIU</p>
          <p>Pune, Maharashtra</p>
        </div>
      </div>
      <div className="buttons">
        <a href="https://www.linkedin.com/in/raghavnimbalkar/" target="_blank" rel="noopener noreferrer">
          <button>Connect</button>
        </a>
        {/* Link to Gmail with pre-filled email */}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=raghav.nimbalkar@gmail.com&su=connection%20&body=I%20would%20like%20to%20connect..." target="_blank" rel="noopener noreferrer">
          <button>Message</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
