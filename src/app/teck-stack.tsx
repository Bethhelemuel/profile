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
    id: "laravel",
    title: "Laravel",
    level: 65,
    details: [
      "MVC Architecture & Routing",
      "Eloquent ORM & Relationships",
      "Database Migrations & Seeders",
      "Authentication & Authorization (Sanctum/Passport)",
      "API Resource Controllers & JSON Responses",
      "Middleware & Request Validation",
      "Environment Configuration & .env Files",
      "Artisan Commands & Custom Commands"
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
    id: "vuejs",
    title: "Vue.js",
    level: 40,
    details: [
      "Vue CLI & Project Structure",
      "Reactivity System & Data Binding",
      "Components (Props, Events, Slots)",
      "Vue Router (Routing & Navigation Guards)",
      "State Management with Vuex or Pinia",
      "Computed Properties & Watchers",
      "Lifecycle Hooks",
      "API Integration with Axios",
      "Form Handling & Validation",
      "Single File Components (.vue files)"
    ],  },

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
  const [selectedTech, setSelectedTech] = useState<{
    id: string;
    title: string;
    level: number;
    details: string[];
  } | null>(null);

  const handleOpen = (tech:any) => {
    setSelectedTech(tech);
    setOpen(true);
  };

  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
         {/* @ts-ignore */}
        <Typography variant="h6" color="blue-gray" className="mb-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          My Tech Stack
        </Typography>
        <p className="font-bold text-gray-400 text-[11px] mb-8 inline-flex items-center">
          click for more info 
          <Image src="profile/image/click.gif" width={20} height={20} alt="click" className="ml-2" />
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6"> 
          {CLIENTS.map((tech) => (
            <Image
              key={tech.id}
              alt={tech.title}
              width={368}
              height={368}
              className="w-[5rem] cursor-pointer"
              src={`profile/logos/${tech.id}.svg`}
              onClick={() => handleOpen(tech)}
            />
          ))}
        </div>
      </div>
 {/* @ts-ignore */}
      <Dialog 
        open={open} 
        handler={() => setOpen(false)} 
        size="sm" 
        className="p-6 text-black" 
        placeholder="" 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}
      >
        {selectedTech && (
          <div > 
          <div className="flex flex-row justify-center items-center gap-x-4 mb-10">
          <Image
              key={selectedTech.id}
              alt={selectedTech.title}
              width={368}
              height={368}
              className="w-[5rem] cursor-pointer"
              src={`profile/logos/${selectedTech.id}.svg`}
             
            />
             {/* @ts-ignore */}
            <Typography 
              variant="h5" 
              className="mb-4" 
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
            >
              {selectedTech.title}
            </Typography>
       
            </div>


            <div className="flex flex-row justify-center items-center gap-x-4 mb-10">
               {/* @ts-ignore */}
            <Typography 
              placeholder="" 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}
            variant="h5" className=""
            > 
             Level: 
            </Typography>
            <div>
            
            </div> 
             {/* @ts-ignore */}
             <Progress 
               value={selectedTech.level} 
               variant="filled" 
               placeholder="" 
               onPointerEnterCapture={() => {}} 
               onPointerLeaveCapture={() => {}} 
             />
            </div>

          
         
            <ul className="list-disc pl-6">
              {selectedTech.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
             {/* @ts-ignore */}
            <Button 
              className="mt-4 bg-black mt-10" 
              onClick={() => setOpen(false)} 
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
            >
              Close
            </Button>
          </div>
        )}
      </Dialog>
    </section>
  );
}

export default TechStack;
