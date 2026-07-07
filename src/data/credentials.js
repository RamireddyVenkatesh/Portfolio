// src/data/credentials.js

export const personalInfo = {
  name: "Venkatesh Ramireddy",
  role: "Java Developer",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "venkateshramireddy579@gmail.com",
  resumeLink: "/resume.pdf"
};

export const socialLinks = {
  github: "https://github.com/RamireddyVenkatesh",
  linkedin: "https://linkedin.com/in/VenkateshRamireddy",
  twitter: "https://twitter.com/venkyinsights"
};

export const skills = [
  "Java", "Spring Boot", "Hibernate ORM", "Spring Security", 
  "JavaScript", "React", "Git", "REST APIs", "SQL"
];

export const experience = [
  {
    id: 1,
    company: "Edubot Software and Services",
    role: "Junior Software Developer",
    duration: "Jan 2024 - Present",
    contributions: [
      "Developed and maintained enterprise-grade backend systems.",
      "Optimized database queries and integrated secure API endpoints using Spring Security.",
      "Participated in full software development lifecycle and code reviews."
    ]
  }
];

export const education = [
  {
    id: 1,
    institution: "Sri Chundi Ranganayakulu Engineering College",
    degree: "Bachelor of Technology",
    duration: "2018 - 2022"
  },
  {
    id: 2,
    institution: "Infosys Springboard",
    degree: "Java Developer Certification",
    duration: "Nov 2025"
  }
];

export const projects = [
  {
    id: 1,
    title: "Banking System Implementation",
    tech: ["Java", "Spring Boot", "REST API"],
    description: "Built a secure, level-based banking system capable of handling complex transaction logic and user authentication.",
    liveLink: "#",
    github: "#"
  }
];