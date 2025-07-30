"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const PROJECTS = [
  {
    Image: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    Image: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a fitness website Summer Campaign. Form development included.",
  },
  {
    Image: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    Image: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering access to the latest and greatest gadgets and accessories.",
  },
  // ...other items
];

export function Projects() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-10 pr-10">
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt="Project Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt="Project Image 2"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt="Project Image 3"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt="Project Image 4"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt="Project Image 5"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt="Project Image 6"
            layout="responsive"
            width={500}
            height={300}
          />
          
        </div>

        
        
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt="Project Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt="Project Image 2"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt="Project Image 3"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt="Project Image 4"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt="Project Image 5"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt="Project Image 6"
            layout="responsive"
            width={500}
            height={300}
          />
          
        </div>

        
        
      </div>
      {/* Repeat the structure for other columns */}
    </div>
  );
}

export default Projects;
