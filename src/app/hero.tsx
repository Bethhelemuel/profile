"use client";

import { useState } from "react";
import Image from "next/image";
import { Input, Button, Typography, Drawer } from "@material-tailwind/react";
import Socials from "@/components/socials";

function Hero() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="lead"
            color="blue-gray"
            className="mb-4 xl:pr-28 !text-gray-500 inline-flex items-center gap-2"
          >
            Full stack developer  
            <Image
              alt="RSA"
              width={12}
              height={12}
              className="w-6 h-auto"
              src={`/image/flag.svg`}
            />
          </Typography>

          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 xl:pr-28 !text-gray-500"
          >
            <span className="text-black">Thato Mphugo </span>
          </Typography>

          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            A passionate web developer based in South Africa. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>
          
          <div className="flex gap-4">
          
            <Button onClick={() => setOpenDrawer(true)} className="bg-black text-white">
            More
            </Button>

          </div>
        </div>

        <Image
          width={1024}
          height={1024} 
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover" 
        />
      </div>

      {/* Right Side Drawer */}
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        placement="left"
        size={500}
      >
        <div className="p-6 mt-[70px]">
          <Typography variant="h5" color="blue-gray" className="mb-4">
            About me
          </Typography>

         <div className="grid grid-cols-1 gap-10">
          <div className="bg-gray-100 p-4 rounded-lg">
          <Typography variant="small" color="gray" className="font-normal text-gray-800">
          I am a highly motivated software developer with a strong foundation in various programming languages and technologies. From PHP, C#, and Angular 
          to JavaScript and React Native, I enjoy working with both front-end and back-end technologies. My career has allowed me to lead projects, work 
          with diverse teams, and continuously expand my skill set through hands-on experience and self-driven learning.
          </Typography>
          </div>
   
  
          <div className="bg-gray-100 p-4 rounded-lg">
          <Typography variant="small" color="gray" className="font-normal text-gray-800">
          I believe in continuous improvement, whether refining existing skills or learning new technologies. With experience in SQL, SQLite, and Android development,
           I am dedicated to enhancing my programming expertise. Currently, I am focused on deepening my knowledge of React Native, expanding my work with 
           mobile applications, and exploring AI to stay adaptable to emerging technologies in the software development world.
          </Typography>

          </div> 

          
         </div>

          <Button
            onClick={() => setOpenDrawer(false)}
            className="mt-4 bg-black text-white"
          >
            Close
          </Button>
        </div>
      </Drawer>
    </header>
  );
}

export default Hero;
