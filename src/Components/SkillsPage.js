import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiCplusplus, SiFlask, SiPytorch, SiTensorflow, 
  SiKeras, SiPandas, SiNumpy, SiScikitlearn, 
  SiD3Dotjs, SiMysql, SiStatista, SiHuggingface,
  SiPython, SiJavascript, SiGo, SiReact, SiMongodb,
  SiAmazonaws, SiGooglecloud, SiDocker, SiKubernetes,
  SiGit, SiJupyter, SiScala, SiApachekafka, SiApachespark,
  SiHadoop, SiJira, SiPowerbi, SiPostgresql, SiRedis
} from "react-icons/si";
import { 
  FaPython, FaHtml5, FaReact, FaLanguage, FaLowVision, 
  FaGolang, FaBusinessTime, FaChartLine, FaCode, 
  FaToolbox, FaBrain, FaDatabase, FaCloud, FaNetworkWired,
  FaServer, FaMicrochip, FaRobot
} from "react-icons/fa";
import { 
  IoLogoJavascript, IoLogoCss3, IoLogoTableau 
} from "react-icons/io5";
import { 
  GiTeacher, GiBrain, GiMining, GiSatelliteCommunication,
  GiArtificialIntelligence, GiProcessor
} from "react-icons/gi";
import { 
  RiRobot3Fill, RiAiGenerate, RiTeamLine, RiExchange2Line,
  RiOpenSourceFill, RiFileChartLine, RiMindMap
} from "react-icons/ri";
import { 
  VscCommentUnresolved 
} from "react-icons/vsc";
import { 
  MdAutoGraph, MdOutlineModelTraining, MdAutoFixHigh,
  MdAutoAwesome, MdDataThresholding, MdSpeed
} from "react-icons/md";
import { 
  TbMathFunction, TbBrandOpenai, TbBrainCog
} from "react-icons/tb";

import './SkillsPage.css';

// Enhanced and reorganized skills data with better categorization
const skillsData = [
  // AI & Machine Learning
  { 
    name: "Machine Learning", 
    category: "AI & ML", 
    icon: <FaBrain />, 
    level: 90,
    description: "Regression, Classification, Clustering, Ensemble methods"
  },
  { 
    name: "Deep Learning", 
    category: "AI & ML", 
    icon: <GiBrain />, 
    level: 85,
    description: "CNN, RNN, LSTM, Transformers"
  },
  { 
    name: "Natural Language Processing", 
    category: "AI & ML", 
    icon: <FaLanguage />, 
    level: 88,
    description: "Text classification, Named Entity Recognition, Sentiment Analysis"
  },
  { 
    name: "Computer Vision", 
    category: "AI & ML", 
    icon: <FaLowVision />, 
    level: 80,
    description: "Object detection, Image segmentation, Feature extraction"
  },
  { 
    name: "Generative AI", 
    category: "AI & ML", 
    icon: <RiAiGenerate />, 
    level: 85,
    description: "Diffusion models, GANs, LLMs, Text-to-image"
  },
  { 
    name: "Transformers", 
    category: "AI & ML", 
    icon: <RiAiGenerate />, 
    level: 85,
    description: "BERT, GPT, T5, LoRA fine-tuning"
  },
  { 
    name: "Reinforcement Learning", 
    category: "AI & ML", 
    icon: <MdAutoAwesome />, 
    level: 75,
    description: "Q-learning, Policy Gradients, PPO"
  },
  { 
    name: "LLM Prompt Engineering", 
    category: "AI & ML", 
    icon: <TbBrandOpenai />, 
    level: 92,
    description: "Chain of thought, Few-shot learning, RAG techniques"
  },

  // Programming Languages
  { 
    name: "Python", 
    category: "Languages", 
    icon: <FaPython />, 
    level: 95,
    description: "Primary language for data science and ML implementation"
  },
  { 
    name: "JavaScript", 
    category: "Languages", 
    icon: <IoLogoJavascript />, 
    level: 85,
    description: "Frontend and Node.js development"
  },
  { 
    name: "C++", 
    category: "Languages", 
    icon: <SiCplusplus />, 
    level: 75,
    description: "Performance-critical applications"
  },
  { 
    name: "SQL", 
    category: "Languages", 
    icon: <SiMysql />, 
    level: 90,
    description: "Database queries and data manipulation"
  },
  { 
    name: "Go", 
    category: "Languages", 
    icon: <SiMysql />, 
    level: 70,
    description: "High-performance microservices"
  },

  // Data Science & Analysis
  { 
    name: "Statistical Analysis", 
    category: "Data Science", 
    icon: <SiStatista />, 
    level: 88,
    description: "Hypothesis testing, Regression analysis, Experimental design"
  },
  { 
    name: "Data Visualization", 
    category: "Data Science", 
    icon: <MdAutoGraph />, 
    level: 85,
    description: "Creating insightful visual representations of data"
  },
  { 
    name: "Feature Engineering", 
    category: "Data Science", 
    icon: <MdDataThresholding />, 
    level: 90,
    description: "Transforming raw data into meaningful features"
  },
  { 
    name: "Exploratory Data Analysis", 
    category: "Data Science", 
    icon: <RiFileChartLine />, 
    level: 92,
    description: "Uncovering patterns and insights in data"
  },
  { 
    name: "Predictive Modeling", 
    category: "Data Science", 
    icon: <FaChartLine />, 
    level: 85,
    description: "Forecasting trends and outcomes"
  },
  { 
    name: "A/B Testing", 
    category: "Data Science", 
    icon: <TbMathFunction />, 
    level: 80,
    description: "Experiment design and hypothesis testing"
  },

  // Frameworks & Libraries
  { 
    name: "PyTorch", 
    category: "Frameworks", 
    icon: <SiPytorch />, 
    level: 90,
    description: "Deep learning model development and training"
  },
  { 
    name: "TensorFlow", 
    category: "Frameworks", 
    icon: <SiTensorflow />, 
    level: 85,
    description: "Building and deploying ML models"
  },
  { 
    name: "Scikit-learn", 
    category: "Frameworks", 
    icon: <SiScikitlearn />, 
    level: 95,
    description: "Classical machine learning algorithms"
  },
  { 
    name: "Hugging Face", 
    category: "Frameworks", 
    icon: <SiScikitlearn />, 
    level: 88,
    description: "Transformer models and NLP pipelines"
  },
  { 
    name: "Pandas", 
    category: "Frameworks", 
    icon: <SiPandas />, 
    level: 95,
    description: "Data manipulation and analysis"
  },
  { 
    name: "NumPy", 
    category: "Frameworks", 
    icon: <SiNumpy />, 
    level: 95,
    description: "Numerical computing and array operations"
  },
  { 
    name: "React", 
    category: "Frameworks", 
    icon: <FaReact />, 
    level: 85,
    description: "Frontend development for data applications"
  },
  { 
    name: "Flask", 
    category: "Frameworks", 
    icon: <SiFlask />, 
    level: 80,
    description: "Lightweight web applications and API development"
  },

  // DevOps & Cloud
  { 
    name: "AWS", 
    category: "DevOps & Cloud", 
    icon: <SiAmazonaws />, 
    level: 75,
    description: "SageMaker, Lambda, S3, EC2"
  },
  { 
    name: "Docker", 
    category: "DevOps & Cloud", 
    icon: <SiDocker />, 
    level: 80,
    description: "Containerization for ML applications"
  },
  { 
    name: "Model Deployment", 
    category: "DevOps & Cloud", 
    icon: <MdOutlineModelTraining />, 
    level: 85,
    description: "Endpoint creation, monitoring, and scaling"
  },
  { 
    name: "MLOps", 
    category: "DevOps & Cloud", 
    icon: <FaToolbox />, 
    level: 80,
    description: "CI/CD for ML, model versioning, monitoring"
  },

  // Soft Skills
  { 
    name: "Research & Problem Solving", 
    category: "Soft Skills", 
    icon: <VscCommentUnresolved />, 
    level: 95,
    description: "Methodical approach to complex problems"
  },
  { 
    name: "Cross-functional Collaboration", 
    category: "Soft Skills", 
    icon: <RiTeamLine />, 
    level: 90,
    description: "Working effectively with diverse teams"
  },
  { 
    name: "Technical Communication", 
    category: "Soft Skills", 
    icon: <GiSatelliteCommunication />, 
    level: 88,
    description: "Explaining complex concepts clearly"
  },
  { 
    name: "Project Management", 
    category: "Soft Skills", 
    icon: <FaBusinessTime />, 
    level: 85,
    description: "Planning, execution, and delivery of ML projects"
  },
  { 
    name: "Continuous Learning", 
    category: "Soft Skills", 
    icon: <RiExchange2Line />, 
    level: 95,
    description: "Staying current with rapidly evolving technologies"
  }
];

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(skillsData);
  const [activeSkill, setActiveSkill] = useState(null);
  
  // Get all unique categories
  const categories = ["All", ...new Set(skillsData.map(skill => skill.category))];
  
  // Filter skills based on category and search term
  useEffect(() => {
    let result = skillsData;
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(skill => skill.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(skill => 
        skill.name.toLowerCase().includes(searchLower) || 
        skill.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredSkills(result);
  }, [selectedCategory, searchTerm]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Get skill counts by category
  const getSkillCount = (category) => {
    if (category === "All") return skillsData.length;
    return skillsData.filter(skill => skill.category === category).length;
  };
  
  // Group skills by proficiency level
  const getExpertiseLevel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    return "Familiar";
  };

  return (
    <div className="skills-page">
      {/* Header Section */}
      <div className="skills-header">
        <h1 className="skills-title">Technical Expertise</h1>
        <p className="skills-subtitle">
          Specialized in AI/ML, data science, and software development technologies
        </p>
        
        {/* Search and Filter Bar */}
        <div className="skills-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          
          <div className="filter-buttons">
            {categories.map(category => (
              <motion.button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                <span className="category-count">{getSkillCount(category)}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Skills Showcase */}
      <div className="skills-content">
        {/* Skills Grid */}
        <div className="skills-main">
          {filteredSkills.length > 0 ? (
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-card ${activeSkill === skill.name ? 'active' : ''}`}
                    variants={itemVariants}
                    onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                    layout
                  >
                    <div className="skill-front">
                      <div className="skill-icon-container">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-level-indicator">
                          <div 
                            className="skill-level-fill"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="skill-info">
                        <h3 className="skill-name">{skill.name}</h3>
                        <span className="skill-expertise">{getExpertiseLevel(skill.level)}</span>
                      </div>
                    </div>
                    
                    <div className="skill-back">
                      <p className="skill-description">{skill.description}</p>
                      <div className="skill-meta">
                        <span className="skill-category-badge">{skill.category}</span>
                        <span className="skill-proficiency">
                          Proficiency: {skill.level}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="no-skills-found">
              <div className="no-skills-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="15" x2="16" y2="15"></line>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>No skills found</h3>
              <p>Try adjusting your search or selecting a different category.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
        
        {/* Skills Summary */}
        <div className="skills-sidebar">
          <div className="skills-summary">
            <h3 className="summary-title">Expertise Overview</h3>
            
            <div className="expertise-breakdown">
              {categories.filter(cat => cat !== "All").map(category => {
                const categorySkills = skillsData.filter(skill => skill.category === category);
                const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
                
                return (
                  <div className="expertise-category" key={category}>
                    <div className="expertise-header">
                      <h4>{category}</h4>
                      <span>{Math.round(avgLevel)}%</span>
                    </div>
                    <div className="expertise-bar">
                      <div 
                        className="expertise-progress"
                        style={{ width: `${avgLevel}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="expertise-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBrain />
                </div>
                <div className="stat-info">
                  <h4>{skillsData.filter(s => s.category === "AI & ML").length}</h4>
                  <p>AI/ML Skills</p>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaCode />
                </div>
                <div className="stat-info">
                  <h4>{skillsData.filter(s => s.category === "Languages").length}</h4>
                  <p>Languages</p>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaToolbox />
                </div>
                <div className="stat-info">
                  <h4>{skillsData.filter(s => s.category === "Frameworks").length}</h4>
                  <p>Frameworks</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-focus-areas">
            <h3>Specialized Focus Areas</h3>
            <ul className="focus-areas-list">
              <li>
                <RiMindMap />
                <span>Large Language Models & Transformers</span>
              </li>
              <li>
                <GiArtificialIntelligence />
                <span>Computer Vision & Object Detection</span>
              </li>
              <li>
                <FaDatabase />
                <span>Data Engineering & Analytics</span>
              </li>
              <li>
                <MdSpeed />
                <span>High-Performance ML Systems</span>
              </li>
              <li>
                <FaCloud />
                <span>Cloud-based ML Infrastructure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;