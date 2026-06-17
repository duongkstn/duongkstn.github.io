export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  startDate: string; // "YYYY-MM" format
  endDate: string; // "YYYY-MM" or "Present"
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  school: string;
  year: string; // "YYYY"
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string; // "YYYY-MM" or "YYYY"
  description?: string;
}

export interface ExpertiseArea {
  id: string;
  area: string;
  description: string;
  relatedSkills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  awards: AwardItem[];
  expertise: ExpertiseArea[];
}

export const resumeData: ResumeData = {
  name: "Dao Nguyen Duong",
  title: "AI Engineer",

  summary: `AI engineer passionate about building production-ready machine learning systems. Experienced in large language models, natural language processing, deep learning, and full-stack software engineering. Strong expertise in advanced retrieval systems, multimodal learning, and document intelligence. Published researcher in Vietnamese NLP with multiple competition awards.`,

  contact: {
    email: "nguyenduongyht@gmail.com",
    location: "Vietnam",
    linkedin: "https://www.linkedin.com/in/duongkstn/",
    github: "https://github.com/duongkstn"
  },

  experience: [
    {
      id: "exp-1",
      title: "AI Engineer (Natural Language Processing - Data Ingestion Pipeline)",
      company: "Vision Team, FPT SmartCloud (FCI), FPT",
      startDate: "2024-05",
      endDate: "Present",
      description: "Leading the development of advanced document intelligence and data ingestion systems for healthcare and administrative documents. Building retrieval and classification systems for complex PDF processing.",
      achievements: [
        "Developed and deployed text-based retrieval and classification models for OCR Healthcare data (ICD-9, ICD-10, surgical datasets)",
        "Designed and implemented advanced RAG-based system for question-answering on healthcare insurance PDF documents with module-level performance evaluation",
        "Implemented modular, extensible Multimodal Data Ingestion Pipeline for administrative PDF/Docx/PPTX documents, delivering structured outputs in HTML and JSON formats",
        "Developed and enhanced models addressing Language Detection, Table Merging, Text Mapping, Reading Order, and Document Structure Analysis challenges"
      ],
      technologies: ["Advanced retrieval", "Multimodal vision-language models", "Ragas", "Docling", "PaddleOCR", "Elasticsearch", "Kotaemon", "LLamaindex", "Langfuse", "Grafana", "Prometheus", "Docker", "Unstructured"]
    },
    {
      id: "exp-2",
      title: "AI Engineer (Natural Language Processing - Chatbot system)",
      company: "Innovation Center, VNPT-IT, VNPT",
      startDate: "2019-09",
      endDate: "2024-04",
      description: "Designed and built neural network models and retrieval systems for VNPT's SMARTBOT framework. Handled back-end engineering for scaling and improving performance of retrieval-based systems.",
      achievements: [
        "Designed neural networks models including intent classification, rule-based entity recognition, statistical entity recognition, out-of-vocabulary detection, and accent-corrector models for VNPT's SMARTBOT system",
        "Designed legal document retrieval system and matching address algorithm for VNPT's eKYC integrated with OCR system",
        "Built, served, scaled and improved performance of retrieval-based system using Python, Elasticsearch, FastAPI, AsyncIO, Redis and parallel programming techniques"
      ],
      technologies: ["Huggingface transformers", "Tensorflow", "Pytorch", "ONNX", "Rasa", "Redis", "REST APIs", "Flask", "FastAPI", "AsyncIO", "Docker", "Elasticsearch", "Pandas", "Trie data structure", "LLamaIndex", "Scrapy", "Beautifulsoup4"]
    },
    {
      id: "exp-3",
      title: "Data Scientist Intern",
      company: "Viettel Research and Development Institute",
      startDate: "2018-06",
      endDate: "2018-08",
      description: "Worked on information extraction problems in natural language processing within a team environment.",
      achievements: [
        "Worked in a team of five people to solve Information Extraction problems in Natural Language Processing",
        "Wrote technology internal paper on 'Supervised Methods for Named Entity Recognition problem'"
      ]
    },
    {
      id: "exp-4",
      title: "Quality of Experience Research",
      company: "HUST's Embedded System and Reconfigurable Lab - University of Aizu's Communication Lab",
      startDate: "2017-07",
      endDate: "2018-05",
      description: "Research on machine learning approaches for video quality assessment.",
      achievements: [
        "Developed Machine learning models to solve Video Quality Assessment (VQA) problem about Video Streaming"
      ]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Engineering Degree",
      field: "Electronics and Telecommunications",
      school: "Hanoi University of Science and Technology",
      year: "2019",
      details: "Major: Electronics and Telecommunications - Talent Program"
    }
  ],

  skills: [
    {
      category: "NLP & Language Models",
      items: ["Huggingface transformers", "Tensorflow", "Pytorch", "ONNX", "Rasa", "LLamaIndex", "LLMs", "BERT", "Intent Classification", "Named Entity Recognition"]
    },
    {
      category: "Machine Learning",
      items: ["Deep Learning", "CNN models", "Video Quality Assessment", "Fine-tuning", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering"]
    },
    {
      category: "Document Intelligence",
      items: ["PaddleOCR", "Docling", "Multimodal vision-language models", "Advanced Retrieval", "Table Merging", "Reading Order Analysis"]
    },
    {
      category: "Backend & Infrastructure",
      items: ["FastAPI", "AsyncIO", "Redis", "Elasticsearch", "Flask", "REST APIs", "Docker", "Parallel Programming"]
    },
    {
      category: "Data Processing",
      items: ["Pandas", "Trie data structure", "Scrapy", "Beautifulsoup4", "Crawling"]
    },
    {
      category: "Data Engineering",
      items: ["IBM Data Engineer Specialization", "MLOps Specialization"]
    },
    {
      category: "Cloud & Tools",
      items: ["Kotaemon", "Langfuse", "Grafana", "Prometheus", "Docker", "Unstructured"]
    }
  ],

  awards: [
    {
      id: "award-1",
      title: "Top-1 in VLSP 2025 Shared Task: Vietnamese Temporal Question Answering",
      issuer: "VLSP 2025",
      date: "2025",
      description: "Sub-Task 2 DurationQA - Applied retrieval and fine-tuning techniques to Qwen models"
    },
    {
      id: "award-2",
      title: "Top-5 (#2 Leaderboard) in Trustii.io's 'Secure RAG System' Data Challenge",
      issuer: "Trustii.io",
      date: "2024",
      description: "Built, deployed offline, secure and efficient RAG System for Understand.Tech"
    },
    {
      id: "award-3",
      title: "5th/71 in Zindi's TechCabal Ewe Audio Translation Challenge",
      issuer: "Zindi / TechCabal",
      date: "2024",
      description: "Trained on-edge CNN model for audio classification problem"
    },
    {
      id: "award-4",
      title: "Top 5 in Zalo AI Challenge 2023",
      issuer: "Zalo AI",
      date: "2023",
      description: "Designed Large Language Model (LLM) for Elementary Maths Solving"
    },
    {
      id: "award-5",
      title: "Fifth Prize in Zalo AI Challenge 2019",
      issuer: "Zalo AI",
      date: "2019",
      description: "Vietnamese Wiki Question Answering Challenge"
    },
    {
      id: "award-6",
      title: "Encouragement Prize in Vietnam Olympiad of Informatics",
      issuer: "Vietnam Olympiad of Informatics (Ministry of Education)",
      date: "2013",
      description: "National informatics olympiad organized by Ministry of Education"
    }
  ],

  expertise: [
    {
      id: "exp-ai",
      area: "AI & Machine Learning",
      description: "Building production-ready machine learning and AI systems, including large language models, deep learning, and advanced retrieval systems",
      relatedSkills: ["LLMs", "Deep Learning", "PyTorch", "TensorFlow", "RAG", "Fine-tuning"]
    },
    {
      id: "exp-nlp",
      area: "Natural Language Processing",
      description: "Expert in NLP pipelines, text classification, intent recognition, entity extraction, and language model fine-tuning",
      relatedSkills: ["BERT", "Intent Classification", "Named Entity Recognition", "Text Classification", "Huggingface"]
    },
    {
      id: "exp-doc",
      area: "Document Intelligence",
      description: "Specialized in multimodal document processing, OCR integration, table detection, reading order analysis, and document structure understanding",
      relatedSkills: ["PaddleOCR", "Docling", "Multimodal vision-language models", "Advanced Retrieval"]
    },
    {
      id: "exp-rag",
      area: "Retrieval-Augmented Generation (RAG)",
      description: "Designing and implementing RAG systems for question-answering applications, including healthcare and insurance document processing",
      relatedSkills: ["LLamaIndex", "Advanced Retrieval", "Elasticsearch", "Prompt Engineering"]
    },
    {
      id: "exp-backend",
      area: "Backend Systems Engineering",
      description: "Building scalable backend systems using FastAPI, Elasticsearch, Redis, and async programming for high-performance NLP services",
      relatedSkills: ["FastAPI", "AsyncIO", "Redis", "Elasticsearch", "Docker", "REST APIs"]
    },
    {
      id: "exp-research",
      area: "Research & Innovation",
      description: "Published researcher in Vietnamese NLP, consistent award winner in AI challenges and competitions, driving innovation in language and document processing",
      relatedSkills: ["Machine Learning", "Data Science", "Competition-driven development", "Research methodology"]
    }
  ]
};

export function getTopExperiences(count: number = 5): ExperienceItem[] {
  return resumeData.experience.slice(0, count);
}

export function getCurrentRole(): ExperienceItem | undefined {
  return resumeData.experience[0];
}

export function getTopExpertiseAreas(count: number = 6): ExpertiseArea[] {
  return resumeData.expertise.slice(0, count);
}
