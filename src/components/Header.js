import React from "react";
import "../styles.css"; 

function Header() {
  return (
    <header className="header">
      <div className="header-image"></div>
      <div className="profile">
        <img src="path-to-your-profile.jpg" alt="Profile" className="profile-img" />
        <h1>Alexa Lee</h1>
        <p>Product Designer at Google</p>
        <p>San Francisco, CA</p>
        <div className="buttons">
          <button>Connect</button>
          <button>Message</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
