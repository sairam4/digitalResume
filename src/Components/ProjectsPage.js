import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import projects from "./projectData";
import teamImage from "../Resources/team.jpg";
import edmImage from "../Resources/edm.jpeg";
import "./ProjectsPage.css";

const bgImages = {
  "secure-sense": teamImage,
  "edm-2025-publication": edmImage,
};

const ProjectsPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  return (
    <div className="projects-page">
      {/* Page Header */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>What I've Built</h1>
        <p className="projects-tagline">
          From hackathon-winning AI tools to published research and enterprise platforms — each project is a story of solving real problems.
        </p>
      </motion.div>

      {/* 3x3 Bento Grid */}
      <div className="grid-wrapper">
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const hasBg = project.hasBgImage && bgImages[project.id];
            const isPPM = project.id === "ppm-ai-advising";
            return (
              <motion.div
                key={project.id}
                className={`project-tile tile-${index}${hasBg ? " tile-hero" : ""}${isPPM ? " tile-ppm-wide" : ""}`}
                style={{
                  "--tile-bg": project.tileColor,
                  "--tile-accent": project.tileAccent
                }}
                variants={tileVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.25 }
                }}
                onClick={() => navigate(project.isResearchPage ? "/research" : `/projects/${project.id}`)}
              >
                {/* Background photo for tiles with images */}
                {hasBg && (
                  <div className="tile-photo-bg">
                    <img src={bgImages[project.id]} alt="" />
                  </div>
                )}

                <div className="tile-content">
                  <div className="tile-top">
                    <div className="tile-header-group">
                      <div className="tile-icon">
                        <IconComponent />
                      </div>
                      {project.badge && (
                        <span className="tile-badge">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <span className="tile-year">{project.year}</span>
                  </div>

                  <div className="tile-body">
                    <h3 className="tile-title">{project.shortName}</h3>
                    <p className="tile-tagline">{project.tagline}</p>
                  </div>

                  <div className="tile-bottom">
                    <div className="tile-tech">
                      {project.topTech.map((tech) => (
                        <span key={tech} className="tile-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="tile-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent (only for non-photo tiles) */}
                {!hasBg && <div className="tile-decoration" />}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
