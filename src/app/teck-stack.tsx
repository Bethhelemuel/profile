"use client";

import Image from "next/image";
import { Typography, Dialog, Button } from "@material-tailwind/react";
import { useState } from "react";

const CLIENTS = [
  {
    id: "adobe-xd",
    title: "Adobe XD",
    details: ["UI/UX Design", "Prototyping", "Artboards & Layouts","Components & Assets"],
  },
  {
    id: "angular",
    title: "Angular",
    details: ["Component Communication", "Services & Dependency Injection", "Routing & Navigation","tailwind","Forms & Validation","RxJS & Observables"],
  },
  {
    id: "css",
    title: "CSS",
    details: ["Box Model & Layouts", "Responsive Design", "Animations & Transitions","Utility & Frameworks etc tailwind,bootstrap,material tailwind","Cross-Browser Compatibility"],
  },
  {
    id: "next",
    title: "Next.js",
    details: ["Routing & Navigation", "Styling & Theming", "Authentication & Authorization","Data Fetching Techniques","Static & Dynamic Content Management","API Routes & Backend Integration","Deployment & Hosting"],
  },
  {
    id: "figma",
    title: "Figma",
    details: ["Components & Variants", "Cloud Collaboration", "Prototyping","Design Systems & UI Kits","Responsive & Adaptive Design"],
  },
  {
    id: "github",
    title: "GitHub",
    details: ["Branching & Merging", "Collaboration & Remote Repositories", "Commit Management & History"],
  },
  {
    id: "dot-net",
    title: ".NET",
    details: ["Web Development", "C# Integration", "Microsoft-backed"],
  },
  {
    id: "html",
    title: "HTML",
    details: ["Web Structure", "Semantic Markup", "Accessibility"],
  },

  {
    id: "javascript",
    title: "Javascript",
    details: ["JS text", "JS text", "JS text"],
  },

  {
    id: "mysql",
    title: "MySql",
    details: ["Mysql Text", "Mysql Text", "Mysql Text"],
  },

  {
    id: "node-js",
    title: "Node.js",
    details: ["Node Text", "Node Text", "Node Text"],
  },

  {
    id: "php",
    title: "php",
    details: ["php Text", "php Text", "php Text"],
  },

  {
    id: "postman",
    title: "Postman",
    details: ["postman Text", "postman Text", "postman Text"],
  },
  {
    id: "python",
    title: "Python",
    details: ["python Text", "python Text", "python Text"],
  },

  {
    id: "react",
    title: "React",
    details: ["react Text", "react Text", "react Text"],
  },
  {
    id: "sql-server",
    title: "SQL Server",
    details: ["sql-server Text", "sql-server Text", "sql-server Text"],
  },

  {
    id: "typescript",
    title: "Typescript",
    details: ["typescript Text", "typescript Text", "typescript Text"],
  },

  {
    id: "ubuntu",
    title: "Ubuntu",
    details: ["ubuntu Text", "ubuntu Text", "ubuntu Text"],
  },

  {
    id: "visual-studio-code",
    title: "Visual Studio Code",
    details: ["visual-studio-code Text", "visual-studio-code Text", "visual-studio-code Text"],
  },
  {
    id: "visual-studio",
    title: "Visual Studio",
    details: ["visual-studio Text", "visual-studio Text", "visual-studio Text"],
  },

  {
    id: "sqlite",
    title: "Sqlite",
    details: ["sqlite Text", "sqlite Text", "sqlite Text"],
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
        <Typography variant="h6" color="blue-gray" className="mb-2">
          My Tech Stack
        </Typography>
        <p className="font-bold text-gray-400 mt-4 text-[11px] mb-8">click for more info</p>

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

      <Dialog open={open} handler={() => setOpen(false)} size="sm" className="p-6">
        {selectedTech && (
          <div >
<div className="flex flex-row justify-center items-center gap-x-4 mb-20">
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
