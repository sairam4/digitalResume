import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import homepic from '../Resources/homepic.png';
import resumePDF from '../Resources/KhalidMKhan-Resume.pdf'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelopeOpenText,
  FaArrowRight
} from 'react-icons/fa';
import './lp.css';

const socialLinks = [
  { 
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Kahl-d",
    color: "#333"
  },
  { 
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/khalidm-khan/",
    color: "#0077b5"
  },
  { 
    name: "Email",
    icon: <FaEnvelopeOpenText />,
    url: "mailto:khalidmehtabk@gmail.com",
    color: "#ea4335"
  }
];

const LandingPage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const roles = [
    "AI Engineer",
    "Statistical Modeling Enthusiast",
    "Data Scientist",
    "NLP Expert",
    "Creative Designer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const roleVariants = {
    enter: { y: 20, opacity: 0 },
    center: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="landing-container">
      <div className="gradient-bg"></div>
      
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ 
              scale: 1.1,
              color: link.color
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <main className="main-content">
        <div className="text-content">
          <motion.p
            className="greeting"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1
            className="name"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Khalid M Khan
          </motion.h1>

          <div className="role-container">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex}
                className="role"
                variants={roleVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {roles[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            className="description"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Transforming data into meaningful insights and creating
            impactful solutions through innovative approaches.
          </motion.p>

          <motion.div
            className="cta-container"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <Link to="/projects">
              <motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <FaArrowRight style={{ marginLeft: "8px" }} />
              </motion.button>
            </Link>
            
            <a href={resumePDF} download>
              <motion.button
                className="cta-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </a>

          </motion.div>
        </div>

        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="image-backdrop"
            animate={{ 
              rotate: [-5, 5, -5],
              scale: [0.95, 1, 0.95]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <img 
            src={homepic}
            alt="Profile" 
            className="profile-image"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;