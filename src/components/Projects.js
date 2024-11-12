import React from "react";

const projects = [
  { title: "Google Workspace", year: "2021", image: "project1.jpg" },
  { title: "LinkedIn Learning", year: "2019", image: "project2.jpg" },
  { title: "Accenture App", year: "2016", image: "project3.jpg" },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
            <p>{project.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
