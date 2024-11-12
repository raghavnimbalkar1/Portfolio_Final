import React from "react";

const skills = ["Illustration", "UI/UX Design", "Front-end Development", "Graphic Design"];

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
