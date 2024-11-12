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
        <button>Connect</button>
        <button>Message</button>
      </div>
    </header>
  );
}

export default Header;
