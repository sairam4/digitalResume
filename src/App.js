import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './app.css';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import SkillsPage from './Components/SkillsPage';
import ProjectsPage from './Components/ProjectsPage';
import WorkPage from './Components/WorkPage';
import Contact from './Components/Contact';
import ResumePage from './Components/ResumePage';
import { 
  FaHome,
  FaUser, 
  FaCode, 
  FaProjectDiagram,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope
} from 'react-icons/fa';

const navItems = [
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Skills", path: "/skills", icon: <FaCode /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  // { name: "Work", path: "/work", icon: <FaBriefcase /> },
  // { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
  // { name: "Contact", path: "/contact", icon: <FaEnvelope /> }
];

const App = () => {
  const location = useLocation();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveIndex(-1); // Home not in nav items
    } else {
      const index = navItems.findIndex(item => item.path === currentPath);
      setActiveIndex(index);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="appContainer">
      <motion.header 
        id="navBar" 
        className={isScrolled ? 'scrolled' : ''}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <Link to="/" className="home-link">
          <motion.div 
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHome className="home-icon" />
          </motion.div>
        </Link>

        <nav className="nav-items">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onMouseEnter={() => setHoverIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
              {location.pathname === item.path && (
                <motion.div 
                  className="active-indicator" 
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <AnimatePresence>
            {hoverIndex !== null && activeIndex !== hoverIndex && (
              <motion.div
                className="hover-indicator"
                initial={{ opacity: 0, width: 0 }}
                animate={{ 
                  opacity: 1, 
                  width: "100%",
                  left: `${hoverIndex * 100}%` 
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  height: '2px',
                  background: 'var(--main-color2)',
                  opacity: 0.5,
                  borderRadius: '2px',
                  width: '100%',
                  transform: `translateX(${hoverIndex * 100}%)`
                }}
              />
            )}
          </AnimatePresence>
        </nav>

        <motion.div 
          className="mobile-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="scrollable-tabs">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActiveIndex(index)}
                className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.header>

      <main id="mainContainer">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="page-container"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              {/* <Route path="/work" element={<WorkPage />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/resume" element={<ResumePage />} /> */}
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;