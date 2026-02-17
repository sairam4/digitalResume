import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft, FaCloud, FaLock, FaDatabase, FaRobot,
  FaCogs, FaBrain, FaServer, FaShieldAlt, FaSearch,
  FaRoute, FaUserShield, FaGlobe, FaChevronDown,
  FaFileAlt, FaUsers, FaBolt, FaLayerGroup,
  FaNetworkWired, FaCode, FaCheckCircle, FaArrowRight,
  FaUniversity, FaExclamationTriangle, FaGraduationCap
} from "react-icons/fa";
import {
  SiAwslambda, SiAmazondynamodb, SiPostgresql, SiRedis,
  SiTerraform, SiNextdotjs, SiAmazonaws
} from "react-icons/si";
import "./ResearchPage.css";

/* ──────────────────────── Animated Counter ──────────────────────── */
const AnimatedStat = ({ end, suffix = "", prefix = "", label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-number">{prefix}{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

/* ──────────────────────── Section Wrapper ──────────────────────── */
const Section = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      className={`research-section ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
};

/* ──────────────────────── Architecture Node ──────────────────────── */
const ArchNode = ({ icon: Icon, label, sublabel, className = "" }) => (
  <div className={`arch-node ${className}`}>
    <div className="arch-node-icon"><Icon /></div>
    <span className="arch-node-label">{label}</span>
    {sublabel && <span className="arch-node-sub">{sublabel}</span>}
  </div>
);

/* ──────────────────────── Timeline Item ──────────────────────── */
const TimelineItem = ({ period, title, items, isActive }) => (
  <div className={`timeline-item ${isActive ? "timeline-active" : ""}`}>
    <div className="timeline-dot" />
    <div className="timeline-content">
      <span className="timeline-period">{period}</span>
      <h4>{title}</h4>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  </div>
);

/* ════════════════════════ MAIN COMPONENT ════════════════════════ */
const ResearchPage = () => {
  const navigate = useNavigate();
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = [
    {
      id: "frontend",
      title: "Frontend & Auth Layer",
      color: "#3B82F6",
      icon: FaGlobe,
      nodes: [
        { icon: SiNextdotjs, label: "Next.js", sublabel: "Static Export + App Router" },
        { icon: FaCloud, label: "CloudFront", sublabel: "Global CDN + HTTPS" },
        { icon: FaServer, label: "S3", sublabel: "Static Asset Hosting" },
        { icon: FaLock, label: "Cognito", sublabel: "OAuth 2.0 + MFA" }
      ],
      description: "Users interact through a Next.js static app served via CloudFront/S3. Amazon Cognito handles authentication with OAuth 2.0 code flow, issuing JWT tokens validated at every layer."
    },
    {
      id: "api",
      title: "API Gateway Layer",
      color: "#8B5CF6",
      icon: FaNetworkWired,
      nodes: [
        { icon: FaShieldAlt, label: "API Gateway", sublabel: "Regional REST API" },
        { icon: FaUserShield, label: "Authorizer", sublabel: "Cognito JWT Validation" },
        { icon: FaRoute, label: "Routes", sublabel: "Session & Message Endpoints" }
      ],
      description: "All authenticated requests flow through API Gateway — the single ingress point. Cognito authorizer validates every JWT before Lambda invocation. Session-centric REST endpoints map directly to DynamoDB entities."
    },
    {
      id: "agents",
      title: "Agent Execution Layer",
      color: "#F59E0B",
      icon: FaBrain,
      nodes: [
        { icon: FaDatabase, label: "PPM Data Agent", sublabel: "Entry & Delegator" },
        { icon: FaRoute, label: "Pathway Agent", sublabel: "Planning Expert" },
        { icon: FaGraduationCap, label: "Course Agent", sublabel: "Equivalency Expert" },
        { icon: FaCogs, label: "MCP Server", sublabel: "Autonomous Tools" }
      ],
      description: "The Strands SDK powers a multi-agent swarm. The 'PPM Data Agent' acts as the entry point, interpreting intent and delegating to the 'Pathway Agent' for schedule generation or the 'Course Agent' for equivalency queries. All agents connect to the MCP Server."
    },
    {
      id: "data",
      title: "Data & Persistence Layer",
      color: "#10B981",
      icon: FaDatabase,
      nodes: [
        { icon: SiAmazondynamodb, label: "DynamoDB", sublabel: "Session State & Chat" },
        { icon: SiPostgresql, label: "Aurora PostgreSQL", sublabel: "Relational Academic Data" },
        { icon: SiRedis, label: "Redis Vectors", sublabel: "Semantic RAG Index" },
        { icon: FaShieldAlt, label: "Encryption", sublabel: "AES-256 at Rest" }
      ],
      description: "Dual-storage architecture: Aurora PostgreSQL for structured academic data and Redis vector indexes for semantic RAG retrieval. DynamoDB handles sub-millisecond session state with single-table design and automatic TTL."
    }
  ];

  const contributions = [
    {
      icon: FaLayerGroup,
      title: "End-to-End Platform Architecture",
      detail: "Architected the full serverless stack — from CloudFront/S3 delivery to Lambda agents to DynamoDB persistence — designed for production scale with zero servers to manage."
    },
    {
      icon: FaRobot,
      title: "3-Agent Swarm via MCP",
      detail: "Engineered a custom Model Context Protocol server on AWS Lambda, orchestrating 10+ autonomous tools for course equivalency evaluation, pathway generation, and secure PII masking."
    },
    {
      icon: FaBolt,
      title: "Latency Optimization",
      detail: "Slashed LLM response from >1 minute to <5 seconds via sliding-window message history, smaller models for context compression, and DynamoDB sub-millisecond session retrieval."
    },
    {
      icon: FaDatabase,
      title: "ETL & Dual-Storage Pipelines",
      detail: "Developed ETL workflows normalizing data from 70+ colleges into Aurora PostgreSQL (relational) and Redis (vector indexes) for low-latency RAG inference."
    },
    {
      icon: SiNextdotjs,
      title: "Secure Frontend & Auth",
      detail: "Built a responsive Next.js chat interface deployed via AWS Amplify with Cognito authentication, CloudFront CDN, and S3 — delivering secure, global access."
    },
    {
      icon: SiTerraform,
      title: "100% Infrastructure as Code",
      detail: "Enforced IaC best practices with Terraform to provision the entire AWS stack — API Gateway, Lambda functions, IAM roles, DynamoDB tables, and all data stores."
    }
  ];

  const timeline = [
    {
      period: "Spring 2024",
      title: "Foundation & Data Collection",
      items: [
        "Joined SFSU research under Dr. Hui Yang & Dr. Arno Puder",
        "Spearheaded comprehensive data analysis, aggregating raw course data from 63 California Community College campuses",
        "Analyzed and mapped complex academic structures (ASSIST, C-ID, student histories) to establish a unified relational data schema"
      ]
    },
    {
      period: "Summer–Fall 2024",
      title: "ETL Pipelines & ML Models",
      items: [
        "Engineered robust ETL pipelines to normalize heterogeneous academic datasets into a cohesive data foundation",
        "Curated and processed 11,320 labeled course pairs across 228 courses to create the core training dataset",
        "Co-authored research recognized with the Best Poster Paper Award at EDM 2025 (Palermo, Italy)"
      ]
    },
    {
      period: "Spring 2025",
      title: "Cloud-Native AI Platform",
      items: [
        "Architected full serverless stack on AWS",
        "Built 3-agent Strands swarm with MCP tool server",
        "Implemented DynamoDB single-table design",
        "Deployed Next.js frontend with Cognito auth"
      ]
    },
    {
      period: "Fall 2025 – Present",
      title: "Pilot & Scale",
      items: [
        "Successful pilot with 20+ CCC stakeholders",
        "Optimized LLM latency from >60s to <5s",
        "100% Terraform IaC for full stack",
        "Expanding to 70+ college dataset and user studies"
      ]
    }
  ];

  const agentTools = [
    { name: "Course Equivalency", desc: "Embedding-based pairwise comparison" },
    { name: "Pathway Generation", desc: "CP-SAT constraint solver for schedules" },
    { name: "PII Masking", desc: "Detect & redact sensitive student data" },
    { name: "Transcript Parsing", desc: "Extract courses from PDFs" },
    { name: "Semantic Search", desc: "RAG over course catalogs" },
    { name: "C-ID Lookup", desc: "Cross-reference state course IDs" },
    { name: "ASSIST Query", desc: "Articulation agreement retrieval" },
    { name: "Elective Clustering", desc: "Interest-based course recommendations" },
    { name: "Program Data API", desc: "Real-time college program metadata" }
  ];

  return (
    <div className="research-page">
      {/* ──────── Back Button ──────── */}
      <motion.button
        className="research-back"
        onClick={() => navigate("/projects")}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft />
        <span>All Projects</span>
      </motion.button>

      {/* ══════════ HERO ══════════ */}
      <motion.div
        className="research-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badges">
          <span className="hero-badge badge-sfsu"><FaUniversity /> San Francisco State University</span>
          <span className="hero-badge badge-aws"><SiAmazonaws /> AWS Cloud-Native</span>
          <span className="hero-badge badge-pilot"><FaUsers /> 20+ Stakeholder Pilot</span>
        </div>

        <h1 className="hero-title">
          AI-Powered Transfer
          <br />
          <span className="hero-accent">Advising Platform</span>
        </h1>

        <p className="hero-subtitle">
          An end-to-end serverless multi-agent system that consolidates academic transfer
          data from <strong>70+ California Community Colleges</strong>, transforming hours-long
          manual evaluations into <strong>seconds</strong>.
        </p>

        <div className="hero-meta">
          <span>AI Engineer</span>
          <span className="hero-divider">|</span>
          <span>CSC 898 Master's Thesis</span>
          <span className="hero-divider">|</span>
          <span>2024 – Present</span>
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>

      {/* ══════════ THE PROBLEM ══════════ */}
      <Section className="problem-section">
        <div className="section-label">The Problem</div>
        <h2>California's Transfer Crisis</h2>
        <p className="section-lead">
          California's public higher education system — the largest in the nation — serves
          <strong> 2.9 million students</strong> across <strong>149 colleges and universities</strong> within
          three systems (UC, CSU, CCC). Yet the process of determining which courses
          transfer between institutions remains manual, error-prone, and painfully slow.
        </p>

        <div className="problem-grid">
          <div className="problem-card">
            <FaExclamationTriangle className="problem-icon" />
            <h4>1:500+ Advisor Ratio</h4>
            <p>Community college counselors are severely backlogged, limiting personalized guidance for transfer students.</p>
          </div>
          <div className="problem-card">
            <FaExclamationTriangle className="problem-icon" />
            <h4>Hours per Evaluation</h4>
            <p>Manual transcript assessment requires advisors to cross-reference disconnected articulation systems across campuses.</p>
          </div>
          <div className="problem-card">
            <FaExclamationTriangle className="problem-icon" />
            <h4>588K Students Affected</h4>
            <p>Nearly 588,000 CCC students transfer to four-year universities within six years — each navigating this broken process.</p>
          </div>
        </div>
      </Section>

      {/* ══════════ THE VISION ══════════ */}
      <Section className="vision-section">
        <div className="section-label">The Solution</div>
        <h2>An Intelligent Advising System</h2>
        <p className="section-lead">
          We built a <strong>cloud-native, agentic AI platform</strong> that understands course
          content semantically, maintains multi-turn conversational context, and generates
          personalized transfer pathways — all without a single server to manage.
        </p>

        <div className="vision-pillars">
          <div className="pillar">
            <FaBrain className="pillar-icon" />
            <h4>Agentic Reasoning</h4>
            <p>A 3-agent swarm that interprets intent, delegates tasks, and reasons dynamically — not rigid workflows.</p>
          </div>
          <div className="pillar">
            <FaSearch className="pillar-icon" />
            <h4>Semantic Understanding</h4>
            <p>Deep embeddings encode course meaning, enabling 0.996 F₁ equivalency prediction beyond keyword matching.</p>
          </div>
          <div className="pillar">
            <FaShieldAlt className="pillar-icon" />
            <h4>Secure & Scalable</h4>
            <p>Cognito auth, encrypted data at rest, IAM isolation, and auto-scaling Lambda — built for production.</p>
          </div>
        </div>
      </Section>

      {/* ══════════ SYSTEM ARCHITECTURE ══════════ */}
      <Section className="arch-section">
        <div className="section-label">System Architecture</div>
        <h2>Four-Layer Serverless Stack</h2>
        <p className="section-lead">
          Click each layer to explore the services powering this platform — from global
          content delivery to sub-millisecond data retrieval.
        </p>

        <div className="arch-diagram">
          {layers.map((layer, i) => (
            <div
              key={layer.id}
              className={`arch-layer ${activeLayer === layer.id ? "arch-layer-active" : ""}`}
              style={{ "--layer-color": layer.color }}
              onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
            >
              <div className="arch-layer-header">
                <div className="arch-layer-num">{String(i + 1).padStart(2, "0")}</div>
                <layer.icon className="arch-layer-icon" />
                <span className="arch-layer-title">{layer.title}</span>
                <FaChevronDown className={`arch-chevron ${activeLayer === layer.id ? "rotated" : ""}`} />
              </div>

              {activeLayer === layer.id && (
                <motion.div
                  className="arch-layer-detail"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="arch-layer-desc">{layer.description}</p>
                  <div className="arch-nodes">
                    {layer.nodes.map((node, j) => (
                      <ArchNode key={j} {...node} />
                    ))}
                  </div>
                </motion.div>
              )}

              {i < layers.length - 1 && (
                <div className="arch-connector">
                  <div className="connector-line" />
                  <div className="connector-dot" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════ AGENT SWARM ══════════ */}
      <Section className="swarm-section">
        <div className="section-label">The Agent Swarm</div>
        <h2>Multi-Agent Orchestration</h2>
        <p className="section-lead">
          Built with the <strong>Strands SDK</strong>, three specialized agents collaborate via
          <strong> Agent-to-Agent (A2A) protocol</strong> — delegating complex reasoning
          tasks to domain experts, all powered by a custom MCP server.
        </p>

        <div className="swarm-diagram">
          <div className="swarm-agent swarm-orchestrator">
            <div className="swarm-agent-icon"><FaDatabase /></div>
            <h4>PPM Data Agent</h4>
            <p>The entry point and delegator. Manages user context and routes intent to specialized agents.</p>
            <span className="swarm-tag">Delegator</span>
          </div>

          <div className="swarm-arrows">
            <div className="swarm-arrow arrow-left">
              <span>Pathway Agent</span>
            </div>
            <div className="swarm-arrow arrow-right">
              <span>Course Agent</span>
            </div>
          </div>

          <div className="swarm-bottom">
            <div className="swarm-agent swarm-ppm">
              <div className="swarm-agent-icon"><FaRoute /></div>
              <h4>Pathway Agent</h4>
              <p>Specializes in generating and customizing student transfer pathways using CP-SAT.</p>
              <span className="swarm-tag">Planning</span>
            </div>

            <div className="swarm-agent swarm-mcp">
              <div className="swarm-agent-icon"><FaGraduationCap /></div>
              <h4>Course Agent</h4>
              <p>Handles deep course equivalency evaluations and articulation agreements.</p>
              <span className="swarm-tag">Expert</span>
            </div>
          </div>
        </div>

        {/* Tool Cards */}
        <div className="tools-heading">
          <h3>10+ Autonomous Tools</h3>
          <p>Each tool is deployed as an independent function, invocable through the MCP protocol.</p>
        </div>
        <div className="tools-grid">
          {agentTools.map((tool, i) => (
            <motion.div
              key={i}
              className="tool-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FaCheckCircle className="tool-check" />
              <div>
                <strong>{tool.name}</strong>
                <span>{tool.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════════ MY CONTRIBUTIONS ══════════ */}
      <Section className="contrib-section">
        <div className="section-label">My Engineering Role</div>
        <h2>What I Built</h2>
        <p className="section-lead">
          As the Lead Cloud & AI Engineer, I architected and implemented the platform's
          core infrastructure — from data pipelines to the agent swarm to the deployed frontend.
        </p>

        <div className="contrib-grid">
          {contributions.map((c, i) => (
            <motion.div
              key={i}
              className="contrib-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="contrib-icon"><c.icon /></div>
              <h4>{c.title}</h4>
              <p>{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ══════════ IMPACT METRICS ══════════ */}
      <Section className="metrics-section">
        <div className="section-label">Impact</div>
        <h2>By the Numbers</h2>

        <div className="metrics-grid">
          <AnimatedStat end={70} suffix="+" label="Community Colleges Consolidated" />
          <AnimatedStat end={20} suffix="+" label="Stakeholders in Pilot" />
          <AnimatedStat end={5} prefix="<" suffix="s" label="LLM Response Latency (from >60s)" />
          <AnimatedStat end={10} suffix="+" label="Autonomous MCP Tools" />
          <AnimatedStat end={100} suffix="%" label="Infrastructure as Code" />
          <AnimatedStat end={11320} label="Labeled Course Pairs Curated" />
        </div>
      </Section>

      {/* ══════════ TECH STACK ══════════ */}
      <Section className="stack-section">
        <div className="section-label">Technology</div>
        <h2>Tech Stack</h2>

        <div className="stack-categories">
          <div className="stack-category">
            <h4><FaCloud /> Cloud & Infra</h4>
            <div className="stack-pills">
              {["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "Cognito", "Amplify", "Terraform"].map(t =>
                <span key={t} className="stack-pill">{t}</span>
              )}
            </div>
          </div>
          <div className="stack-category">
            <h4><FaBrain /> AI & ML</h4>
            <div className="stack-pills">
              {["Strands SDK", "MCP Protocol", "Deep Embeddings", "k-NN", "SVM", "Random Forest", "RAG", "CP-SAT Solver"].map(t =>
                <span key={t} className="stack-pill">{t}</span>
              )}
            </div>
          </div>
          <div className="stack-category">
            <h4><FaDatabase /> Data</h4>
            <div className="stack-pills">
              {["Aurora PostgreSQL", "Redis Vectors", "DynamoDB", "ETL Pipelines", "ASSIST API", "C-ID Data"].map(t =>
                <span key={t} className="stack-pill">{t}</span>
              )}
            </div>
          </div>
          <div className="stack-category">
            <h4><FaCode /> Frontend</h4>
            <div className="stack-pills">
              {["Next.js", "TypeScript", "Tailwind CSS", "AWS Amplify", "React"].map(t =>
                <span key={t} className="stack-pill">{t}</span>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ TIMELINE ══════════ */}
      <Section className="timeline-section">
        <div className="section-label">Journey</div>
        <h2>Research Timeline</h2>

        <div className="timeline">
          {timeline.map((t, i) => (
            <TimelineItem
              key={i}
              {...t}
              isActive={i === timeline.length - 1}
            />
          ))}
        </div>
      </Section>

      {/* ══════════ CTA FOOTER ══════════ */}
      <Section className="cta-section">
        <h2>Explore Further</h2>
        <div className="cta-buttons">
          <a
            href="https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.poster-demo-papers.282/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-primary"
          >
            <FaFileAlt />
            <span>Read the EDM Paper</span>
          </a>
          <button
            className="cta-btn cta-secondary"
            onClick={() => navigate("/projects")}
          >
            <FaArrowRight />
            <span>View All Projects</span>
          </button>
        </div>
      </Section>
    </div>
  );
};

export default ResearchPage;
