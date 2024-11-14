import React from "react";

const skills = {
  Languages: ["Python" , "JavaScript" , "C"],
  "Libraries & Frameworks": ["NumPy" , "Pandas" , "ReactJS" , "Node.js" , "ExpressJs" , "Bootstrap" , "HTML" , "CSS"],
  Database: ["MongoDB"],
  Tools: ["Git" , "GitHub" , "Postman" , "Visual Studio" , "Photoshop" , "Godot Engine"],
};

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        {Object.entries(skills).map(([category, items], index) => (
          <div className="skill-category" key={index}>
            <span className="skill-title">{category}:</span>
            <span className="skill-items">{items.join(", ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
