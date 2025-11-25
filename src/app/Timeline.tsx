'use client';
import React, { useState } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const MyTimeline = () => {
  const [open, setOpen] = useState(false); // State for controlling the dialog
  const [selectedItem, setSelectedItem] = useState<typeof timelineData[number] | null>(null); // State for the selected timeline item

const timelineData = [
  {
    year: 2022,
    hasMore: true,
    content: 'Full Stack Developer',
    place: 'PayDay Software Systems',
    icon: BriefcaseIcon,
    list: [
      'Led development for 2 major projects from concept to deployment',
      'Created and maintained internal Bonobo Git server',
      'Reverse-engineered legacy desktop applications into fully functional web systems using C#, Angular, and SQL',
      'Assisted in Laravel applications development',
      'Managed databases, performed SQL optimizations, and ensured data integrity',
      'Supported access control systems and configured hardware integration with in-house software',
      'Maintained existing mobile time-and-attendance app for Android/iOS',
      'Wrote unit tests, documentation, and contributed to system designs',
      'Managed IIS server and published .NET applications',
      'Developed supporting APIs for integration with other systems using ASP.NET Core and Node.js',
      'Integrated client APIs into existing systems'
    ],
  },
  {
    year: 2021,
    hasMore: true,
    content: 'Front-End Developer',
    place: 'Amazizi Consultation',
    icon: BriefcaseIcon,
    list: [
      'Converted Figma designs into responsive web pages',
      'Updated and improved UI layouts and implemented animated navigation effects',
      'Processed JSON data from backend services and mapped it to UI views',
      'Designed and prototyped new screens for client applications',
      'Resolved UI bugs and improved component interactivity using JavaScript',
      'Developed admin panels using React or Angular',
      'Integrated existing APIs into newly created UI',
      'Created interfaces for mobile applications using React Native (Expo)',
      'Structured and improved application flow to ensure smooth navigation, state management, and user interactions'
    ],
  },
  {
    year: 2019,
    hasMore: true,
    content: 'Junior PHP Developer',
    place: 'Taly Computer Solutions',
    icon: BriefcaseIcon,
    list: [
      'Developed new systems and improved existing applications using PHP and OOP methodologies',
      'Refactored legacy code and modernized UI components for improved performance and user experience',
      'Created and managed databases, including stored procedures and complex MySQL queries',
      'Performed software testing, troubleshooting, and system documentation',
      'Managed code updates using Git and responded to client bug reports',
      'Collaborated with senior developers to deliver high-quality solutions',
      'Developed interactive navigation and dynamic UI elements using vanilla HTML, CSS, and JavaScript'
    ],
  },
  {
    year: 2018,
    hasMore: false,
    content: 'Diploma in Information Technology (Network Engineering)',
    place: 'Richfield Graduate Institute of Technology',
    icon: AcademicCapIcon,
  },
  {
    year: 2014,
    hasMore: false,
    content: '(NSC) National Senior Certificate',
    place: 'Hoërskool Voortrekkerhoogte',
    icon: AcademicCapIcon,
  },
];



  const handleMoreClick = (item: typeof timelineData[number]) => {
    setSelectedItem(item); // Set the selected item for the modal
    setOpen(true); // Open the modal
  };

  return (
    <div className="w-[32rem]">
      <Timeline>
        {timelineData.map((item, index) => {
          const Icon = item.icon; // Extract icon component
          return (
            <TimelineItem key={index}>
              {index < timelineData.length - 1 && <TimelineConnector />}
              <TimelineHeader className="h-3">
                <TimelineIcon className="p-2">
                  <Icon className="h-5 w-5 " /> {/* Render dynamic icon */}
                </TimelineIcon>
                 {/* @ts-ignore */}
                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  {item.year}
                </Typography>
              </TimelineHeader>
              <TimelineBody className={index < timelineData.length - 1 ? 'pb-8' : ''}>
                 {/* @ts-ignore */}
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-gray-800"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {item.content}
                </Typography>
                 {/* @ts-ignore */}
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-gray-600"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  at {item.place}
                </Typography>
                {item.hasMore && (
                  //@ts-ignore 
                <Typography
                  variant="h6"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  className="leading-none cursor-pointer mt-4 text-light-blue-900"
                  onClick={() => handleMoreClick(item)} // Open the modal on click
                >
                  More...
                </Typography>
                )}
              </TimelineBody>
            </TimelineItem>
          );
        })}
      </Timeline>

      {/* Material Tailwind Dialog for the modal */}
       {/* @ts-ignore */}
      <Dialog
        open={open}
        handler={() => setOpen(false)}
        size="lg"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
         {/* @ts-ignore */}
        <DialogBody
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {selectedItem && (
            <div>
               {/* @ts-ignore */}
              <DialogHeader
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {selectedItem.place}
              </DialogHeader>
               {/* @ts-ignore */}
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-4 ml-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {selectedItem.year} - {selectedItem.content}
              </Typography> 
              <ul className="list-disc pl-5 ml-4">
                {selectedItem.list?.map((listItem, index) => (
                  <li key={index} className="text-sm text-gray-600">{listItem}</li>
                ))}
              </ul>
            </div>
          )}
        </DialogBody>
         {/* @ts-ignore */}
        <DialogFooter
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
           {/* @ts-ignore */}
          <Button
            className="bg-black text-white"
            onClick={() => setOpen(false)}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default MyTimeline;
