import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlane, FaLanguage, FaChartBar, FaGlobe, FaSmile } from 'react-icons/fa';
import './ProjectsPage.css';

const projects = [
  {
    name: "Flight Fare Prediction",
    description: "Predict flight fare variations using machine learning.",
    link: "https://github.com/nh0397/Flight-Fare-Prediction",
    category: "Data Science",
    year: "2022",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    icon: <FaPlane />,
  },
  {
    name: "Advanced NLP Techniques",
    description: "Text classification, sentiment analysis, and language models.",
    link: "https://github.com/Kahl-d/Natural-Language-Processing",
    category: "NLP",
    year: "2021",
    technologies: ["Python", "NLTK", "Spacy", "TensorFlow"],
    icon: <FaLanguage />,
  },
  {
    name: "Data Visualization with DataWiz",
    description: "Dynamic charts and graphs for data visualization.",
    link: "https://github.com/Kahl-d/DataWiz-Visualization",
    category: "Data Science",
    year: "2023",
    technologies: ["Python", "D3.js", "Plotly", "Tableau"],
    icon: <FaChartBar />,
  },
  {
    name: "Web Development Portfolio",
    description: "Responsive and user-friendly web applications.",
    link: "https://github.com/Kahl-d/Web-Development",
    category: "Web Development",
    year: "2020",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    icon: <FaGlobe />,
  },
  {
    name: "Sentiment Analysis with IBM Watson",
    description: "Analyzing sentiments from textual data using IBM Watson.",
    link: "https://github.com/Kahl-d/Sentiment-Analysis-IBM-Watson",
    category: "Data Science",
    year: "2021",
    technologies: ["IBM Watson", "Python", "Flask", "Bootstrap"],
    icon: <FaSmile />,
  },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category) => setSelectedCategory(category);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="projects-page">
      <h1>Current Projects</h1>

      <div className="current-projects-container">
        <div className="current-projects">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="current-project-box"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="current-project-icon">{project.icon}</div>
              <div className="current-project-info">
                <h3>{project.name}</h3>
                <p className="current-project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="filter-buttons">
        {["All", "Data Science", "Web Development", "NLP", "AI"].map(category => (
          <motion.button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => filterProjects(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            className="project-list-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-item-info">
              <h3>{project.name}</h3>
              <p className="project-year">{project.year}</p>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
