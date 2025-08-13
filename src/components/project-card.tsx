import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <>
    
   
     {/* @ts-ignore */}
    <Card color="transparent" shadow={false}  placeholder="" 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}>
                   {/* @ts-ignore */}
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48"   placeholder="" 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}} >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
         {/* @ts-ignore */}
      <CardBody className="p-0"   placeholder="" 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
             {/* @ts-ignore */}
          <Typography variant="h5" className="mb-2"   placeholder="" 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}>
            {title}
          </Typography>
        </a>
           {/* @ts-ignore */}
        <Typography className="mb-6 font-normal !text-gray-500"   placeholder="" 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}>
          {desc}
        </Typography>
           {/* @ts-ignore */}
        <Button color="gray" size="sm"  placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}>
          see details
        </Button>
      </CardBody>
    </Card>
     </>
  );
}

export default ProjectCard;
