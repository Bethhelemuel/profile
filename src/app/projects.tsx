"use client";

import Image from "next/image";

export function Projects() {
  return (
    <div className="relative">
      {/* Blurred Background */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-10 pr-10 filter blur-md pointer-events-none">
        {/* Column 1 */}
        <div className="grid gap-4">
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt="Project Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt="Project Image 2"
            layout="responsive"
            width={500}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt="Project Image 3"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt="Project Image 4"
            layout="responsive"
            width={500}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt="Project Image 5"
            layout="responsive"
            width={500}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt="Project Image 6"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>

        {/* Column 3 */}
        <div className="grid gap-4">
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt="Project Image 1"
            layout="responsive"
            width={500}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt="Project Image 2"
            layout="responsive"
            width={500}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt="Project Image 3"
            layout="responsive"
            width={500}
            height={300}
          />
        </div>

        {/* Column 4 */}
        <div className="grid gap-4">
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt="Project Image 4"
            layout="responsive"
            width={500}
            height={300}
          />
          <Image
            className="rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt="Project Image 5"
            layout="responsive"
            width={500}
            height={300}
          />
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

      {/* Overlay with text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">
          Under Construction
        </h1>
      </div>
    </div>
  );
}

export default Projects;
