import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCalendarAlt,
  FaUserAlt, FaBolt, FaFileAlt, FaMapMarkerAlt, FaTrophy, FaUsers
} from "react-icons/fa";
import projects from "./projectData";
import edmImage from "../Resources/edm.jpeg";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>Project not found</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  const IconComponent = project.icon;
  const isGithub = project.link && project.link.includes("github.com");
  const isPub = project.isPublication;
  const pub = project.publication;

  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back Button */}
      <motion.button
        className="back-button"
        onClick={() => navigate("/projects")}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft />
        <span>All Projects</span>
      </motion.button>

      {/* Hero Banner */}
      <motion.div
        className={`detail-hero ${isPub ? "detail-hero-pub" : ""}`}
        style={{
          "--detail-bg": project.tileColor,
          "--detail-accent": project.tileAccent,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {/* Photo background for publication */}
        {isPub && (
          <div className="detail-hero-photo">
            <img src={edmImage} alt="EDM 2025 Award Ceremony" />
          </div>
        )}

        <div className="detail-hero-decoration" />

        <div className="detail-hero-content">
          <div className="detail-hero-icon">
            <IconComponent />
          </div>

          <div className="detail-hero-text">
            {project.callout && (
              <span className={`detail-badge detail-badge-${project.callout.type}`}>
                {project.callout.label}
              </span>
            )}
            <h1>{project.name}</h1>
            <p className="detail-hero-tagline">{project.tagline}</p>
          </div>
        </div>
      </motion.div>

      {/* Key Stats Banner (New) */}
      {project.keyStats && (
        <motion.div
          className="key-stats-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {project.keyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ y: -5 }}
            >
              <h3 className="stat-value">{stat.value}</h3>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Content Section */}
      <div className="detail-content">

        {/* Publication Conference Info */}
        {isPub && pub && (
          <motion.div
            className="detail-section detail-pub-info"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="pub-meta-grid">
              <div className="pub-meta-item">
                <FaFileAlt />
                <div>
                  <span className="pub-meta-label">Conference</span>
                  <span className="pub-meta-value">{pub.conference}</span>
                </div>
              </div>
              <div className="pub-meta-item">
                <FaMapMarkerAlt />
                <div>
                  <span className="pub-meta-label">Location</span>
                  <span className="pub-meta-value">{pub.location}</span>
                </div>
              </div>
              <div className="pub-meta-item">
                <FaCalendarAlt />
                <div>
                  <span className="pub-meta-label">Date</span>
                  <span className="pub-meta-value">{pub.date}</span>
                </div>
              </div>
              <div className="pub-meta-item">
                <FaTrophy />
                <div>
                  <span className="pub-meta-label">Award</span>
                  <span className="pub-meta-value pub-award">{pub.award}</span>
                </div>
              </div>
              <div className="pub-meta-item">
                <FaUsers />
                <div>
                  <span className="pub-meta-label">Authors</span>
                  <span className="pub-meta-value">{pub.authors.join(", ")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Meta Row (non-publication) */}
        <motion.div
          className="detail-meta"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="meta-item">
            <FaCalendarAlt />
            <span>{project.year}</span>
          </div>
          <div className="meta-item">
            <FaUserAlt />
            <span>{project.role}</span>
          </div>
          <div className="meta-item">
            <FaBolt />
            <span>{project.category}</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="detail-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h2>{isPub ? "About This Research" : "About This Project"}</h2>
          {project.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="detail-description">{paragraph}</p>
          ))}
        </motion.div>

        {/* Key Contributions / Case Study Details */}
        {project.contributions && (
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <h2>{isPub ? "My Contributions" : "Key Engineering Contributions"}</h2>
            <div className="contributions-grid">
              {project.contributions.map((c, i) => (
                <div key={i} className="contribution-card">
                  <h4>{c.title}</h4>
                  {/* Check if detail has "Problem:" structure for structured case study */
                    c.detail.includes("Problem:") ? (
                      <div className="case-study-block">
                        {c.detail.split("\n\n").map((part, idx) => {
                          if (part.startsWith("Problem:")) {
                            return (
                              <div key={idx} className="cs-problem">
                                <span className="cs-label">The Challenge</span>
                                <p>{part.replace("Problem: ", "")}</p>
                              </div>
                            );
                          }
                          if (part.startsWith("Implementation:")) {
                            return (
                              <div key={idx} className="cs-implementation">
                                <span className="cs-label">My Solution</span>
                                <p>{part.replace("Implementation: ", "")}</p>
                              </div>
                            );
                          }
                          if (part.startsWith("Result:")) {
                            return (
                              <div key={idx} className="cs-result">
                                <span className="cs-label">The Outcome</span>
                                <p>{part.replace("Result: ", "")}</p>
                              </div>
                            );
                          }
                          return <p key={idx}>{part}</p>;
                        })}
                      </div>
                    ) : (
                      <p>{c.detail}</p>
                    )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Impact */}
        {project.impact && (
          <motion.div
            className="detail-section detail-impact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Impact</h2>
            <p>{project.impact}</p>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          className="detail-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <h2>{isPub ? "Methods & Tools" : "Tech Stack"}</h2>
          <div className="detail-tech-grid">
            {project.technologies.map((tech) => (
              <span key={tech} className="detail-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="detail-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Categories</h2>
          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="detail-tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA — Paper link for publication, or GitHub/live link */}
        {project.link && project.link !== "#" && (
          <motion.div
            className="detail-cta"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <a
              href={isPub && pub ? pub.paperLink : project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link-button"
            >
              {isPub ? <FaFileAlt /> : isGithub ? <FaGithub /> : <FaExternalLinkAlt />}
              <span>
                {isPub ? "Read the Paper" : isGithub ? "View on GitHub" : "View Live Project"}
              </span>
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
