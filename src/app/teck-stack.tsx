"use client";

import Image from "next/image";
import { Typography, Dialog, Button,Progress} from "@material-tailwind/react";
import { useState } from "react";

const CLIENTS = [
  {
    id: "adobe-xd",
    title: "Adobe XD",
    level: 60,
    details: ["UI/UX Design", "Prototyping", "Artboards & Layouts","Components & Assets"],
  },
  {
    id: "angular",
    title: "Angular",
    level: 70,
    details: ["Component Communication", "Services & Dependency Injection", "Routing & Navigation","tailwind","Forms & Validation","RxJS & Observables"],
  }, 
  {
    id: "css",
    title: "CSS",
    level: 80,
    details: ["Box Model & Layouts", "SCSS","Responsive Design", "Animations & Transitions","Utility & Frameworks etc tailwind,bootstrap,material tailwind","Cross-Browser Compatibility"],
  },
  {
    id: "next",
    title: "Next.js",
    level: 40,
    details: ["Routing & Navigation", "Styling & Theming", "Authentication & Authorization","Data Fetching Techniques","Static & Dynamic Content Management","API Routes & Backend Integration","Deployment & Hosting"],
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
    id: "dot-net",
    title: ".NET",
    level: 45,
    details: ["RESTful APIs & Web Services", "Authentication & Authorization", "Object-Oriented Programming (OOP)"],
  },
  {
    id: "html",
    title: "HTML",
    level: 90,
    details: ["Core HTML Knowledge", "Semantic Markup", "Forms & User Input Handling","Responsive & Mobile-Friendly Design","JavaScript & CSS Integration"],
  },

  {
    id: "javascript",
    title: "Javascript",
    level: 80,
    details: ["Core JavaScript Fundamentals", "DOM Manipulation & Events", "Asynchronous JavaScript","Object-Oriented Programming (OOP)","Frontend Framework Basics","Working with APIs (AJAX & Fetch)","Modern ES6+ JavaScript Features","Error Handling & Debugging"],
  },

  {
    id: "mysql",
    title: "MySql",
    level: 60,
    details: ["Core SQL Concepts", "Querying Data", " Advanced Query Optimization","Stored Procedures & Triggers","Backup & Recovery","Integrating MySQL with Applications"],
  },

  {
    id: "node-js",
    title: "Node.js",
    level: 50,
    details: ["Core Node.js Concepts","Package Management (NPM & Yarn)", "File System & OS Module", "HTTP & Web Servers","Authentication & Security","Express.js & Middleware","Asynchronous Programming & Event Loop","Database Integration"],
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
    level: 55,
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
    id: "ubuntu",
    title: "Ubuntu",
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
    details: ["Source Control Integration", "Debugging Techniques",  "Working with ASP.NET Core Projects","Code Navigation & IntelliSense"],
  },

  {
    id: "sqlite",
    title: "Sqlite",
    level: 40,
    details: ["Basic Database Operations", "Table Modification", "Querying Data","Working with Views & Triggers","Backup & Recovery"],
  }, 
];

export function TechStack() {
  const [open, setOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const handleOpen = (tech:any) => {
    setSelectedTech(tech);
    setOpen(true);
  };

  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-1">
          My Tech Stack
        </Typography>
        <p className="font-bold text-gray-400 text-[11px] mb-8 inline-flex items-center">
          click for more info 
          <Image src="/image/click.gif" width={20} height={20} alt="click" className="ml-2" />
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6"> 
          {CLIENTS.map((tech) => (
            <Image
              key={tech.id}
              alt={tech.title}
              width={368}
              height={368}
              className="w-[5rem] cursor-pointer"
              src={`/logos/${tech.id}.svg`}
              onClick={() => handleOpen(tech)}
            />
          ))}
        </div>
      </div>

      <Dialog open={open} handler={() => setOpen(false)} size="sm" className="p-6 text-black">
        {selectedTech && (
          <div > 
          <div className="flex flex-row justify-center items-center gap-x-4 mb-10">
          <Image
              key={selectedTech.id}
              alt={selectedTech.title}
              width={368}
              height={368}
              className="w-[5rem] cursor-pointer"
              src={`/logos/${selectedTech.id}.svg`}
             
            />
            <Typography variant="h5" className="mb-4">
              {selectedTech.title}
            </Typography>
       
            </div>


            <div className="flex flex-row justify-center items-center gap-x-4 mb-10">
            <Typography variant="h5" className=""> 
             Level: 
            </Typography>
            <div>
            
            </div> 
             <Progress value={selectedTech.level} variant="filled" />
            </div>

          
         
            <ul className="list-disc pl-6">
              {selectedTech.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <Button className="mt-4 bg-black mt-10" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        )}
      </Dialog>
    </section>
  );
}

export default TechStack;
