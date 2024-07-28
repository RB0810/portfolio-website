import React, { useState } from "react";
import { projects } from "../../assets/data/data";
import AnimatedSection from "../../components/AnimatedSection";
import { IoLogoGithub } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.type.includes(activeFilter)
  );

  return (
    <>
      <section className="blog-section">
        <div className="container">
          <AnimatedSection>
            <div className="section-header text-center">
              <h2 className="section-title">My Projects</h2>
              <p>Some of my recent works</p>
            </div>
          </AnimatedSection>

          <div className="portfolio-filter text-center">
            <AnimatedSection>
              <div className="button-group filter-button-group">
                <button 
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={() => handleFilterClick("all")}
                >
                  All
                </button>
                <button
                  className={activeFilter === "website" ? "active" : ""}
                  onClick={() => handleFilterClick("website")}
                >
                  Website
                </button>
                <button
                  className={activeFilter === "app" ? "active" : ""}
                  onClick={() => handleFilterClick("app")}
                >
                  App
                </button>
                <button
                  className={activeFilter === "IoT" ? "active" : ""}
                  onClick={() => handleFilterClick("IoT")}
                >
                  IoT
                </button>
                <button
                  className={activeFilter === "AI" ? "active" : ""}
                  onClick={() => handleFilterClick("AI")}
                >
                  AI
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="grid2">
            {filteredProjects.map((project) => (
              <AnimatedSection key={project.id}>
                <div className="blog-item no-hover">
                  <img src={project.cover} alt="" />
                  <div className="blog-content">
                    <h2 className="project-title">
                      <p>{project.title}</p>
                    </h2>
                    <p className="blog-meta margin-top-project">
                      {project.desc}
                    </p>
                    <ul className="ul-reset social-icons">
                    {project.video || project.github ? (
                    <>
                      {
                        project.video && (
                          <li key={project.id + '-youtube'}>
                            <a href={project.video} target="_blank" rel="noopener noreferrer">
                              <FaYoutube size={20} />
                            </a>
                          </li>
                        )
                      }
                      {project.github && (
                        <li key={project.id + '-github'}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <IoLogoGithub size={20} />
                          </a>
                        </li>
                      )}
                    </>
                  ) : (
                    <p className="small-text">This is an ongoing project. <br/> Links will be added after the project is completed.</p>
                  )}
                  </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
