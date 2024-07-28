import React, { useState, useEffect } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedSection from '../../components/AnimatedSection';

export const Hero = () => {

  const socialIcons = [
    {
      id: 1,
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/rishikabanka/",
    },
    {
      id: 2,
      icon: <IoLogoGithub size={20} />,
      link: "https://github.com/RB0810",
    },
    {
      id: 3,
      icon: <MdEmail size={20} />,
      link: "mailto:rishika0810banka@gmail.com",
    }
  ];

  return (
    <>
      <motion.section className="hero-section">
        <motion.div
          className="intro_text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg viewBox="0 0 100wh 100vh">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </motion.div>
          <div className="container">
            <div className="content flexSB">
              <div className="left w-half">
                <div className="hero-content-box">
                  <span className="hero-sub-title">I am Rishika</span>
                  <h1 className="hero-title">
                    <Typewriter
                        words={['I turn ideas into code!']}
                        loop={1} // Set loop to 1 to type out the text once
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                  </h1>
                  <div className="hero-image-box d-md-none text-center">
                    <img src="assets/img/hero/me.png" alt="" />
                  </div>
                  <AnimatedSection>
                  <p className='lead'>A Full Stack Developer and Devops Engineer, with a keen interest in AI and Fintech.</p>
                  <div className="button-box flexG">
                    <a href="https://calendly.com/rishika0810banka/1-on-1-meet" target="_blank" className="btn tj-btn-secondary">
                      Schedule a call <i className="flaticon-download"></i>
                    </a>
                    <ul className="ul-reset social-icons">
                      {socialIcons.map((icon, index) => (
                        <li key={index}>
                          <a href={icon.link} target="_blank" rel="noopener noreferrer">{icon.icon}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  </AnimatedSection>
                </div>
              </div>
              <div className="right w-half">
                <motion.div
                    className="hero-image-box text-center"
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ 
                      duration: 1, 
                      ease: "easeOut", 
                      bounce: 0.5
                    }}
                >
                  <img src="../images/common/me.png" alt="logo" />
                </motion.div>            
              </div>
            </div>
          </div>
      </motion.section>
    </>
  );
};

export default Hero;
