// src/Components/SkillsPage.js
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { 
  SiPython, SiJavascript, SiCplusplus, SiPytorch, SiTensorflow,
  SiScikitlearn, SiPandas, SiNumpy, SiFlask, SiReact,
  SiDocker, SiKubernetes, SiAmazonaws, SiMicrosoftazure,
  SiMongodb, SiTableau, SiJupyter, SiGit,
  SiWeightsandbiases, SiMysql,
  SiNextdotjs,
  SiPowerbi,
  SiPowerautomate,
  SiMicrosoftsharepoint,
  SiPowerapps,
  SiFastapi,
  SiOpencv,
  SiOpenai,
  SiNgrok,
  SiPostgresql,
  SiMicrosoftsqlserver
} from "react-icons/si";
import { 
  FaBrain, FaCode, FaDatabase, FaCloud, FaTools,
  FaMicrochip, FaRobot, FaChartLine, FaServer,
  FaImage, FaMicroscope, FaLightbulb
} from "react-icons/fa";
import './SkillsPage.css';

const allSkills = [
  { name: "Python", icon: <SiPython />, category: "Programming" },
  { name: "SQL", icon: <SiMysql />, category: "Programming" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Programming" },
  { name: "C++", icon: <SiCplusplus />, category: "Programming" },
  { name: "PyTorch", icon: <SiPytorch />, category: "ML & AI" },
  { name: "scikit-learn", icon: <SiScikitlearn />, category: "ML & AI" },
  { name: "Model Fine-Tuning", icon: <FaRobot />, category: "ML & AI" },
  { name: "Supervised Learning", icon: <FaBrain />, category: "ML & AI" },
  { name: "Unsupervised Learning", icon: <FaBrain />, category: "ML & AI" },
  { name: "Model Evaluation", icon: <FaChartLine />, category: "ML & AI" },
  { name: "Feature Engineering", icon: <FaTools />, category: "ML & AI" },
  { name: "Named Entity Recognition", icon: <FaRobot />, category: "NLP" },
  { name: "Semantic Search", icon: <FaCloud />, category: "NLP" },
  { name: "FastAPI", icon: <SiFastapi />, category: "Web Dev" },
  { name: "React", icon: <SiReact />, category: "Web Dev" },
  
  { name: "Docker", icon: <SiDocker />, category: "Cloud & DevOps" },
  { name: "Kubernetes", icon: <SiKubernetes />, category: "Cloud & DevOps" },
  { name: "AWS", icon: <SiAmazonaws />, category: "Cloud & DevOps" },
  { name: "Azure", icon: <SiMicrosoftazure />, category: "Cloud & DevOps" },

  { name: "Power BI", icon: <SiPowerbi />, category: "Power Platform" },
  { name: "Power Apps", icon: <SiPowerapps />, category: "Power Platform" },
  { name: "Power Automate", icon: <SiPowerautomate />, category: "Power Platform" },
  { name: "SharePoint", icon: <SiMicrosoftsharepoint />, category: "Power Platform" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Data Engineering" },
  { name: "Next.js", icon: <FaCode />, category: "Web Dev" },
  { name: "ChromaDB", icon: <FaDatabase />, category: "Data Engineering" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Data Engineering" },
  { name: "SQLServer", icon: <SiMicrosoftsqlserver />, category: "Data Engineering" },
  { name: "OpenCV", icon: <SiOpencv />, category: "Computer Vision" },
  { name: "EasyOCR", icon: <FaImage />, category: "Computer Vision" },
  { name: "Google Vision API", icon: <FaImage />, category: "Computer Vision" },
  { name: "DALL·E API", icon: <SiOpenai />, category: "Generative AI" },
  { name: "OpenAI", icon: <SiOpenai />, category: "Generative AI" },
  { name: "BERT", icon: <FaBrain />, category: "ML & AI" },
  { name: "TinyViT", icon: <FaBrain />, category: "ML & AI" },
  { name: "Chain-of-Thought Prompting", icon: <FaBrain />, category: "ML & AI" },
  { name: "Prompt Engineering", icon: <FaLightbulb />, category: "ML & AI" },
  { name: "Open Source LLMs", icon: <FaBrain />, category: "Generative AI" },
  { name: "Docker Compose", icon: <SiDocker />, category: "Cloud & DevOps" },
  { name: "ngrok", icon: <SiNgrok />, category: "Web Dev" }
];

const categories = ["All", ...new Set(allSkills.map(s => s.category))];

const InteractiveHeader = () => {
  const [hovered, setHovered] = useState(null);
  const words = ["Machine Learning", "Data Science", "Cloud Computing", "Full Stack"];
  return (
    <div className="interactive-header">
      <motion.div
        className="header-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Technical Skills</h1>
        <p className="skills-subtitle">
        From training models to deploying full-stack platforms and scaling them in the cloud - these are the tools I use to build real-world solutions .
        </p>
        <div className="floating-words">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className="floating-word"
              onHoverStart={() => setHovered(w)}
              onHoverEnd={() => setHovered(null)}
              animate={{
                scale: hovered === w ? 1.1 : 1,
                color: hovered === w ? "var(--primary)" : "var(--text-secondary)"
              }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {w}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const SkillsPage = () => {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return allSkills.filter(s =>
      (cat === "All" || s.category === cat) &&
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, cat]);

  return (
    <motion.div
      className="skills-container"
      style={{ width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <InteractiveHeader />

      <div className="skills-content" style={{ maxWidth: "1400px", width: "100%", margin: "0 auto" }}>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-button${cat === c ? " active" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="skills-list">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="skill-icon-container">{skill.icon}</div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;