import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './app.css';
import LandingPage from './Components/LandingPage';
import AboutPage from './Components/AboutPage';
import SkillsPage from './Components/SkillsPage';
import ProjectsPage from './Components/ProjectsPage';
import ProjectDetail from './Components/ProjectDetail';
import ResearchPage from './Components/ResearchPage';
import { 
  FaHome,
  FaUser, 
  FaCode, 
  FaProjectDiagram,
  FaBars
} from 'react-icons/fa';

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Skills", path: "/skills", icon: <FaCode /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> }
];

const App = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="appContainer">
      <motion.header 
        id="navBar" 
        className={`${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">Shreyas Raghuraman</span>
        </motion.div>

        <nav className="nav-items">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="nav-item-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`nav-link nav-button ${location.pathname === item.path || (item.path === "/projects" && (location.pathname.startsWith("/projects/") || location.pathname === "/research")) ? "active" : ""}`}
              >
                <motion.span className="nav-icon">
                  {item.icon}
                </motion.span>
                <motion.span className="nav-text">
                  {item.name}
                </motion.span>
                {(location.pathname === item.path || (item.path === "/projects" && (location.pathname.startsWith("/projects/") || location.pathname === "/research"))) && (
                  <motion.div 
                    className="active-indicator" 
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars />
        </motion.button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="scrollable-tabs">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`mobile-nav-link nav-button ${location.pathname === item.path || (item.path === "/projects" && (location.pathname.startsWith("/projects/") || location.pathname === "/research")) ? "active" : ""}`}
                    >
                      <motion.span className="nav-icon">
                        {item.icon}
                      </motion.span>
                      <motion.span className="nav-text">
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/research" element={<ResearchPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;