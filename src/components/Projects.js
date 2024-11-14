import React, { useRef, useEffect } from "react";
import unihavenImg from "./chaintix.png";
import digitalShelfImg from "./chaintix.png";
import chainTixImg from "./chaintix.png";

const projects = [
  { title: "Unihaven", image: unihavenImg, link: "https://github.com/raghavnimbalkar1/UniHaven" },
  { title: "DigitalShelf", image: digitalShelfImg, link: "https://github.com/raghavnimbalkar1/DigitalShelf" },
  { title: "ChainTix", image: chainTixImg, link: "https://github.com/raghavnimbalkar1/ChainTix" },
  { title: "Barks & Whiskers", image: chainTixImg, link: "https://github.com/raghavnimbalkar1/ChainTix" },
  { title: "MyBlog", image: chainTixImg, link: "https://github.com/raghavnimbalkar1/ChainTix" },
];

function Projects() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Handle swipe gesture
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let startX;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX;
      const moveX = startX - touchX;

      if (moveX > 20) scrollRight(); // swipe left to scroll right
      if (moveX < -20) scrollLeft(); // swipe right to scroll left
    };

    const handleWheel = (e) => {
      if (e.deltaY > 0) scrollRight(); // scroll down to scroll right
      else scrollLeft(); // scroll up to scroll left
    };

    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);
    scrollContainer.addEventListener("wheel", handleWheel);

    return () => {
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-scroll-container">
        <button onClick={scrollLeft} className="scroll-button">{"<"}</button>
        <div className="project-list" ref={scrollContainerRef}>
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
        <button onClick={scrollRight} className="scroll-button">{">"}</button>
      </div>
    </section>
  );
}

export default Projects;
