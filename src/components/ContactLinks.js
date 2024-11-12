import React from "react";

const contactLinks = [
  { name: "Twitter", url: "#", username: "@alexalee" },
  { name: "Dribbble", url: "#", username: "@alexalee" },
  { name: "GitHub", url: "#", username: "@alexalee" },
  { name: "Medium", url: "#", username: "@alexalee" },
  { name: "LinkedIn", url: "#", username: "@alexalee" },
];

function ContactLinks() {
  return (
    <section className="contact">
      <h2>Contact Links</h2>
      <div className="social-links">
        {contactLinks.map((link, index) => (
          <a href={link.url} key={index}>{link.name} ({link.username})</a>
        ))}
      </div>
    </section>
  );
}

export default ContactLinks;
