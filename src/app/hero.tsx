"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
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
            className="mb-4 xl:pr-28  !text-gray-500"
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
       
       
        </div>
        <Image
          width={1024}
          height={1024} 
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />

{/* <video
  width="1024"
  height="1024"
  className="h-[36rem] w-full rounded-xl object-cover"
  autoPlay
  loop
  muted
>
  <source src="/image/vid.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
      </div>
    </header>
  );
}

export default Hero;
