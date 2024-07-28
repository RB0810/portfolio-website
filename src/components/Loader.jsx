import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <div className="hero-section">
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
  </div>
);

export default Loader;
