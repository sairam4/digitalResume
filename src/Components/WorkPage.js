import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import './WorkPage.css';

const timelineData = [
  {
    title: "Master of Science, Data Science & Artificial Intelligence",
    date: "Aug 2023 – Present",
    description: "San Francisco State University, GPA: 4.0",
    icon: "🎓",
    type: "education",
  },
  {
    title: "Research Assistant",
    date: "August 2024 to Present",
    description: [
      "Developed a Python-based predictive modeling system.",
      "Integrated Tableau dashboard for data visualization.",
      "Collaborated with faculty on research projects."
    ],
    icon: "🔬",
    type: "job",
  },
  {
    title: "Student Leader",
    date: "August 2024 to Present",
    description: "Engaged as a Resident Assistant and student leader at San Francisco State University.",
    icon: "👥",
    type: "extracurricular",
  },
  {
    title: "Healthcare Data Associate",
    date: "Jan 2021 – Sep 2022",
    description: [
      "Analyzed healthcare data to derive actionable insights.",
      "Worked with cross-functional teams to improve data quality.",
      "Developed automated data processing pipelines."
    ],
    icon: "🏥",
    type: "job",
  },
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    date: "Aug 2017 – Sep 2021",
    description: "The LNM Institute of Information Technology, Jaipur",
    icon: "💻",
    type: "education",
  },
  {
    title: "Fest Head and Convener",
    date: "January 2019 – March 2021",
    description: "Managed cross-functional teams for event success.",
    icon: "🎉",
    type: "extracurricular",
  },
];

const WorkPage = () => {
  return (
    <div className="work-page">
      <h1>My Journey</h1>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="icon">{item.icon}</div>
            <div className="timeline-content">
              <h2>{item.title}</h2>
              <span className="timeline-date">{item.date}</span>
              {item.type === "job" ? (
                <ul>
                  {item.description.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
};

export default WorkPage;
