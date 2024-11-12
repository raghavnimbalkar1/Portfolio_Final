import React from "react";

// You can either use FontAwesome icons or import images for each logo
import { FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa6";

const contactLinks = [
  { name: "Twitter", url: "https://x.com/raghavnimbalkar", username: "@raghavnimbalkar", icon: <FaTwitter /> },
  { name: "GitHub", url: "https://github.com/raghavnimbalkar1", username: "@raghavnimbalkar1", icon: <FaGithub /> },
  { name: "LeetCode", url: "https://leetcode.com/u/RaghavNimbalkar/", username: "@RaghavNimbalkar", icon: <FaKeyboard /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/raghavnimbalkar/", username: "@raghavnimbalkar", icon: <FaLinkedin /> },
];

function ContactLinks() {
  return (
    <section className="contact">
      <h2>Contact Links</h2>
      <div className="social-links">
        {contactLinks.map((link, index) => (
          <a href={link.url} key={index} className="contact-card">
            <div className="icon">{link.icon}</div>
            <p className="social-name">{link.name}</p>
            <p className="username">{link.username}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactLinks;
