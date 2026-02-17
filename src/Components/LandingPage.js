import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import homepic from '../Resources/shreyashomepic.png';
import resumePDF from '../Resources/ShreyasRaghuramanResume.pdf'
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
    url: "https://github.com/sairam4",
    color: "#1B4332"
  },
  { 
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/shreyas-rscp/",
    color: "#0077b5"
  },
  { 
    name: "Email",
    icon: <FaEnvelopeOpenText />,
    url: "mailto:shreyasraghuraman@gmail.com",
    color: "#ea4335"
  }
];

const LandingPage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // AI-focused roles for rotation
  const roles = [
   "AI Engineer",
    "Full Stack Developer",
    "Data Engineer",
    "Power Platform Expert",
    "AI Acceleration Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % roles.length);
    }, 3200); // slightly longer for polished feel
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
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" }
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
            Shreyas Raghuraman
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

          <motion.div 
            className="terminal-box"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <code>&gt; run.sh --optimize llama --deploy ollama</code>
          </motion.div>

          <motion.p
            className="description"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            I build with AI that works — fast, smart, and real.
            From full-stack apps to edge-optimized models, 
            I turn tools into impact and ideas into high-performance systems.
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
