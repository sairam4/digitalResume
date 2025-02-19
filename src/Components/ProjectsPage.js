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
  FaFolderOpen
} from 'react-icons/fa';
import './ProjectsPage.css';

const projects = [
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
      {/* Page Header */}
      <header className="page-header">
        <h1>Project Portfolio</h1>
        <p>Exploring the intersection of artificial intelligence, data science, and web development through innovative projects and research initiatives.</p>
      </header>
      
      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <motion.div 
          className="featured-projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="featured-project-card"
              variants={itemVariants}
            >
              <div className="card-header">
                <div className="project-icon-wrapper">
                  <div className="project-icon">{project.icon}</div>
                </div>
                <span className="project-category">{project.category}</span>
              </div>
              
              <div className="card-content">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-year">
                  <FaClock size={12} />
                  <span>{project.year}</span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="card-footer">
                  <div className="project-tech-stack">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  
                  <div className="card-actions">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      View Project
                      <FaExternalLinkAlt className="project-link-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-title">
          <FaFilter className="filter-icon" />
          <span>Filter Projects</span>
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
              <span className="project-count">{categoryCounts[category] || 0}</span>
            </motion.button>
          ))}
        </div>
      </section>
      
      {/* Project List Section */}
      <section className="projects-list-section">
        <h2 className="section-title">All Projects</h2>
        
        {displayedProjects.length > 0 ? (
          <AnimatePresence>
            <motion.div 
              className="projects-list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-list-item"
                  variants={itemVariants}
                  layout
                >
                  <div className="list-item-info">
                    <h3>{project.name}</h3>
                    <div className="list-item-year">
                      <span className="year-dot"></span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="list-item-description">{project.description.substring(0, 120)}...</p>
                  
                  <div className="list-item-tech">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="list-item-actions">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="view-details-btn"
                    >
                      View Project
                      <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaFolderOpen className="empty-state-icon" />
            <p className="empty-state-text">
              No projects found in the <span className="highlight-text">{selectedCategory}</span> category. 
              Try selecting a different filter.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default ProjectsPage;