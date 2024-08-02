import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './lp.css';
import HomePic from '../Resources/homepic.png';
import { FaInfoCircle, FaProjectDiagram, FaEnvelope, FaHome, FaDownload, FaGithub, FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa';

const commands = [
  { name: "Download Resume", action: () => window.open('/resume.pdf', '_blank'), icon: <FaDownload /> },
  { name: "Open GitHub", action: () => window.open('https://github.com/yourusername', '_blank'), icon: <FaGithub /> },
  { name: "Open LinkedIn", action: () => window.open('https://www.linkedin.com/in/yourprofile', '_blank'), icon: <FaLinkedin /> },
  { name: "Send Email", action: () => window.open('mailto:someone@example.com'), icon: <FaEnvelopeOpenText /> },
];

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Skills", path: "/skills", icon: <FaProjectDiagram /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Work", path: "/work", icon: <FaProjectDiagram /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  { name: "Resume", path: "/resume", icon: <FaDownload /> },
];

const subheadings = [
  "Statistical Modeling Enthusiast",
  "Data Scientist",
  "NLP Expert",
  "Creative Designer"
];

const LandingPage = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const inputRef = useRef(null);
  const textRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);

      textRefs.current.forEach((ref) => {
        if (ref && ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (
            e.clientX > rect.left &&
            e.clientX < rect.right &&
            e.clientY > rect.top &&
            e.clientY < rect.bottom
          ) {
            ref.current.style.color = "rgba(255, 255, 255, 0.8)";
            ref.current.style.transform = "scale(1.1)";
          } else {
            ref.current.style.color = "white";
            ref.current.style.transform = "scale(1)";
          }
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (!isFocused && /^[a-zA-Z]$/.test(event.key)) {
        setIsFocused(true);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isFocused]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      setQuery(value);
    }
  };

  const filteredItems = [...navItems, ...commands].filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div id="landingPageContainer">
      <motion.div
        className="cursorEffect"
        style={{ left: cursorX - 50, top: cursorY - 50 }}
        animate={{ left: cursorX - 50, top: cursorY - 50 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
      <motion.div
        className="cursorRipple"
        style={{ left: cursorX - 25, top: cursorY - 25 }}
        animate={{ left: cursorX - 25, top: cursorY - 25 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      <motion.img
        src={HomePic}
        alt="HomePic"
        id="homePic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />
      <div id="homeTextContainer">
        <motion.p
          ref={(el) => textRefs.current[0] = el}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="smallText"
        >
          Hi,
        </motion.p>
        <motion.h1
          ref={(el) => textRefs.current[1] = el}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="bigText"
        >
          I'm Khalid M Khan
        </motion.h1>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="subheadingContainer"
        >
          {subheadings.map((subheading, index) => (
            <motion.p
              ref={(el) => textRefs.current[index + 2] = el}
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="subheading"
            >
              {subheading}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="inputContainer"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <input
          type="text"
          placeholder="Start typing..."
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={inputRef}
        />
        <AnimatePresence>
          {isFocused && filteredItems.length > 0 && (
            <motion.div
              className="dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map(item => (
                <motion.div
                  key={item.name}
                  className="dropdownItem"
                  onClick={() => {
                    if (item.path) {
                      navigate(item.path);
                    } else if (item.action) {
                      item.action();
                    }
                    setQuery("");
                    inputRef.current.blur();
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="iconBox">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="backgroundBlur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
