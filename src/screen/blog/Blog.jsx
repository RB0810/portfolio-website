import { blogs } from "../../assets/data/data";
import AnimatedSection from "../../components/AnimatedSection";
import FunfactSection from "../../components/Funfact";

export const Blog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <AnimatedSection>
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInUp">What I do</h2>
            <p className=" wow fadeInUp" data-wow-delay=".4s">
              I like to make things that bring about some meaningful change in people's lives!
            </p>
          </div>
          </AnimatedSection>
          <div className="grid4">
            {blogs.map((blog) => (
              <AnimatedSection>
              <div className="blog-item" key={blog.id}>
                  <img src={blog.image} alt="" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        {blog.date}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="blog-title">{blog.title}</p>
                  </div>
                </div>
              </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="services-funfact">
          <FunfactSection />
          </div>
        </div>
      </section>
    </>
  );
};
