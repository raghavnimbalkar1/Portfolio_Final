import React from "react";
import unihavenImg from "./chaintix.png";
import digitalShelfImg from "./chaintix.png";
import chainTixImg from "./chaintix.png";

const projects = [
  { title: "Unihaven", image: unihavenImg, link: "https://github.com/raghavnimbalkar1/UniHaven" },
  { title: "DigitalShelf", image: digitalShelfImg, link: "https://github.com/raghavnimbalkar1/DigitalShelf" },
  { title: "ChainTix", image: chainTixImg, link: "https://github.com/raghavnimbalkar1/ChainTix" },
  { title: "ChainTix", image: chainTixImg, link: "https://github.com/raghavnimbalkar1/ChainTix" },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="project-info">
              <p>{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
