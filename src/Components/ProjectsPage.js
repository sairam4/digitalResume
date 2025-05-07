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
  FaLightbulb,
  FaImage,
  FaMicroscope
} from 'react-icons/fa';
import teamImage from '../Resources/team.jpg';
import './ProjectsPage.css';

const projects = [
  {
    id: "secure-sense",
    name: "Secure Sense",
    description: "Winner of Emerging AI Innovation Hack at SF Hacks 2025. Developed a Chrome browser extension using on-device compact LLMs to detect and mask sensitive user data (emails, personal info) during web browsing in real time, enhancing privacy. Led model compression using distillation (LLaMA) reducing model size from approximately 2GB to less than 400 MB while preserving performance. Deployed compact models locally via Ollama for efficient inference.",
    link: "https://github.com/sairam4/Secure-Sense", // Add your GitHub link here
    category: "AI",
    year: "2025",
    technologies: ["LLaMA", "Chrome Extension", "Model Compression", "Ollama", "React", "Flask"],
    icon: <FaShieldAlt />,
    featured: true,
    isBanner: true,
    hackathon: "SF Hacks 2025",
    award: "Emerging AI Innovation Hack Winner",
    tags: ["All", "AI"]
  },
  {
    id: "smart-nfl-chatbot",
    name: "Smart NFL Chatbot — AI-Powered Sports Assistant",
    description: "An intelligent full-stack chatbot that answers complex NFL-related questions using a combination of structured data and semantically indexed news articles. The system features a React frontend, FastAPI backend, and uses MongoDB and ChromaDB for data storage and retrieval. LLM integration via Open Source LLMs enables intelligent responses, even with incomplete data. I architected and deployed the backend on Dockerized AWS EC2 and fine-tuned prompt strategies for hybrid model usage.",
    link: "https://github.com/sairam4/NFLChatbot",
    category: "AI",
    year: "2025",
    technologies: [
      "React.js", "Tailwind CSS",
      "FastAPI", "MongoDB", "ChromaDB",
      "Docker", "EC2", "OpenRouter",
      "LLaMA", "GPT-4o", "NLTK", "RapidFuzz", "async I/O"
    ],
    icon: <FaBrain />,
    featured: true,
    tags: ["All", "AI", "Data Engineering", "Web Development"]
  },
  {
    id: "election-insights-dashboard",
    name: "U.S. Election Insights Dashboard — Interactive Power BI Analysis (2020 Edition)",
    description: "An advanced, interactive Power BI dashboard visualizing all the U.S. Presidential Election results across all states for past 200 years. The report includes dynamic visual elements such as a winner-by-state map, swing state filters, decomposition trees for winner analysis, party-wise vote share comparisons, and embedded Python visuals for extended statistical insights. The dashboard allows users to explore each election year (2012, 2016, 2020, etc.) through a page navigator, while each page provides deep-dive analysis on a specific year.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTQ5ZjhlMmMtYmQ4ZC00ZjlhLWFjM2YtMGFlNWE4OWVlYjczIiwidCI6IjA0Yjk2OGM1LWM1MDMtNDFiOC1hNGY4LTE4YzY5ZjRhZmRlNiJ9&pageName=ReportSection",
    category: "Data Science",
    year: "2024",
    technologies: [
      "Power BI", "DAX", "Python", "matplotlib", "seaborn",
      "CSV Data Modeling", "Interactive Visual Analytics"
    ],
    icon: <FaChartBar />,
    featured: true,
    tags: ["All", "Power Platform", "Data Science"]
  },
  {
    id: "ai-image-editor",
    name: "AI-Powered Visual Rebranding Tool — OCR & Generative Inpainting",
    description: "An end-to-end image editing system that intelligently removes and replaces text from posters and images using dual OCR engines and DALL·E-based inpainting. Designed to help non-designers repurpose visual assets quickly. Combines OpenCV-based preprocessing with EasyOCR and Google Vision OCR for layered text detection, and uses OpenAI’s DALL·E API to regenerate masked regions with context-aware visuals.",
    link: "https://github.com/sairam4/better-text-generator",
    category: "Computer Vision",
    year: "2025",
    technologies: [
      "OpenCV", "EasyOCR", "Google Vision",
      "DALL·E API", "Pillow", "NumPy"
    ],
    icon: <FaImage />,
    featured: true,
    tags: ["All", "AI", "Computer Vision"]
  },
  {
    id: "siliconsense-wafer-diagnosis",
    name: "SiliconSense: Dual-Head TinyViT + CoT for Wafer Defect Diagnosis & Reasoning",
    description: "An end-to-end AI system for diagnosing and explaining defect patterns in semiconductor wafer maps using both vision and reasoning. Combines a dual-head TinyViT model with Chain-of-Thought (CoT) logic to classify defect types and generate human-like explanations. Simulates a factory inspection pipeline, enabling interpretable diagnostics with efficient edge deployment.",
    link: "#",
    category: "AI",
    year: "2025",
    technologies: [
      "PyTorch", "TinyViT", "Transformers", "BERT", "jsonl",
      "NumPy", "Google Colab", "OpenAI GPT-4", "Matplotlib", "Grad-CAM"
    ],
    icon: <FaMicroscope />,
    featured: true,
    tags: ["All", "AI", "Computer Vision"]
  },
  {
    id: "program-pathway-explorer",
    name: "Academic Program Pathway Explorer (POC)",
    description: "A proof-of-concept web app that allows users to browse academic programs by college and download program data in real time. Built using MongoDB, Next.js (App Router), Tailwind CSS, and exposed locally via ngrok for external API testing. Supports dynamic routing, API-based JSON downloads, and responsive UI.",
    link: "#",
    category: "Web Development",
    year: "2025",
    technologies: [
      "MongoDB", "Next.js", "Tailwind CSS", "ngrok", "REST API", "json2csv"
    ],
    icon: <FaBook />,
    featured: true,
    tags: ["All", "Data Engineering", "Web Development", "Data Science"]
  },
  {
    id: "global-pnl-tracking",
    name: "Global Profit & Loss Automation Suite",
    description: "Designed and implemented an enterprise-grade automation system to track profit and loss across global contracts using Power Apps, SQL Server, and Power BI. Integrated Power Automate workflows for daily refreshes and Azure Data Factory pipelines for large-scale data ingestion. Enabled 5,000+ users to monitor financial performance with 80% reduction in manual effort.",
    link: "#",
    category: "Data Engineering",
    year: "2023",
    technologies: ["Power Apps", "Power BI", "SQL Server", "Power Automate", "Azure Data Factory"],
    icon: <FaChartBar />,
    featured: true,
    tags: ["All", "Professional Experience", "Power Platform", "Data Engineering"]
  },
  {
    id: "legacy-app-modernization",
    name: "Legacy App Modernization & Performance Revamp",
    description: "Led a full-stack modernization effort of a critical enterprise application impacting thousands of users. Migrated from legacy systems to Power Platform and SQL Server, optimized backend queries using CTEs and MERGE operations, and introduced responsive design for mobile access. Achieved 60% boost in responsiveness and cut maintenance costs by 80%.",
    link: "#",
    category: "Web Development",
    year: "2023",
    technologies: ["Power Apps", "SQL Server", "Responsive Design", "Power Automate", "SharePoint"],
    icon: <FaProjectDiagram />,
    featured: true,
    tags: ["All", "Professional Experience", "Power Platform", "Data Engineering"]
  },
  {
    id: "sharepoint-automation-platform",
    name: "SharePoint Governance & Automation Platform",
    description: "Standardized SharePoint site architecture across a global enterprise. Used Power Automate and Office 365 Graph API for automated provisioning, implemented JSON-based formatting for intuitive views, and created admin dashboards to monitor access patterns. Resulted in 40% increase in adoption and 30% reduction in IT workload.",
    link: "#",
    category: "Automation",
    year: "2023",
    technologies: ["SharePoint", "Power Automate", "Office 365 Graph API", "Power BI", "JSON Views"],
    icon: <FaFolderOpen />,
    featured: true,
    tags: ["All", "Professional Experience", "Power Platform", "Data Engineering"]
  }
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
    const featuredIds = ["secure-sense", "smart-nfl-chatbot", "siliconsense-wafer-diagnosis"];
    if (selectedCategory === "All") {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(
        projects.filter(project =>
          project.tags.includes(selectedCategory)
        )
      );
    }
    setFeaturedProjects(projects.filter(project => featuredIds.includes(project.id)));
  }, [selectedCategory]);

  // Get category counts for UI
  const getCategoryCounts = () => {
    const counts = {
      All: projects.length
    };
    
    projects.forEach(project => {
      project.tags.forEach(tag => {
        if (tag !== "All") {
          if (!counts[tag]) {
            counts[tag] = 1;
          } else {
            counts[tag]++;
          }
        }
      });
    });
    
    return counts;
  };
  
  const categoryCounts = getCategoryCounts();
  const categories = ["All", "AI", "Data Science", "Web Development", "Data Engineering", "Computer Vision", "Power Platform", "Professional Experience"];

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
              <div className="card-top-row">
                <div className="card-icon">{project.icon}</div>
                {project.id === "secure-sense" && (
                  <span className="category-tag-badge featured-tag">MLH Winner</span>
                )}
                {project.id === "siliconsense-wafer-diagnosis" && (
                  <span className="category-tag-badge featured-tag">In Progress</span>
                )}
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="card-tech">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.link !== "#" && (
                <a href={project.link} className="card-link">
                  Learn More
                  <FaArrowRight />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Project Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Explore all Projects</h2>
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
                {category === 'Data Engineering' && <FaDatabase />}
                {category === 'Computer Vision' && <FaMicroscope />}
                {category === 'Power Platform' && <FaProjectDiagram />}
                {category === 'Professional Experience' && <FaUsers />}
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
                </div>
                <div className="project-tags">
                  {project.tags.filter(tag => tag !== "All").map(tag => (
                    <span key={tag} className="category-tag-badge">{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                {/* <div className="project-tags">
                  {project.tags.filter(tag => tag !== "All").map(tag => (
                    <span key={tag} className="tech-pill">{tag}</span>
                  ))}
                </div> */}
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              {project.link !== "#" && (
                <a href={project.link} className="project-link">
                  View Project
                  <FaExternalLinkAlt />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;