import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain,
  FaProjectDiagram,
  FaBook,
  FaDatabase,
  FaPlane,
  FaLanguage,
  FaChartBar,
  FaGlobe,
  FaSmile,
  FaFilter,
  FaExternalLinkAlt,
  FaClock,
  FaSearch,
  FaFolderOpen,
  FaShieldAlt,
  FaTrophy,
  FaUsers,
  FaArrowRight,
  FaCode,
  FaLightbulb
} from 'react-icons/fa';
import teamImage from '../Resources/team.jpg';
import './ProjectsPage.css';

const projects = [
  {
    id: "secure-sense",
    name: "Secure Sense",
    description: "Winner of Emerging AI Innovation Hack at SF Hacks 2025. Developed a Chrome browser extension using on-device compact LLMs to detect and mask sensitive user data (emails, personal info) during web browsing in real time, enhancing privacy. Led model compression using distillation (LLaMA) reducing model size from approximately 2GB to less than 400 MB while preserving performance. Deployed compact models locally via Ollama for efficient inference.",
    link: "#", // Add your GitHub link here
    category: "AI",
    year: "2025",
    technologies: ["LLaMA", "Chrome Extension", "Model Compression", "Ollama", "React", "Flask"],
    icon: <FaShieldAlt />,
    featured: true,
    isBanner: true,
    hackathon: "SF Hacks 2025",
    award: "Emerging AI Innovation Hack Winner"
  },
  {
    id: "cultivate-tacit",
    name: "Cultivate: TacIT Alma Research",
    description: "A research initiative exploring cultural capital themes through advanced NLP techniques. Leveraged state-of-the-art transformer models—including DeBERTa, T5, and Mistral—to analyze complex cultural narratives. Employed fine-tuning, prompt engineering, domain adaptation, and t-SNE for dimensionality reduction to extract meaningful insights from extensive textual data.",
    link: "https://github.com/Kahl-d/Cultivate-TacIT-Alma",
    category: "AI",
    year: "2024",
    technologies: ["DeBERTa", "T5", "Mistral", "Fine-Tuning", "t-SNE", "Prompt Engineering"],
    icon: <FaBrain />,
    featured: true
  },
  {
    id: "context-data-augmentation",
    name: "Context-Aware Data Augmentation",
    description: "Developed a robust data augmentation pipeline to enhance model performance in low-resource scenarios. Integrated explainability tools such as SHAP and LIME with fine-tuning strategies to generate context-aware synthetic data, resulting in improved training efficacy and model interpretability.",
    link: "https://github.com/Kahl-d/Data-Augmentation-Project",
    category: "AI",
    year: "2024",
    technologies: ["SHAP", "LIME", "Fine-Tuning", "Transformers"],
    icon: <FaProjectDiagram />,
    featured: true
  },
  {
    id: "keep-notes-llm",
    name: "Keep Notes LLM",
    description: "Designed and implemented an AI-driven note-taking application that adapts to individual writing styles. Utilized large language models and custom embedding techniques to provide personalized content organization and retrieval, ensuring a seamless user experience.",
    link: "https://github.com/Kahl-d/Keep-Notes-LLM",
    category: "AI",
    year: "2024",
    technologies: ["Large Language Models", "Custom Embeddings", "NLP", "Memory-Based AI"],
    icon: <FaBook />,
    featured: true
  },
  {
    id: "personal-rag",
    name: "Personal RAG Assistant",
    description: "Created a personalized assistant leveraging Retrieval-Augmented Generation (RAG) to address user-specific queries. Combined advanced language models with a curated knowledge base to deliver precise, contextually relevant responses, enhancing productivity.",
    link: "https://github.com/Kahl-d/Personal-RAG",
    category: "AI",
    year: "2024",
    technologies: ["RAG", "LangChain", "VectorDB", "Large Language Models"],
    icon: <FaDatabase />,
    featured: true
  },
  {
    id: "flight-fare",
    name: "Flight Fare Prediction",
    description: "Developed a predictive model for forecasting flight fare fluctuations using machine learning. Employed statistical analysis and regression techniques to analyze historical data, resulting in accurate and actionable pricing predictions.",
    link: "https://github.com/nh0397/Flight-Fare-Prediction",
    category: "Data Science",
    year: "2022",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    icon: <FaPlane />,
    featured: false
  },
  {
    id: "advanced-nlp",
    name: "Advanced NLP Techniques",
    description: "Implemented cutting-edge natural language processing methodologies, including n-gram analysis, neural network architectures, and encoder-decoder models. Developed solutions for text classification, sentiment analysis, and contextual language understanding to extract actionable insights from complex datasets.",
    link: "https://github.com/Kahl-d/Natural-Language-Processing",
    category: "NLP",
    year: "2021",
    technologies: ["Python", "NLTK", "SpaCy", "TensorFlow", "n-grams", "Neural Networks", "Encoder-Decoder Models"],
    icon: <FaLanguage />,
    featured: false
  },
  {
    id: "data-viz",
    name: "Data Visualization with DataWiz",
    description: "Engineered an interactive data visualization platform, DataWiz, that transforms raw data into dynamic, insightful charts and graphs. Utilized modern visualization libraries to deliver compelling visual narratives for data-driven decision making.",
    link: "https://github.com/Kahl-d/DataWiz-Visualization",
    category: "Data Science",
    year: "2023",
    technologies: ["Python", "D3.js", "Plotly", "Tableau"],
    icon: <FaChartBar />,
    featured: false
  },
  {
    id: "web-portfolio",
    name: "Web Development Portfolio",
    description: "Showcased a portfolio of responsive, high-performance web applications built using modern web development frameworks. Emphasized clean design, scalability, and cross-platform compatibility to deliver exceptional user experiences.",
    link: "https://github.com/Kahl-d/Web-Development",
    category: "Web Development",
    year: "2020",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    icon: <FaGlobe />,
    featured: false
  },
  {
    id: "sentiment-analysis",
    name: "Sentiment Analysis with IBM Watson",
    description: "Developed a sentiment analysis tool leveraging IBM Watson's AI capabilities. Processed and analyzed textual data to accurately gauge sentiment, enabling real-time, data-driven decision making.",
    link: "https://github.com/Kahl-d/Sentiment-Analysis-IBM-Watson",
    category: "Data Science",
    year: "2021",
    technologies: ["IBM Watson", "Python", "Flask", "Bootstrap"],
    icon: <FaSmile />,
    featured: false
  },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Filter projects when category changes
  useEffect(() => {
    const filtered = projects.filter(project =>
      selectedCategory === "All" || project.category === selectedCategory
    );
    
    setDisplayedProjects(filtered.filter(project => !project.featured));
    setFeaturedProjects(filtered.filter(project => project.featured));
  }, [selectedCategory]);

  // Get category counts for UI
  const getCategoryCounts = () => {
    const counts = {
      All: projects.length
    };
    
    projects.forEach(project => {
      if (!counts[project.category]) {
        counts[project.category] = 1;
      } else {
        counts[project.category]++;
      }
    });
    
    return counts;
  };
  
  const categoryCounts = getCategoryCounts();
  const categories = ["All", "AI", "Data Science", "Web Development", "NLP"];

  return (
    <div className="projects-page">
      {/* Hero Section with Latest Hackathon Winner */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <FaTrophy />
              <span>Latest Hackathon Winner</span>
            </div>
            <h1>Secure Sense</h1>
            <p className="hero-subtitle">Emerging AI Innovation Hack, SF Hacks 2025</p>
            <p className="hero-description">
              A revolutionary Chrome extension that protects your privacy in real-time using on-device AI.
            </p>
            <div className="hero-tech">
              {projects.find(p => p.isBanner).technologies.map(tech => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
            <a href={projects.find(p => p.isBanner).link} className="hero-cta">
              View Project
              <FaArrowRight />
            </a>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={teamImage} alt="Secure Sense Team" />
            <div className="image-overlay">
              <span>Team Secure Sense</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Handpicked projects showcasing innovation and technical excellence</p>
        </div>
        <motion.div 
          className="featured-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="featured-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="card-icon">{project.icon}</div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="card-tech">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="card-link">
                Learn More
                <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Project Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Explore by Category</h2>
          <p>Browse projects based on your interests</p>
        </div>
        <div className="category-grid">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`category-card ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="category-icon">
                {category === 'AI' && <FaBrain />}
                {category === 'Data Science' && <FaChartBar />}
                {category === 'Web Development' && <FaCode />}
                {category === 'NLP' && <FaLanguage />}
                {category === 'All' && <FaLightbulb />}
              </div>
              <h3>{category}</h3>
              <span className="project-count">{categoryCounts[category] || 0} projects</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* All Projects Section */}
      <section className="all-projects-section">
        <div className="section-header">
          <h2>All Projects</h2>
          <p>Complete portfolio of my work</p>
        </div>
        <div className="projects-list">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-info">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="project-link">
                View Project
                <FaExternalLinkAlt />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;