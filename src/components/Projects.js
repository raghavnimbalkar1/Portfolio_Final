import React from "react";

const projects = [
  { title: "Unihaven", year: "2021", image: "./Unihaven.jpg" },
  { title: "DigitalShelf", year: "2019", image: "./chaintix.png" },
  { title: "ChainTix", year: "2016", image: "./chaintix.png" },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt="photo" />
            <p>{project.title}</p>
            <p>{project.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
