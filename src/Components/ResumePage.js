import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCode, FaDatabase, FaProjectDiagram, FaAward } from "react-icons/fa";
import { SiPython, SiJavascript, SiCplusplus, SiGo, SiReact, SiFlask, SiD3Dotjs, SiTableau, SiPytorch, SiScikitlearn, SiTensorflow } from "react-icons/si";
import './ResumePage.css';

const ResumePage = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Go", icon: <SiGo /> },
    { name: "React", icon: <SiReact /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "d3.js", icon: <SiD3Dotjs /> },
    { name: "Tableau", icon: <SiTableau /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
  ];

  return (
    <div className="resume-page">
      <motion.div
        className="resume-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Khalid M Khan</h1>
        <div className="contact-info">
          <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
            <FaEnvelope /> <span>email.khalidmkhan@gmail.com</span>
          </motion.div>
          <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
            <FaPhone /> <span>+1 (404) 263-7813</span>
          </motion.div>
          <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
            <FaLinkedin /> <span>LinkedIn</span>
          </motion.div>
          <motion.div className="contact-item" whileHover={{ scale: 1.1 }}>
            <FaGithub /> <span>GitHub</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Professional Summary</h2>
        <p>
          Innovative data science enthusiast with a keen aptitude for identifying patterns and insights within numbers and data. Passionate about leveraging IT solutions in the public sector, with proven ability to adapt and excel in collaborative, cross-departmental projects. Driven towards advancing technology through creative solutions and meticulous learning. Excels in applying comprehensive statistical analysis and machine learning techniques to develop and optimize predictive models and AI-driven applications.
        </p>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Education</h2>
        <div className="education-item">
          <h3>Master of Science, Data Science & Artificial Intelligence</h3>
          <p>San Francisco State University, Aug 2023 – Present, GPA: 4.0</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Technology in Computer Science and Engineering</h3>
          <p>The LNM Institute of Information Technology, Jaipur, Aug 2017 – Sep 2021</p>
        </div>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Healthcare Data Associate</h3>
          <p>Innovaccer | Jan 2021 – Sep 2022</p>
          <ul>
            <li>Enhanced lead generation by analyzing historical data, resulting in a 20% improvement through targeted strategy adjustments.</li>
            <li>Created SQL dashboards with advanced visualization tools, significantly enhancing the assessment of network campaign performances and enabling more data-driven decision-making.</li>
            <li>Boosted conversion rates by 10% by integrating interactive elements into our web platforms, enriching user engagement.</li>
            <li>Led a 3-person team in establishing key relationships with healthcare professionals nationwide, focusing on gathering in-depth requirements and conducting use case studies to inform our project strategy.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              whileHover={{ scale: 1.1, rotate: 10 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Statistical Data Analysis</h3>
          <p>Developed a Python-based predictive modeling system with an integrated Tableau dashboard for real-time data visualization, enhancing decision-making processes and operational efficiency.</p>
        </div>
        <div className="project-item">
          <h3>Natural Language Technologies</h3>
          <p>Designed a system for efficient text extraction and ranking, with n-grams and language models enhancing text analysis.</p>
        </div>
        <div className="project-item">
          <h3>Machine Learning Artificial Intelligence</h3>
          <p>Engineered sophisticated AI algorithms to master adversarial game strategies, showcasing cutting-edge applications in AI for strategic decision-making and AI ethics.</p>
        </div>
        <div className="project-item">
          <h3>Performance Analysis Visualization System for Classifier Models</h3>
          <p>Developed a visualization system tailored for deep analytical evaluation of AI models, enhancing the interpretability and transparency of complex AI systems.</p>
        </div>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h2>Achievements</h2>
        <ul>
          <li>Student Leader and RA, SFSU: Fostered community and support among students while managing responsibilities and events at San Francisco State University.</li>
          <li>Event Head, Vivacity, LNMIIT: Managed cross-functional teams, contributing to the success of the event.</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default ResumePage;
