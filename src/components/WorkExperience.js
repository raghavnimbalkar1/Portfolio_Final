import React from "react";

const experiences = [
  { role: "Full-Stack Intern", company: "Extensile Pvt.Ltd", year: "Jun 2024 - Aug 2024" },
  { role: "Front-End Intern", company: "Extensile Pvt.Ltd", year: "Jun 2023 - Aug 2023" },
];

function WorkExperience() {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index} className="experience-item">
            <div className="dot"></div>
            <div className="experience-info">
              <p className="role">{exp.role}</p>
              <p className="company">{exp.company} • {exp.year}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperience;
