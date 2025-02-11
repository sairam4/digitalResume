import React from "react";
import { motion } from "framer-motion";
import './AboutPage.css';
import { FaCameraRetro } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdDirectionsBike } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";

const interests = [
  { icon: <FaCameraRetro/>, label: "Photography" },
  { icon: <FaBasketball/>, label: "Basketball" },
  { icon: <IoCodeSlash/>, label: "Coding" },
  { icon: <CgWebsite/>, label: "Creative Websites" },
  { icon: <MdDirectionsBike/>, label: "Biking" },
  { icon: <TbTrekking/>, label: "Trekking" },
  { icon: <GiBookshelf/>, label: "Literature" }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.div
        className="about-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Me</h1>
        <p>A glimpse into my life, interests, and passions.</p>
      </motion.div>

      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Background</h2>
        <p>
          I'm Khalid M Khan, a passionate data science enthusiast with a Master's degree in Data Science & AI from San Francisco State University, holding a GPA of 4.0. I have a strong foundation in computer science and a keen interest in machine learning.
        </p>
      </motion.section>

      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Interests and Hobbies</h2>
        <div className="interests-container">
          {interests.map((interest, index) => (
            <motion.div
              className="interest-item"
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="interest-icon">{interest.icon}</div>
              <p>{interest.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Professional Journey</h2>
        <p>
          My journey includes working at Innovaccer as a Healthcare Data Associate, contributing to data-driven decision-making, and engaging in research and leadership roles at San Francisco State University.
        </p>
      </motion.section>

      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Skills & Expertise</h2>
        <p>
          Proficient in Python, C++, SQL, and tools like React, Flask, and PyTorch. Specializing in machine learning, data visualization, and NLP.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutPage;
