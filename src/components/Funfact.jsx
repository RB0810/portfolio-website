import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { hero } from "../assets/data/data";
import { useInView } from 'react-intersection-observer';

const FunfactSection = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,  // Trigger the animation only once
      threshold: 1,     // Adjust this value to set when the section should be considered visible
    });
  
    return (
      <div ref={ref} className="funfact-area grid4">
        {hero.map((item) => (
          <FunfactItem key={item.id} title={item.title} text={item.text} inView={inView} />
        ))}
      </div>
    );
  };
  
  const FunfactItem = ({ title, text, inView }) => {
    const [displayNumber, setDisplayNumber] = useState(0);
  
    useEffect(() => {
      if (!inView) return; // Only start animation if inView is true
  
      let start = 0;
      const end = parseInt(text, 10);
      const duration = 2000; // Duration of animation in milliseconds
      const incrementTime = 50; // Time between increments in milliseconds
  
      const incrementNumber = () => {
        if (start < end) {
          start += Math.ceil(end / (duration / incrementTime));
          setDisplayNumber(Math.min(start, end));
          setTimeout(incrementNumber, incrementTime);
        } else {
          setDisplayNumber(end);
        }
      };
  
      incrementNumber();
    }, [text, inView]); 
  
    return (
      <motion.div
        className="funfact-item"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="number">
          <span>{displayNumber}</span>
        </div>
        <div className="text">{title}</div>
      </motion.div>
    );
  };

export default FunfactSection;