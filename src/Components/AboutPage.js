import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './AboutPage.css';
import { FaCameraRetro, FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdDirectionsBike, MdWorkOutline } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { GiBookshelf } from "react-icons/gi";

const AboutPage = () => {
  const sectionRefs = {
    header: useRef(null),
    about: useRef(null),
    journey: useRef(null),
    interests: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const interests = [
    { icon: <FaCameraRetro />, label: "Photography", description: "Capturing moments and perspectives" },
    { icon: <FaBasketball />, label: "Basketball", description: "Team player on and off the court" },
    { icon: <IoCodeSlash />, label: "Coding", description: "Building solutions through code" },
    { icon: <CgWebsite />, label: "Web Design", description: "Creating engaging digital experiences" },
    { icon: <MdDirectionsBike />, label: "Biking", description: "Exploring trails and cityscapes" },
    { icon: <TbTrekking />, label: "Trekking", description: "Conquering peaks and discovering nature" },
    { icon: <GiBookshelf />, label: "Literature", description: "Expanding horizons through reading" }
  ];

  const timeline = [
    {
      year: "Aug 2023 - present",
      title: "MS in Data Science & AI",
      location: "San Francisco State University",
      description: "Upcoming graduate with a perfect 4.0 GPA, focusing on machine learning and data analytics."
    },
    {
      year: "Aug 2024 - present",
      title: "Teaching Assistant for NLP",
      location: "San Francisco State University",
      description: "Instructed students on Natural Language Processing concepts and practical applications."
    },
    {
      year: "Aug 2024 - present",
      title: "Research Assistant",
      location: "San Francisco State University",
      description: "Led research initiatives in advanced data analysis and visualization techniques."
    },
    {
      year: "Aug 2024 - present",
      title: "Resident Assistant",
      location: "San Francisco State University",
      description: "Supported student community and developed leadership skills while enhancing campus life."
    },
    {
      year: "Jan 2021 - Sep 2022",
      title: "Healthcare Data Analyst",
      location: "Innovaccer",
      description: "Contributed to data-driven decision-making in healthcare systems using advanced analytics."
    },
    {
      year: "2017 - 2021",
      title: "B.Tech in Computer Science & Engineering",
      location: "LNMIIT",
      description: "Completed undergraduate degree with focus on algorithm design and software development."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section" ref={sectionRefs.header}>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Khalid M Khan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data Scientist & ML Engineer
          </motion.h2>
          <motion.div
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Transforming data into meaningful insights and innovative solutions
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-container section-container" ref={sectionRefs.about}>
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="profile-image-placeholder">
              <span>KK</span>
            </div>
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
      </section>

      {/* Professional Journey */}
      <section className="journey-container section-container" ref={sectionRefs.journey}>
        <div className="section-header">
          <h2>My Journey</h2>
          <div className="section-underline"></div>
        </div>
        <div className="timeline">
          {timeline.map((event, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3>{event.title}</h3>
                <h4>{event.location}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-container section-container" ref={sectionRefs.interests}>
        <div className="section-header">
          <h2>Interests & Hobbies</h2>
          <div className="section-underline"></div>
        </div>
        <p className="interests-intro">
          Beyond the world of data and code, I'm passionate about various activities that keep me inspired and balanced.
        </p>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <motion.div
              className="interest-card"
              key={index}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(232, 90, 79, 0.2)"
              }}
            >
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.label}</h3>
              <p>{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        <div className="contact-card">
          <h2>Let's Connect</h2>
          <p>Interested in collaboration or just want to say hello?</p>
          <motion.button 
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;