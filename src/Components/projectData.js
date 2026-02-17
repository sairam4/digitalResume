import {
  FaBrain,
  FaChartBar,
  FaShieldAlt,
  FaImage,
  FaMicroscope,
  FaGraduationCap
} from 'react-icons/fa';

const projects = [
  {
    id: "ppm-ai-advising",
    name: "AI Transfer Advising Platform",
    shortName: "PPM Research",
    tagline: "Serverless Multi-Agent AI for 70+ Colleges",
    description: "Cloud-native agentic AI advising platform consolidating transfer data from 70+ California Community Colleges. The architecture features a multi-agent system where a 'PPM Data Agent' acts as the entry point and delegator, orchestrating specialized agents like the 'Pathway Agent' (for pathway generation and customization) and the 'Course Agent' (for course equivalency evaluations). All agents interface with a Model Context Protocol (MCP) server to access autonomous tools, ensuring modularity and scalability.",
    link: "/research",
    category: "Master's Thesis",
    year: "2024–26",
    technologies: ["AWS Lambda", "Strands SDK", "DynamoDB", "Aurora PostgreSQL", "Redis", "Next.js", "Terraform", "MCP", "Cognito"],
    topTech: ["AWS", "Strands", "MCP"],
    icon: FaBrain,
    tileColor: "#0F172A",
    tileAccent: "#FFFFFF",
    featured: true,
    tags: ["AI", "Research", "Cloud", "Data Engineering"],
    role: "AI Engineer",
    impact: "Reduced hours-long evaluations to seconds. 3-agent swarm on AWS Lambda with MCP-connected autonomous tools.",
    isResearchPage: true,
    badge: "Active Research"
  },
  {
    id: "edm-2025-publication",
    name: "Predicting Course Transferability Using Deep Embeddings",
    shortName: "EDM 2025",
    tagline: "Best Poster Paper — Palermo, Italy",
    description: "Published at the 18th International Conference on Educational Data Mining (EDM 2025) in Palermo, Italy. This research introduces a novel approach to automate course equivalency evaluation across California's public higher education system — serving nearly 2.9 million students across 149 colleges and universities.\n\nThe current process of determining course transferability is labor-intensive, requiring manual assessment by academic advisors (with a statewide counselor-to-student ratio of roughly 1:500+). We leverage deep learning to generate semantic embeddings from raw course descriptions and apply traditional machine learning classifiers to predict equivalency, achieving an F₁-score between 0.971 and 0.996 — significantly outperforming standard foundation model approaches.\n\nThe research did not stay on paper. It now powers a live, production-grade AI advising platform actively being piloted with 50+ California Community College stakeholders, reducing transcript evaluation from hours to seconds.",
    link: "https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.poster-demo-papers.282/index.html",
    category: "Publication",
    year: "2025",
    technologies: ["Deep Embeddings", "k-NN", "SVM", "Random Forest", "PCA", "Python", "scikit-learn", "ASSIST API", "ETL Pipelines", "AWS Lambda"],
    topTech: ["Embeddings", "ML", "ETL"],
    icon: FaGraduationCap,
    tileColor: "#1B4332",
    tileAccent: "#FFFFFF",
    featured: true,
    hasBgImage: true,
    tags: ["AI", "Research", "Data Engineering"],
    role: "Data Engineer & Research Co-Author",
    impact: "0.996 F₁-score on course equivalency prediction. Powers a live AI advising platform piloted with 50+ CCC stakeholders, reducing manual evaluation from hours to seconds.",
    isPublication: true,
    badge: "Publication",
    publication: {
      conference: "18th International Conference on Educational Data Mining (EDM 2025)",
      location: "Palermo, Italy",
      date: "July 2025",
      award: "Best Poster Paper Award",
      paperLink: "https://educationaldatamining.org/EDM2025/proceedings/2025.EDM.poster-demo-papers.282/index.html",
      authors: ["Mark Kim", "Shreyas Raghuraman", "Arno Puder", "Craig Hayward", "Hui Yang"],
      institution: "San Francisco State University"
    },
    contributions: [
      {
        title: "Data Architecture & ETL",
        detail: "Engineered complex ETL pipelines to aggregate, normalize, and synthesize highly heterogeneous, siloed academic datasets including ASSIST and C-ID data across 63 California campuses."
      },
      {
        title: "Data Preparation for ML",
        detail: "Curated and processed 11,320 labeled course pairs from 228 courses. Data workflows directly enabled the deep embedding models to be trained effectively."
      },
      {
        title: "Performance Optimization",
        detail: "Built the robust data foundation that enabled the embedding model to achieve an elite 0.996 F₁-score, outperforming standard foundation models."
      },
      {
        title: "Production Deployment",
        detail: "Data infrastructure now powers a serverless AI advising platform on AWS with a multi-agent system (10+ autonomous tools) that generates custom transfer pathways and masks PII."
      }
    ]
  },
  {
    id: "smart-nfl-chatbot",
    name: "Smart NFL Chatbot",
    shortName: "NFL Chatbot",
    tagline: "AI-Powered Sports Assistant",
    description: "An intelligent full-stack chatbot that answers complex NFL-related questions using a combination of structured data and semantically indexed news articles. The system features a React frontend, FastAPI backend, and uses MongoDB and ChromaDB for data storage and retrieval. LLM integration via Open Source LLMs enables intelligent responses, even with incomplete data. I architected and deployed the backend on Dockerized AWS EC2 and fine-tuned prompt strategies for hybrid model usage.",
    link: "https://github.com/sairam4/NFLChatbot",
    category: "AI",
    year: "2025",
    technologies: ["React.js", "Tailwind CSS", "FastAPI", "MongoDB", "ChromaDB", "Docker", "EC2", "OpenRouter", "LLaMA", "GPT-4o", "NLTK", "RapidFuzz", "async I/O"],
    topTech: ["FastAPI", "LLaMA", "Docker"],
    icon: FaBrain,
    tileColor: "#F0F7F4",
    tileAccent: "#2D6A4F",
    featured: true,
    tags: ["AI", "Data Engineering", "Web Development"],
    role: "Full-Stack Developer & AI Architect",
    impact: "End-to-end AI chatbot with hybrid retrieval, deployed on AWS EC2 with Docker."
  },
  {
    id: "secure-sense",
    name: "Secure Sense",
    shortName: "Secure Sense",
    tagline: "On-Device AI Privacy Shield",
    description: "Winner of Emerging AI Innovation Hack at SF Hacks 2025. Developed a Chrome browser extension using on-device compact LLMs to detect and mask sensitive user data (emails, personal info) during web browsing in real time, enhancing privacy. Led model compression using distillation (LLaMA) reducing model size from approximately 2GB to less than 400 MB while preserving performance. Deployed compact models locally via Ollama for efficient inference.",
    link: "https://github.com/sairam4/Secure-Sense",
    category: "AI",
    year: "2025",
    technologies: ["LLaMA", "Chrome Extension", "Model Compression", "Ollama", "React", "Flask"],
    topTech: ["LLaMA", "Chrome Ext", "Ollama"],
    icon: FaShieldAlt,
    tileColor: "#1B4332",
    tileAccent: "#FFFFFF",
    featured: true,
    hasBgImage: true,
    tags: ["AI"],
    role: "Team Lead & ML Engineer",
    impact: "Reduced model from 2GB to <400MB while preserving performance. Won Emerging AI Innovation Hack.",
    badge: "SF Hacks Winner"
  },
  {
    id: "election-insights-dashboard",
    name: "U.S. Election Dashboard",
    shortName: "Election Insights",
    tagline: "200 Years of Presidential Data",
    description: "An advanced, interactive Power BI dashboard visualizing all the U.S. Presidential Election results across all states for past 200 years. The report includes dynamic visual elements such as a winner-by-state map, swing state filters, decomposition trees for winner analysis, party-wise vote share comparisons, and embedded Python visuals for extended statistical insights.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTQ5ZjhlMmMtYmQ4ZC00ZjlhLWFjM2YtMGFlNWE4OWVlYjczIiwidCI6IjA0Yjk2OGM1LWM1MDMtNDFiOC1hNGY4LTE4YzY5ZjRhZmRlNiJ9&pageName=ReportSection",
    category: "Data Science",
    year: "2024",
    technologies: ["Power BI", "DAX", "Python", "matplotlib", "seaborn", "CSV Data Modeling", "Interactive Visual Analytics"],
    topTech: ["Power BI", "DAX", "Python"],
    icon: FaChartBar,
    tileColor: "#FFF8E7",
    tileAccent: "#92400E",
    featured: false,
    tags: ["Power Platform", "Data Science"],
    role: "Data Analyst & Visualization Engineer",
    impact: "Interactive dashboard covering 200+ years of election data with Python-embedded visuals."
  },
  {
    id: "ai-image-editor",
    name: "AI Visual Rebranding Tool",
    shortName: "AI Image Editor",
    tagline: "OCR & Generative Inpainting",
    description: "An end-to-end image editing system that intelligently removes and replaces text from posters and images using dual OCR engines and DALL·E-based inpainting. Designed to help non-designers repurpose visual assets quickly. Combines OpenCV-based preprocessing with EasyOCR and Google Vision OCR for layered text detection, and uses OpenAI's DALL·E API to regenerate masked regions with context-aware visuals.",
    link: "https://github.com/sairam4/better-text-generator",
    category: "Computer Vision",
    year: "2025",
    technologies: ["OpenCV", "EasyOCR", "Google Vision", "DALL·E API", "Pillow", "NumPy"],
    topTech: ["OpenCV", "DALL·E", "EasyOCR"],
    icon: FaImage,
    tileColor: "#EDF2EF",
    tileAccent: "#1B4332",
    featured: false,
    tags: ["AI", "Computer Vision"],
    role: "Solo Developer",
    impact: "Dual OCR engine + AI inpainting pipeline for automated visual asset editing."
  },
  {
    id: "siliconsense-wafer-diagnosis",
    name: "SiliconSense",
    shortName: "SiliconSense",
    tagline: "Wafer Defect Diagnosis & Reasoning",
    description: "An end-to-end AI system for diagnosing and explaining defect patterns in semiconductor wafer maps using both vision and reasoning. Combines a dual-head TinyViT model with Chain-of-Thought (CoT) logic to classify defect types and generate human-like explanations. Simulates a factory inspection pipeline, enabling interpretable diagnostics with efficient edge deployment.",
    link: "#",
    category: "AI",
    year: "2025",
    technologies: ["PyTorch", "TinyViT", "Transformers", "BERT", "jsonl", "NumPy", "Google Colab", "OpenAI GPT-4", "Matplotlib", "Grad-CAM"],
    topTech: ["PyTorch", "TinyViT", "BERT"],
    icon: FaMicroscope,
    tileColor: "#E8F5E9",
    tileAccent: "#1B5E20",
    featured: true,
    tags: ["AI", "Computer Vision"],
    role: "ML Researcher",
    impact: "Dual-head vision model + Chain-of-Thought reasoning for interpretable semiconductor diagnostics."
  },
  {
    id: "global-pnl-tracking",
    name: "Modernizing Enterprise Financial & IAM Infrastructure",
    shortName: "Enterprise IAM & FinTech",
    tagline: "Scalable Azure Architecture for 5,000+ Users",
    description: "At Tata Consultancy Services (TCS), I served as a core Software Development Engineer (SDE) driving the modernization of a legacy financial reporting and risk analysis platform. The project’s objective was to transition a decentralized, high-cost system into a scalable, cloud-native Azure architecture. Rather than just writing localized features, I took high-level ownership of the platform’s development. I collaborated daily with client-side Product Owners and Data Architects, translating complex business requirements into technical deliverables, and engineered critical components across the database, ETL, and security layers.",
    link: "#",
    category: "Enterprise Engineering",
    year: "2021–2024",
    technologies: ["Azure Data Factory", "Azure SQL", "T-SQL", "Entra ID (Azure AD)", "Power Apps", "Power Automate", "Power BI", "REST APIs"],
    topTech: ["Azure", "SQL", "IAM"],
    icon: FaChartBar,
    tileColor: "#002244", // Enterprise Navy
    tileAccent: "#E6F0FF", // Light Blue Accent
    featured: false,
    tags: ["Professional Experience", "Cloud Architecture", "Data Engineering"],
    role: "Software Development Engineer (SDE)",
    impact: "Deployed to 5,000+ global users. Reduced operational costs by 80% via automated ETL pipelines processing 100k+ daily records.",
    keyStats: [
      { label: "Global Users", value: "5,000+" },
      { label: "Cost Reduction", value: "80%" },
      { label: "Daily Data Rows", value: "100k+" },
      { label: "Latency Reduction", value: "95%" }
    ],
    contributions: [
      {
        title: "Data Engineering & Pipeline Orchestration",
        detail: "Problem: Financial data was scattered, and ingestion was manual and error-prone.\n\nImplementation: Engineered automated ETL pipelines using Azure Data Factory (ADF). Mapped complex data flows to ingest, transform, and normalize over 100,000 rows of heterogeneous financial data daily into a centralized Azure SQL data warehouse."
      },
      {
        title: "Database Optimization & Performance",
        detail: "Problem: Legacy queries were taking minutes to execute, impacting executive workflows.\n\nImplementation: took ownership of backend schemas, optimizing T-SQL stored procedures and triggers.\n\nResult: Reduced latency for dynamic report generation from several minutes to under 5 seconds."
      },
      {
        title: "Identity & Access Management (IAM)",
        detail: "Problem: Managing permissions for a global workforce required strict compliance.\n\nImplementation: Spearheaded integration of Microsoft Entra ID (Azure AD). Implemented RBAC and Row-Level Security (RLS) policies to ensure granular data visibility. Developed a custom IAM Admin Portal for dynamic user provisioning."
      },
      {
        title: "Application Development & APIs",
        detail: "Implementation: Developed key user-facing modules using Microsoft Power Apps for risk analysis. Orchestrated backend integrations using Power Automate and custom REST APIs to securely synchronize data between Azure SQL and Power BI dashboards in real-time."
      }
    ]
  }
];

export default projects;
