import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./AboutPage.css";

const animatedWords = [
  "AI Engineer",
  "Full Stack Developer",
  "Data Engineer",
  "Power Platform Expert",
  "AI Acceleration Enthusiast"
];

const techList = [
  { name: "Python", file: "python.svg" },
  { name: "FastAPI", file: "fastapi.svg" },
  { name: "PostgreSQL", file: "postgresql.svg" },
  { name: "MongoDB", file: "mongodb.svg" },
  { name: "Next.js", file: "nextdotjs.svg" },
  { name: "React", file: "react.svg" },
  { name: "YOLO", file: "yolo.svg" },
  { name: "OpenAI", file: "openai.svg" },
  { name: "NVIDIA", file: "nvidia.svg" },
  { name: "PyTorch", file: "pytorch.svg" },
  { name: "Kubernetes", file: "kubernetes.svg" },
  { name: "Docker", file: "docker.svg" },
  { name: "AWS", file: "amazonwebservices.svg" },
  { name: "AWS Lambda", file: "awslambda.svg" }
];

const AboutPage = () => (
  <div className="about-container">
    {/* Hero */}
    <section className="hero-section">
      <motion.h2
        className="hero-subtitle"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I build with AI that works — fast, smart, and real.
      </motion.h2>

      <div className="animated-roles">
        {animatedWords.map((word, i) => (
          <motion.span
            key={i}
            className="role-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.2 }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <blockquote className="turing-quote">
        “Those who can imagine anything, can create the impossible.” – Alan Turing
      </blockquote>
    </section>

    {/* Quick Snapshot */}
    <section className="stats-section">
      <h2 className="section-heading">Quick Snapshot</h2>
      <div className="stats-grid">
        <div className="stat-card">🎓 MS in CS – 3.95 GPA</div>
        <div className="stat-card">💼 2.5+ Years Professional Experience</div>
        <div className="stat-card">🧠 Research: AI Agents, Embeddings, ETL</div>
        <div className="stat-card">🏆 SF Hacks Winner</div>
      </div>
    </section>

    {/* Tech Arsenal */}
    <section className="stack-section">
      <h2 className="section-heading">Tech Arsenal</h2>
      <div className="stack-grid">
        {techList.map((tech, idx) => (
          <div key={idx} className="tech-item">
            <div className="logo-wrapper">
              <img
                src={require(`../logos/${tech.file}`)}
                alt={tech.name}
                className="tech-icon"
              />
            </div>
            <span className="tech-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Interests */}
    <section className="interests-section">
      <h2 className="section-heading">Beyond the Screen</h2>
      <div className="interests-grid">
        <div className="interest-card">
          <h3>🏔️ Hiking</h3>
          <p>Like exploring latent space in real life.</p>
        </div>
        <div className="interest-card">
          <h3>🏸 Badminton</h3>
          <p>Fast reflexes, strategic precision — just like inference speed.</p>
        </div>
        <div className="interest-card">
          <h3>🎒 Backpacking</h3>
          <p>Pack light, think big — optimized journeys.</p>
        </div>
        <div className="interest-card">
          <h3>🌍 Exploring Cities</h3>
          <p>Curious mind meets diverse datasets.</p>
        </div>
      </div>
    </section>

    {/* Connect */}
    <section className="contact-section">
      <h2 className="section-heading">Let’s Connect</h2>
      <p>Let’s build fast, scalable, and impactful systems — together.</p>
      <div className="contact-social-links">
        <motion.a
          href="https://github.com/sairam4"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/shreyas-rscp/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:shreyasraghuraman@gmail.com"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </section>
  </div>
);

export default AboutPage;