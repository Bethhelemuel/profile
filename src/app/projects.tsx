"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const CLIENTS = [
  {
    id: "adobe-xd",
    title: "Adobe XD",
    level: 60,
    details: ["UI/UX Design", "Prototyping", "Artboards & Layouts","Components & Assets"],
  },
  {
    id: "html",
    title: "HTML",
    level: 90,
    details: ["Core HTML Knowledge", "Semantic Markup", "Forms & User Input Handling","Responsive & Mobile-Friendly Design","JavaScript & CSS Integration"],
  },
  {
    id: "css",
    title: "CSS",
    level: 80,
    details: ["Box Model & Layouts", "SCSS","Responsive Design", "Animations & Transitions","Utility & Frameworks etc tailwind,bootstrap,material tailwind","Cross-Browser Compatibility"],
  },
  {
    id: "figma",
    title: "Figma",
    level: 60,
    details: ["Components & Variants", "Cloud Collaboration", "Prototyping","Design Systems & UI Kits","Responsive & Adaptive Design"],
  },
  {
    id: "github",
    title: "GitHub",
    level: 80,
    details: ["Branching & Merging", "Collaboration & Remote Repositories", "Commit Management & History"],
  },
  { 
    id: "angular",
    title: "Angular",
    level: 70,
    details: ["Component Communication", "Services & Dependency Injection", "Routing & Navigation","tailwind","Forms & Validation","RxJS & Observables"],
  },
  {
    id: "dot-net",
    title: ".NET",
    level: 55,
    details: [
    "Building RESTful APIs",
    "Working with Controllers & Routing",
    "Middleware configuration",
    "Authentication & Authorization",
    "Dependency Injection",
    "Entity Framework",
    "LINQ queries",
    "Object-Oriented Programming (OOP)"
    ],
  },
  {
    id: "javascript",
    title: "Javascript",
    level: 70,
    details: ["Core JavaScript Fundamentals", "DOM Manipulation & Events", "Asynchronous JavaScript","Object-Oriented Programming (OOP)","Frontend Framework Basics","Working with APIs (AJAX & Fetch)","Modern ES6+ JavaScript Features","Error Handling & Debugging"],
  },
  {
    id: "docker",
    title: "Docker",
    level: 30,
    details: [
    "Understanding Containers vs VMs",
    "Building and Running Containers",
    "Docker Images and Dockerfile Basics",
    "Docker Compose for Multi-container Apps",
    "Container Networking and Volumes",
    "Basic Troubleshooting and Logs"
    ],
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    level: 30,
    details: [
    "Kubernetes Architecture: Pods, Nodes, Deployments",
    "Creating and Managing Deployments",
    "Services, ConfigMaps, and Secrets",
    "Scaling and Rolling Updates",
    "Health Checks and Monitoring",
    "Basic Resource Management (CPU & Memory)"
    ],
  },
  {
    id: "mysql",
    title: "MySql",
    level: 60,
    details: ["Core SQL Concepts", "Querying Data", " Advanced Query Optimization","Stored Procedures & Triggers","Backup & Recovery","Integrating MySQL with Applications"],
  },
  {
    id: "laravel",
    title: "Laravel",
    level: 40,
    details: [
    "Basic understanding of MVC",
    "Creating simple routes",
    "Building basic controllers",
    "Connecting to a database",
    "Running simple migrations",
    "Basic CRUD operations",
    "Using Blade templates",
    "Starting project with Artisan"
    ],
  },
  {
    id: "php",
    title: "php",
    level: 75,
    details: ["Core PHP Concepts", "Object-Oriented Programming (OOP)", "PHP & Web Development","Security Best Practices","Working with APIs"],
  },
  {
    id: "postman",
    title: "Postman",
    level: 45,
    details: ["Collaboration & Documentation", "Core API Testing Concepts","Postman Scripting (Pre-request & Tests Tab)", "Working with Collections","Authentication & Authorization","Dynamic Variables & Environments"],
  },
  {
    id: "python",
    title: "Python",
    level: 30,
    details: ["Python Basics & Syntax", "Data Types & Variables", "Operators & Expressions","Working with External Libraries","Control Flow","Exception Handling","Functions & Modules"," Working with Strings & Lists","File Handling"],
  },
  {
    id: "react",
    title: "React",
    level: 45,
    details: ["Advanced React Concepts", "State Management", "React Router","Integrating Third-Party Libraries","TypeScript with React","Performance Optimization","React Context & Custom Hooks","Working with Forms","Side Effects & Data Fetching","Testing React Components"],
  },
  {
    id: "sql-server",
    title: "SQL Server",
    level: 60,
    details: ["Advanced SQL Queries", "Indexing & Performance Tuning", "Transactions & Locking","SQL Server Views, Functions, & Stored Procedures","Backup & Restoration","SQL Server Management Studio (SSMS)"],
  },
  {
    id: "typescript",
    title: "Typescript",
    level: 55,
    details: ["Advanced Types & Type Inference", "Generic Functions and Constraints", "TypeScript with Third-Party Libraries","TypeScript with React"," Asynchronous Programming & Promises"],
  },
  {
    id: "vite",
    title: "Vite",
    level: 40,
    details: [
    "Vite Project Setup & Folder Structure",
    "Dev Server & Hot Module Replacement (HMR)",
    "ES Modules & Native Browser Imports",
    "Vite Config (vite.config.js / ts)",
    "Environment Variables & Modes",
    "Build Process & Optimization",
    "Asset Handling (CSS, Images, Fonts)",
    "Plugins & Integrations",
    "Alias Paths & Module Resolution",
    "Preview & Production Deployment"
    ],
  },
  {
    id: "linux",
    title: "Linux",
    level: 40,
    details: ["File & Directory Management", "File Permissions & Ownership", "Working with Processes","Package Management","Networking & Remote Access","Scheduling Tasks"],
  },
  {
    id: "visual-studio-code",
    title: "Visual Studio Code",
    level: 80,
    details: ["Working with Extensions"," Integrated Terminal", "Multi-File & Multi-Project Management","Code Navigation & IntelliSense","Git Integration & Source Control","Customizing VS Code"]
  },
  { 
    id: "visual-studio",
    title: "Visual Studio",
    level: 55,
    details: ["Source Control Integration", "Debugging Techniques", "Working with ASP.NET Core Projects","Code Navigation & IntelliSense"],
  }
];
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Projects() {
  const tabs = useMemo(() => ["UI/UX", "Backend", "SQL", "Linux"] as const, []);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0]);
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTech, setSelectedTech] = useState<{
    id: string;
    title: string;
    level: number;
    details: string[];
  } | null>(null);

  interface Project {
    name: string;
    description: string;
    stack: string[];
    placeholderImage: string;
    coverImage: string;
  }

  const projectsByTab: Record<(typeof tabs)[number], Project[]> = useMemo(
    () => ({
      "UI/UX": [
        {
          name: "E-commerce Dashboard",
          description: "A modern e-commerce dashboard with real-time analytics and inventory management.",
          stack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Mobile Banking App",
          description: "Secure mobile banking application with biometric authentication and transaction history.",
          stack: ["React Native", "TypeScript", "Redux", "Node.js"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Social Media Platform",
          description: "Full-featured social media platform with real-time messaging and content sharing.",
          stack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Design System",
          description: "Comprehensive design system with reusable components and documentation.",
          stack: ["React", "Storybook", "TypeScript", "Framer Motion"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Task Management Tool", 
          description: "Collaborative task management tool with drag-and-drop functionality.",
          stack: ["Vue.js", "TypeScript", "Vuex", "Firebase"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        { 
          name: "Portfolio Website",
          description: "Personal portfolio website with smooth animations and responsive design.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Analytics Dashboard",
          description: "Real-time analytics dashboard with data visualization and reporting.",
          stack: ["React", "TypeScript", "D3.js", "Node.js"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Weather App",
          description: "Beautiful weather application with location-based forecasts and alerts.",
          stack: ["React Native", "TypeScript", "Weather API", "Redux"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Video Streaming Platform",
          description: "Video streaming platform with live chat and content recommendations.",
          stack: ["Next.js", "TypeScript", "WebRTC", "AWS"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Fitness Tracker",
          description: "Mobile fitness tracking app with workout plans and progress monitoring.",
          stack: ["React Native", "TypeScript", "GraphQL", "MongoDB"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Learning Platform",
          description: "Online learning platform with video courses and interactive quizzes.",
          stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Recipe App",
          description: "Recipe discovery app with meal planning and grocery lists.",
          stack: ["React", "TypeScript", "Express.js", "MongoDB"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        }
      ],
      Backend: [
        {
          name: "REST API Service",
          description: "Scalable REST API service with authentication and rate limiting.",
          stack: ["Node.js", "Express", "TypeScript", "Redis"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Microservices Architecture",
          description: "Microservices-based architecture with service discovery and load balancing.",
          stack: ["Docker", "Kubernetes", "Node.js", "gRPC"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "GraphQL API",
          description: "Flexible GraphQL API with real-time subscriptions and caching.",
          stack: ["Apollo Server", "Node.js", "TypeScript", "PostgreSQL"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Authentication Service",
          description: "Secure authentication service with OAuth 2.0 and JWT tokens.",
          stack: ["Node.js", "Passport.js", "TypeScript", "Redis"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "File Upload Service",
          description: "Cloud-based file upload service with image processing and CDN integration.",
          stack: ["Node.js", "Multer", "AWS S3", "Sharp"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Email Service",
          description: "Transactional email service with templates and analytics.",
          stack: ["Node.js", "Nodemailer", "Handlebars", "Redis"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Payment Gateway",
          description: "Secure payment gateway integration with multiple payment providers.",
          stack: ["Node.js", "Stripe", "TypeScript", "PostgreSQL"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "WebSocket Server",
          description: "Real-time WebSocket server for chat and notifications.",
          stack: ["Socket.io", "Node.js", "Redis", "TypeScript"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Database Migration Tool",
          description: "Automated database migration tool with version control and rollback.",
          stack: ["Node.js", "TypeScript", "Sequelize", "MySQL"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "API Gateway",
          description: "API gateway with routing, authentication, and monitoring.",
          stack: ["Kong", "Docker", "Node.js", "Prometheus"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Message Queue",
          description: "Asynchronous message queue system with job processing.",
          stack: ["RabbitMQ", "Node.js", "Bull", "Redis"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Monitoring Service",
          description: "Application monitoring service with alerts and dashboards.",
          stack: ["Node.js", "Winston", "Grafana", "InfluxDB"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        }
      ],
      SQL: [
        {
          name: "Database Design",
          description: "Optimized database schema design for e-commerce platform.",
          stack: ["PostgreSQL", "ERD Design", "Indexing", "Normalization"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Query Optimization",
          description: "SQL query optimization and performance tuning for large datasets.",
          stack: ["MySQL", "EXPLAIN", "Index Tuning", "Partitioning"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Data Migration",
          description: "Database migration from legacy system to modern architecture.",
          stack: ["PostgreSQL", "ETL", "AWS DMS", "Python"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Reporting System",
          description: "Automated reporting system with complex SQL queries and visualizations.",
          stack: ["SQL Server", "SSRS", "Power BI", "T-SQL"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Data Warehouse",
          description: "Enterprise data warehouse design and implementation.",
          stack: ["Snowflake", "DBT", "SQL", "Airflow"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Stored Procedures",
          description: "Complex stored procedures for business logic implementation.",
          stack: ["PL/SQL", "Oracle", "Triggers", "Functions"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Database Security",
          description: "Database security implementation with encryption and access control.",
          stack: ["PostgreSQL", "Row-Level Security", "Encryption", "Audit Logs"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Performance Monitoring",
          description: "Database performance monitoring and alerting system.",
          stack: ["pg_stat_statements", "Grafana", "Prometheus", "SQL"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Backup Strategy",
          description: "Automated backup and disaster recovery solution.",
          stack: ["PostgreSQL", "WAL-G", "S3", "Cron"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Data Analysis",
          description: "Advanced SQL queries for data analysis and reporting.",
          stack: ["SQL", "Window Functions", "CTEs", "Analytics"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Schema Migration",
          description: "Automated schema migration tool with version control.",
          stack: ["Alembic", "PostgreSQL", "Python", "SQL"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Data Validation",
          description: "Data validation and quality assurance framework.",
          stack: ["SQL", "Great Expectations", "Python", "PostgreSQL"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        }
      ],
      Linux: [
        {
          name: "Server Setup",
          description: "Complete Linux server setup with security hardening and monitoring.",
          stack: ["Ubuntu", "Nginx", "UFW", "Fail2ban"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Docker Deployment",
          description: "Containerized application deployment with Docker Compose.",
          stack: ["Docker", "Docker Compose", "Alpine Linux", "Shell Scripts"],
          placeholderImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
        },
        {
          name: "Shell Scripting",
          description: "Automated deployment and maintenance shell scripts.",
          stack: ["Bash", "Cron", "Systemd", "Linux"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Network Configuration",
          description: "Linux network configuration and firewall setup.",
          stack: ["iptables", "NetworkManager", "VPN", "OpenSSL"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "System Monitoring",
          description: "Comprehensive system monitoring with Prometheus and Grafana.",
          stack: ["Prometheus", "Grafana", "Node Exporter", "Linux"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Backup Automation",
          description: "Automated backup system with rsync and cloud storage.",
          stack: ["rsync", "Cron", "AWS S3", "Shell Scripts"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Security Hardening",
          description: "Linux security hardening with CIS benchmarks and audit tools.",
          stack: ["Lynis", "CIS Benchmarks", "SELinux", "Auditd"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "CI/CD Pipeline",
          description: "GitLab CI/CD pipeline with automated testing and deployment.",
          stack: ["GitLab CI", "Docker", "Kubernetes", "Shell Scripts"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Log Management",
          description: "Centralized log management with ELK stack.",
          stack: ["Elasticsearch", "Logstash", "Kibana", "Filebeat"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Container Orchestration",
          description: "Kubernetes cluster setup and management.",
          stack: ["Kubernetes", "Helm", "Docker", "Linux"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "VPN Setup",
          description: "Secure VPN configuration and management.",
          stack: ["OpenVPN", "WireGuard", "iptables", "Linux"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        },
        {
          name: "Performance Tuning",
          description: "Linux kernel and application performance optimization.",
          stack: ["sysctl", "Performance Co-Pilot", "htop", "Linux"],
          placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
        }
      ]
    }),
    [tabs]
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleTechClick = (tech: typeof CLIENTS[number] | undefined) => {
    if (tech) {
      setSelectedTech(tech);
      setOpen(true);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-center px-6 pt-6 pb-4">
        <div
          className="inline-flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10 backdrop-blur"
          role="tablist"
          aria-label="Project categories"
        >
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={
                  "px-4 py-2 text-sm font-medium rounded-lg transition " +
                  (isActive
                    ? "bg-white text-black"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200")
                }
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative h-[70vh] border-4 border-red-500 overflow-hidden">
        {/* Regular Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 h-full">
          {projectsByTab[activeTab].map((project: Project, idx: number) => (
            <div 
              key={`${activeTab}-${idx}`} 
              className="relative cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleProjectClick(project)}
            >
              <Image
                className="rounded-lg"
                src={project.placeholderImage}
                alt={project.name}
                layout="responsive"
                width={300}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Popup */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left side - Cover Image */}
            <div className="md:w-1/2 p-4">
              <Image
                src={selectedProject.coverImage}
                alt={selectedProject.name}
                width={800}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            {/* Right side - Project Details */}
            <div className="md:w-1/2 p-6 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.name}</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech: string, idx: number) => {
                    const techData = CLIENTS.find(client => client.title.toLowerCase() === tech.toLowerCase());
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Image
                          src={`/logos/${techData?.id || 'default'}.svg`}
                          alt={tech}
                          width={24}
                          height={24}
                          className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => handleTechClick(techData)}
                        />
                        <span className="text-xs text-gray-700">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Description:</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay with text */}
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">
          Under Construction
        </h1>
      </div> */}
    </div>
  );
}

export default Projects;
