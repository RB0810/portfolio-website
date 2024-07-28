import { Hero, Portfolio, Resume, Skill, Blog, Footer } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
        <Blog />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="experience">
        <Resume />
      </section>
      <section id="projects">
        <Portfolio />
      </section>
    </>
  );
};
