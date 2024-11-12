import React from "react";

const experiences = [
  { role: "Product Designer", company: "Google", year: "2021-Now" },
  { role: "Product Designer", company: "LinkedIn", year: "2019-2021" },
  { role: "Product Designer", company: "Accenture", year: "2016-2019" },
  { role: "Product Design Intern", company: "Facebook", year: "2015" },
];

function WorkExperience() {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <p>{exp.role}</p>
            <p>{exp.company} • {exp.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkExperience;
