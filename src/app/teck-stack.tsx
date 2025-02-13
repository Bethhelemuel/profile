"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "adobe-xd",
  "angular",
  "css",
  "next",
  "figma",
  "github",
  "dot-net",
  "html",
  "javascript",
  "mysql",
  "node-js",
  "php",
  "postman",
  "python",
  "react",
  "sql-server",
  "typescript",
  "ubuntu",
  "visual-studio-code",
  "visual-studio",
  "sqlite"
];

export function TechStack() {
  return ( 
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          My Tech stack
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={368}
              height={368}
              className="w-[5rem]"
              src={`/logos/${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
