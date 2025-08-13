"use client";
import { useState } from "react";
import { Drawer, Card, Button } from "@material-tailwind/react";

const certifications = [
  {
    id: 1,
    image: "/certifications/advanced-react.jpg",
    pdf: "/certifications/advanced-react.pdf",
    title: "Advanced React",
    link: "https://coursera.org/verify/RBMAAMAH3X2O",
    info: [
      "Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior",
      "Interact with a remote server and fetch and post data via an API",
      "Seamlessly test React applications with React Testing Library",
      "Integrate commonly used React libraries to streamline your application development",
    ],
  },
  {
    id: 2,
    image: "/certifications/ux-ui.jpg",
    pdf: "/certifications/ux-ui.pdf",
    title: "Principles of UX/UI Design",
    link: "https://coursera.org/verify/130N0MSCXV2W",
    info: [
      "Describe the fundamentals of User Experience (UX) design and research",
      "Describe accessibility considerations in design",
      "Practice developing user empathy through research",
      "Create wireframes and prototypes in Figma",
    ],
  },
  {
    id: 3,
    image: "/certifications/version-control.jpg",
    pdf: "/certifications/version-control.pdf",
    title: "Version Control",
    link: "https://coursera.org/verify/4C26EY2XQPLG",
    info: [
      "Implement Version Control systems",
      "Navigate and configure using the command line",
      "Use a GitHub repository and create a GitHub repository",
      "Manage code revisions",
    ],
  },
  {
    id: 4,
    image: "/certifications/linux.jpg",
    pdf: "/certifications/linux.pdf",
    title: "Linux Server Management and Security",
    link: "https://coursera.org/verify/9T0ECFLKTF8G",
    info: [
      "Linux system management",
      "Configure Linux",
      "User authentication and authorization",
    ],
  },
  {
    id: 5,
    image: "/certifications/advanced-angular.png",
    pdf: "/certifications/advanced-angular.pdf",
    title: "Advanced Angular Development",
    link: "https://coursera.org/verify/2D7X7SOZP6CE",
    info: [
      "Angular architecture and core concepts",
      "Components and component interaction",
      "Templates, data binding, and interpolation",
      "Directives: structural and attribute",
      "Services and dependency injection (DI)",
      "Routing, route guards, and lazy loading",
      "Forms: Template-driven and Reactive Forms",
      "RxJS basics and reactive programming in Angular",
      "HttpClient and API communication",
      "Authentication and authorization",
      "Change detection strategies",
      "State management (NgRx or services)",
      "Testing: unit tests and end-to-end tests",
      "Performance optimization",
      "Deployment strategies",
    ],
  },
];

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<null | typeof certifications[0]>(null);

  return (
    <div className="p-[50px]">
      <h1 className="text-2xl font-bold mb-6">Certifications</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          // @ts-ignore
          <Card
            key={cert.id}
            className="cursor-pointer hover:shadow-lg transition p-2"
            onClick={() => setSelectedCertification(cert)}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full rounded-lg"
              width={200}
              height={200}
            />
            <p className="text-center mt-2 font-semibold text-[12px]">
              {cert.title}
            </p>
          </Card>
        ))}
      </div>

      {/* Drawer Popup */}
      {/* @ts-ignore */}
      <Drawer
        open={!!selectedCertification}
        onClose={() => setSelectedCertification(null)}
        placement="right"
        size={500}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="p-10 mt-[70px]">
          {selectedCertification && (
            <>
              <h2 className="text-xl font-bold mb-4">
                {selectedCertification.title}
              </h2>
              <img
                src={selectedCertification.image}
                alt={selectedCertification.title}
                className="w-full rounded-lg"
              />
              <p className="font-bold mt-4 text-[18px]">Description</p>
              <ul className="list-disc list-inside">
                {selectedCertification.info.map((item, index) => (
                  <li className="text-[11px]" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={selectedCertification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 underline text-[11px]"
              >
                {selectedCertification.link}
              </a>
               {/* @ts-ignore */}
              <Button
                onClick={() => setSelectedCertification(null)}
                className="mt-4 bg-black text-white"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Close
              </Button>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
}
