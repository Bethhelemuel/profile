// ...existing code...
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Typography, Drawer } from "@material-tailwind/react";
import Socials from "@/components/socials";

function Hero() {
  const [openDrawer, setOpenDrawer] = useState(false);

  // Images array  
  const base="bethhelemuel.github.io/profile"
  const images = [base+"/image/hero1.png", base+"/image/hero2.png",base+ "/image/hero3.png"];
  const [currentImage, setCurrentImage] = useState(0);
 
  // Auto-change every 3s
  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        {/* Left text */}
        <div className="row-start-2 lg:row-auto">
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            color="blue-gray"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="mb-4 xl:pr-28 !text-gray-500 inline-flex items-center gap-2"
          >
            Full stack developer
            <Image
              alt="RSA"
              width={12}
              height={12}
              className="w-6 h-auto"
              src="https://bethhelemuel.github.io/profile/image/flag.svg"
            />
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 xl:pr-28 !text-gray-500"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <span className="text-black">Thato Mphugo </span>
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            A passionate web developer based in South Africa. Here, get
            a glimpse of my journey in the world of web development, where
            creativity meets functionality.
          </Typography>

          <div className="flex gap-4">
            {/* @ts-ignore */}
            <Button
              onClick={() => setOpenDrawer(true)}
              className="bg-black text-white"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              More
            </Button>
          </div>
        </div>

        {/* Right circular image with fade animation */}
        <div className="relative h-96 w-96 rounded-full overflow-hidden">
          {images.map((src, index) => (
            <Image
              key={src}
              alt={`Slide ${index + 1}`}
              src={src}
              unoptimized={true}
              width={1024}
              height={1024}
              className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              priority={index === 0} // preload first slide
            />
          ))}
        </div>
      </div>

      {/* Drawer */}
      {/* @ts-ignore */}
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        placement="left"
        size={500}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="p-6 mt-[70px]">
          {/* @ts-ignore */}
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            About me
          </Typography>

          <div className="grid grid-cols-1 gap-10">
            <div className="bg-gray-100 p-4 rounded-lg">
              {/* @ts-ignore */}
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-800"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                I am a highly motivated software developer with a strong
                foundation in various programming languages and technologies.
                From PHP, C#, and Angular to JavaScript, React, and React
                Native, I enjoy working with both front-end and back-end
                technologies. My career has allowed me to lead projects, work
                with diverse teams, and continuously expand my skill set
                through hands-on experience and self-driven learning.
              </Typography>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              {/* @ts-ignore */}
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-800"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                I believe in continuous improvement, whether refining existing
                skills or learning new technologies. With experience in SQL,
                SQLite, and Android development, I am dedicated to enhancing my
                programming expertise. Currently, I am focused on deepening my
                knowledge of React Native, expanding my work with mobile
                applications, and exploring AI to stay adaptable to emerging
                technologies in the software development world.
              </Typography>
            </div>
          </div>
          {/* @ts-ignore */}
          <Button
            onClick={() => setOpenDrawer(false)}
            className="mt-4 bg-black text-white"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Close
          </Button>
        </div>
      </Drawer>
    </header>
  );
}

export default Hero;
