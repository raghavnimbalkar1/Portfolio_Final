import React from "react";

const skills = [
  "NodeJs",
  "ReactJs",
  "Python",
  "MERN Stack",
  "MongoDB",
  "C",
  "HTML, CSS",
];

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span className="skill-tag" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
