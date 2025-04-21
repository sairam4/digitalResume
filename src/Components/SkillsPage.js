import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { 
  SiPython, SiJavascript, SiCplusplus, SiPytorch, SiTensorflow, 
  SiScikitlearn, SiPandas, SiNumpy, SiFlask, SiReact,
  SiDocker, SiKubernetes, SiAmazonaws, SiMicrosoftazure,
  SiMongodb, SiTableau, SiJupyter, SiGit, 
  SiWeightsandbiases, SiMysql
} from "react-icons/si";
import { 
  FaBrain, FaCode, FaDatabase, FaCloud, FaTools,
  FaMicrochip, FaRobot, FaChartLine, FaServer, FaSearch,
  FaChartBar
} from "react-icons/fa";
import './SkillsPage.css';

const allSkills = [
  // Programming Languages
  { name: "Python", icon: <SiPython />, category: "Programming", level: "Expert" },
  { name: "SQL", icon: <SiMysql />, category: "Programming", level: "Expert" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Programming", level: "Advanced" },
  { name: "C++", icon: <SiCplusplus />, category: "Programming", level: "Intermediate" },

  // ML & AI
  { name: "PyTorch", icon: <SiPytorch />, category: "ML & AI", level: "Expert" },
  { name: "scikit-learn", icon: <SiScikitlearn />, category: "ML & AI", level: "Expert" },
  { name: "LLM Fine-Tuning", icon: <FaRobot />, category: "ML & AI", level: "Advanced" },
  { name: "Supervised Learning", icon: <FaBrain />, category: "ML & AI", level: "Expert" },
  { name: "Unsupervised Learning", icon: <FaBrain />, category: "ML & AI", level: "Expert" },
  { name: "Model Evaluation", icon: <FaChartLine />, category: "ML & AI", level: "Expert" },
  { name: "Feature Engineering", icon: <FaTools />, category: "ML & AI", level: "Expert" },

  // NLP
  { name: "Named Entity Recognition", icon: <FaRobot />, category: "NLP", level: "Advanced" },
  { name: "Semantic Search", icon: <FaSearch />, category: "NLP", level: "Advanced" },
  { name: "Masked Language Modeling", icon: <FaRobot />, category: "NLP", level: "Advanced" },
  { name: "DeBERTa", icon: <FaRobot />, category: "NLP", level: "Advanced" },
  { name: "Mistral", icon: <FaRobot />, category: "NLP", level: "Advanced" },
  { name: "LLaMA", icon: <FaRobot />, category: "NLP", level: "Advanced" },

  // Tools & Platforms
  { name: "AWS", icon: <SiAmazonaws />, category: "Cloud & DevOps", level: "Advanced" },
  { name: "Azure", icon: <SiMicrosoftazure />, category: "Cloud & DevOps", level: "Intermediate" },
  { name: "Docker", icon: <SiDocker />, category: "Cloud & DevOps", level: "Advanced" },
  { name: "Ollama", icon: <FaRobot />, category: "Cloud & DevOps", level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Data Engineering", level: "Advanced" },
  { name: "Weights & Biases", icon: <SiWeightsandbiases />, category: "ML & AI", level: "Advanced" },
  { name: "Tableau", icon: <SiTableau />, category: "Data Engineering", level: "Advanced" },
  { name: "D3.js", icon: <FaChartBar />, category: "Programming", level: "Intermediate" },
  { name: "t-SNE", icon: <FaChartLine />, category: "ML & AI", level: "Advanced" },

  // Web Development
  { name: "React", icon: <SiReact />, category: "Programming", level: "Advanced" },
  { name: "Flask", icon: <SiFlask />, category: "Programming", level: "Advanced" },
  { name: "REST APIs", icon: <FaServer />, category: "Programming", level: "Advanced" }
];

const categories = [...new Set(allSkills.map(skill => skill.category))];

const InteractiveHeader = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const words = ["Machine Learning", "Data Science", "Cloud Computing", "Full Stack"];
  
  return (
    <div className="interactive-header">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="header-content"
      >
        <h1>Technical Skills</h1>
        <div className="floating-words">
          {words.map((word, index) => (
            <motion.span
              key={word}
              className="floating-word"
              onHoverStart={() => setHoveredWord(word)}
              onHoverEnd={() => setHoveredWord(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: hoveredWord === word ? 1.05 : 1,
                color: hoveredWord === word ? "var(--accent)" : "var(--text-secondary)"
              }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1 
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const SkillsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    return allSkills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <motion.div 
      className="skills-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InteractiveHeader />

      <motion.div 
        className="skills-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="search-container">
          <FaSearch className="search-icon" />
          <motion.input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <motion.div 
          className="filters-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="filter-group">
            <div className="filter-buttons">
              <motion.button
                className={`filter-button ${selectedCategory === "All" ? "active" : ""}`}
                onClick={() => setSelectedCategory("All")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                All
              </motion.button>
              {categories.map(category => (
                <motion.button
                  key={category}
                  className={`filter-button ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="skills-list"
          layout
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 }
            }
          }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3, delay: index * 0.05 }
                }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="skill-icon-container"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {skill.icon}
              </motion.div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsPage;