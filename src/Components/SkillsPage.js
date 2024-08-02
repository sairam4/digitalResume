import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiCplusplus, SiFlask, SiPytorch, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiScikitlearn, SiD3Dotjs } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FaPython, FaGolang, FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoCss3, IoLogoTableau } from "react-icons/io5";
import { GiMining } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa";
import { FaLowVision } from "react-icons/fa";
import { SiStatista } from "react-icons/si";
import { RiRobot3Fill } from "react-icons/ri";
import './SkillsPage.css';
import { RiAiGenerate } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { VscCommentUnresolved } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import { RiExchange2Line } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";

const skillsData = [
  { name: "C++", category: "Language", icon: <SiCplusplus /> },
  { name: "Python", category: "Language", icon: <FaPython /> },
  { name: "JavaScript", category: "Language", icon: <IoLogoJavascript /> },
  { name: "Go", category: "Language", icon: <FaGolang /> },
  { name: "SQL", category: "Language", icon: <SiMysql /> },
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
  { name: "Machine Learning", category: "Development", icon: <GiTeacher /> },
  { name: "Deep Learning", category: "Development", icon: <GiBrain /> },
  { name: "Statistical Data Analysis", category: "Development", icon: <SiStatista /> },
  { name: "Natural Language Processing", category: "Development", icon: <FaLanguage /> },
  { name: "Computer Vision", category: "Development" , icon: <FaLowVision /> },
  { name: "Data Mining", category: "Development", icon: <GiMining /> },
  { name: "Artificial Intelligence", category: "Development", icon: <RiRobot3Fill /> },
  { name: "Generative AI", category: "Development", icon: <RiAiGenerate /> },
  { name: "Communication", category: "Soft Skills", icon: <GiSatelliteCommunication /> },
  { name: "Teamwork", category: "Soft Skills", icon : <RiTeamLine /> },
  { name: "Problem Solving", category: "Soft Skills", icon : <VscCommentUnresolved /> },
  { name: "Time Management", category: "Soft Skills" , icon : <FaBusinessTime /> },
  { name: "Adaptability", category: "Soft Skills" , icon: <RiExchange2Line /> }
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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