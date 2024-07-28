import React from "react";
import { experienceData } from "../assets/data/data";
import AnimatedSection from "../components/AnimatedSection.jsx";

export const Resume = () => {
  return (
    <>
      <section className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <AnimatedSection>
              <h2 className="section-title">My Experience</h2>
              <p>The roles I've held and the companies I've contributed to</p>
            </AnimatedSection>
          </div>
          <div className="timeline">
            {experienceData.map((item, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={item.id}>
                <div className="logo">
                  <img src={item.logo} alt={`${item.institute} logo`} />
                </div>
                <AnimatedSection>
                <div className="content">
                  <div className="time">{item.time}</div>
                  <h3 className="resume-title">{item.institute}</h3>
                  <div className="resume-job">{item.title}</div>
                  <div className="institute">{item.desc}</div>
                  <span className="arrow"></span>
                </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
