import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiCplusplus, SiFlask, SiPytorch, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiScikitlearn, SiD3Dotjs } from "react-icons/si";
import { FaPython, FaGolang, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoCss3, IoLogoTableau } from "react-icons/io5";
import './SkillsPage.css';

const skillsData = [
  { name: "C++", category: "Language", icon: <SiCplusplus /> },
  { name: "Python", category: "Language", icon: <FaPython /> },
  { name: "JavaScript", category: "Language", icon: <IoLogoJavascript /> },
  { name: "Go", category: "Language", icon: <FaGolang /> },
  { name: "SQL", category: "Language" },
  { name: "HTML", category: "Development", icon: <FaHtml5 /> },
  { name: "CSS", category: "Development", icon: <IoLogoCss3 /> },
  { name: "React", category: "Development", icon: <FaReact /> },
  { name: "Flask", category: "Development", icon: <SiFlask /> },
  { name: "PyTorch", category: "Development", icon: <SiPytorch /> },
  { name: "TensorFlow", category: "Development", icon: <SiTensorflow /> },
  { name: "Keras", category: "Development", icon: <SiKeras /> },
  { name: "Pandas", category: "Development", icon: <SiPandas /> },
  { name: "NumPy", category: "Development", icon: <SiNumpy /> },
  { name: "Scikit-learn", category: "Development", icon: <SiScikitlearn /> },
  { name: "Tableau", category: "Development", icon: <IoLogoTableau /> },
  { name: "D3.js", category: "Development", icon: <SiD3Dotjs /> },
  { name: "Machine Learning", category: "Development" },
  { name: "Deep Learning", category: "Development" },
  { name: "Statistical Data Analysis", category: "Development" },
  { name: "Natural Language Processing", category: "Development" },
  { name: "Computer Vision", category: "Development" },
  { name: "Data Mining", category: "Development" },
  { name: "Artificial Intelligence", category: "Development" },
  { name: "Generative AI", category: "Development" },
  { name: "Communication", category: "Soft Skills" },
  { name: "Teamwork", category: "Soft Skills" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Time Management", category: "Soft Skills" },
  { name: "Adaptability", category: "Soft Skills" }
];

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterSkills = (category) => {
    setSelectedCategory(category);
  };

  const filteredSkills = selectedCategory === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div className="skills-page">
      <div className="filter-buttons">
        {["All", "Language", "Development", "Soft Skills"].map(category => (
          <motion.button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => filterSkills(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="skills-container">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.02 }}
          >
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
