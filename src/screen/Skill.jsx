import { skillsData } from "../assets/data/data";
import AnimatedSection from "../components/AnimatedSection.jsx";

export const Skill = () => {
  return (
    <>
      <section className="skills-section">
        <div className="container">
          <div className="section-header text-center">
          <AnimatedSection>
            <h2 className="section-title">My Skills</h2>
            <p>The languages, frameworks and tools I use</p>
          </AnimatedSection>
          </div>

          <div className="skills-widget grid6">
            {skillsData.map((skill) => (
            <AnimatedSection key={skill.id}>
               <div className="skill-item" key={skill.id}>
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="number">{skill.name}</div>
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
