import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import './AboutPage.css';
import { 
  FaCameraRetro, 
  FaUserGraduate, 
  FaLaptopCode,
  FaBasketballBall,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaChevronDown,
  FaExternalLinkAlt
} from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdDirectionsBike, MdWorkOutline } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";

const Section = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section
      ref={ref}
      className={`section-container ${className} ${isInView ? 'visible' : ''}`}
    >
      {children}
    </section>
  );
};

const SectionHeader = ({ title }) => (
  <div className="section-header">
    <h2>{title}</h2>
    <div className="section-underline" />
  </div>
);

const TimelineItem = ({ event, isActive, onClick, index }) => {
  const iconMap = {
    'MS in Data Science & AI': <FaGraduationCap />,
    'Teaching Assistant for NLP': <FaCode />,
    'Research Assistant': <FaCode />,
    'Healthcare Data Analyst': <FaBriefcase />,
    'B.Tech in Computer Science & Engineering': <FaGraduationCap />
  };

  const logoMap = {
    'San Francisco State University': '/sfsu-logo.png',
    'Innovaccer': '/innovaccer-logo.png'
  };

  const getOrgName = (location) => {
    return location.split(',')[0].trim();
  };

  const renderProjectLinks = (projects) => {
    if (!projects) return null;
    
    return (
      <div className="project-links">
        {projects.map((project, i) => (
          <a 
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span>{project.title}</span>
            <FaExternalLinkAlt />
          </a>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      className={`timeline-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-dot" />
      <div className="timeline-content">
        <div className="timeline-header">
          <div className="timeline-icon">{iconMap[event.title]}</div>
          <div className="timeline-year">{event.year}</div>
        </div>
        <div className="timeline-title-row">
          <h3>{event.title}</h3>
          <motion.div 
            className="expand-icon"
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown />
          </motion.div>
        </div>
        <div className="timeline-location">
          {logoMap[getOrgName(event.location)] && (
            <img 
              src={logoMap[getOrgName(event.location)]} 
              alt={getOrgName(event.location)}
              className="organization-logo"
            />
          )}
          <FaMapMarkerAlt />
          <span>{event.location}</span>
        </div>
        {isActive && (
          <motion.div 
            className="timeline-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {event.coursework && (
              <div className="detail-section">
                <h4>Coursework</h4>
                <div className="skills-list">
                  {event.coursework.map((course, i) => (
                    <span key={i} className="skill-tag">{course}</span>
                  ))}
                </div>
              </div>
            )}
            
            {event.achievements && (
              <div className="detail-section">
                <ul className="achievements-list">
                  {event.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            {renderProjectLinks(event.projects)}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);
  const timelineRef = useRef(null);

  const interests = [
    { icon: <FaCameraRetro />, label: "Photography", description: "Capturing moments and perspectives" },
    { icon: <FaBasketballBall />, label: "Basketball", description: "Team player on and off the court" },
    { icon: <IoCodeSlash />, label: "Coding", description: "Building solutions through code" },
    { icon: <CgWebsite />, label: "Web Design", description: "Creating engaging digital experiences" },
    { icon: <MdDirectionsBike />, label: "Biking", description: "Exploring trails and cityscapes" },
    { icon: <TbTrekking />, label: "Trekking", description: "Conquering peaks and discovering nature" },
    { icon: <GiBookshelf />, label: "Literature", description: "Expanding horizons through reading" }
  ];

  const timeline = [
    {
      year: "Aug 2023 - May 2025",
      title: "MS in Data Science & AI",
      location: "San Francisco State University, San Francisco, CA",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Data Mining",
        "Software Development",
        "Algorithm Analysis"
      ]
    },
    {
      year: "Aug 2024 - Present",
      title: "Research Assistant",
      location: "Tacit Alma Lab, San Francisco, CA",
      achievements: [
        "Spearheaded development of NLP pipeline for STEM student reflections analysis",
        "Engineered RAG workflows for Cultural Capital theme detection",
        "Achieved 12% recall gain and 75% reduction in manual annotation effort"
      ],
      projects: [
        {
          title: "CULTIVATE AI",
          link: "https://github.com/Kahl-d/CULTIVATE_AI"
        },
        {
          title: "Context-Aware Data Augmentation",
          link: "https://github.com/Kahl-d/Data-Augmentation-Project"
        }
      ]
    },
    {
      year: "Aug 2024 - Present",
      title: "Teaching Assistant for NLP",
      location: "San Francisco State University, San Francisco, CA",
      achievements: [
        "Deliver lab sessions for 70+ upper-division students",
        "Develop course materials for advanced NLP topics",
        "Focus on Regression, Classification, and Neural Networks"
      ]
    },
    {
      year: "Jan 2021 - Sep 2022",
      title: "Healthcare Data Analyst",
      location: "Innovaccer, Noida, India",
      achievements: [
        "Led team of 3 in building ETL pipelines, improving BI capabilities by 40%",
        "Reduced data latency by 30% through cross-platform integration",
        "Developed KPI reports enhancing client outreach strategies"
      ],
      projects: [
        {
          title: "Secure Sense",
          link: "https://github.com/nh0397/SF-Hacks"
        }
      ]
    }
  ];

  return (
    <div className="about-page">
      <Section className="about-container">
        <SectionHeader title="About Me" />
        <div className="about-content">
          <div className="profile-image-placeholder">
            <span>KK</span>
          </div>
          <div className="about-text">
            <p>
              I'm a passionate data science professional with a Master's degree in Data Science & AI from San Francisco State University. 
              With a perfect 4.0 GPA and a strong foundation in computer science, I bring technical expertise and creative problem-solving 
              to every project I undertake.
            </p>
            <p>
              My approach combines analytical thinking with innovative solutions, allowing me to extract meaningful insights from complex datasets 
              and translate them into actionable strategies. I'm driven by the potential of AI and machine learning to transform industries and 
              improve people's lives.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <FaUserGraduate />
                <div>
                  <h4>Education</h4>
                  <p>MS in Data Science & AI (SFSU), B.Tech in CS&E (LNMIIT)</p>
                </div>
              </div>
              <div className="highlight-item">
                <FaLaptopCode />
                <div>
                  <h4>Expertise</h4>
                  <p>Machine Learning, NLP, Data Visualization</p>
                </div>
              </div>
              <div className="highlight-item">
                <MdWorkOutline />
                <div>
                  <h4>Experience</h4>
                  <p>Teaching, Research, Data Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="journey-container">
        <SectionHeader title="My Journey" />
        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline">
            {timeline.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                isActive={activeTimelineIndex === index}
                onClick={() => setActiveTimelineIndex(activeTimelineIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="interests-container">
        <SectionHeader title="Interests & Hobbies" />
        <p className="interests-intro">
          Beyond the world of data and code, I'm passionate about various activities that keep me inspired and balanced.
        </p>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              className="interest-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.label}</h3>
              <p>{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="contact-container">
        <div className="contact-card">
          <h2>Let's Connect</h2>
          <p>Interested in collaboration or just want to say hello?</p>
          <div className="social-links">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;