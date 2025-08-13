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
      year: 2014,
      hasMore: false,
      content: '(NSC) National Senior Certificate',
      place: 'Hoerskool Voortrekkerhoogte',
      icon: AcademicCapIcon,
    },
    {
      year: 2018,
      hasMore: false,
      content: 'Diploma In Information Technology (Network Engineering)',
      place: 'Richfield Graduate Institute of Technology',
      icon: AcademicCapIcon,
    },
    {
      year: 2019,
      hasMore: true,
      content: 'Junior PHP Developer',
      place: 'Taly Computer Solutions',
      icon: BriefcaseIcon,
      list: [
        'Develop new systems and applications.',
        'Maintain and improve existing systems and applications',
        'Troubleshooting issues and problems.',
        'System testing.',
        'System documentation',
        'Updating legacy applications user interface and refactoring code',
        'Database creation and management',
        'Updating and Maintain code using git',
        'Responding to customer emails on enquires or bugs',
        'Assisting senior developers on projects',
      ],
    },
    {
      year: 2021,
      hasMore: true,
      content: 'Front End Developer',
      place: 'Amazizi Consultation',
      icon: BriefcaseIcon,
      list: [
        'Convert Figma designs to web',
        'Maintain and update existing designs',
        'Ensure web designs are responsive',
        'Fix design bugs',
        'Develop and prototype new screens',
        'Process json data from backend to frontend view',
        'Develop animated navigation ',
      ],
    },
    {
      year: 2022,
      hasMore: true,
      content: 'Full Stack Developer',
      place: 'PayDay Software Systems',
      icon: BriefcaseIcon,
      list: [
        'Database Management ',
        'Server administration ',
        'Setting up and monitoring the GIT server',
        'Unit testing',
        'Develop and maintain software',
        'Maintaining ZK access control software and hardware configuration',
        'Reverse engineering legacy desktop applications to web',
        'Lead developer for 2 projects',
        'Documentation of code/classes',
        'Maintain mobile time and attendance app for Android/IOS',
      ],
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
                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  {item.year}
                </Typography>
              </TimelineHeader>
              <TimelineBody className={index < timelineData.length - 1 ? 'pb-8' : ''}>
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
      <Dialog
        open={open}
        handler={() => setOpen(false)}
        size="lg"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <DialogBody
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {selectedItem && (
            <div>
              <DialogHeader
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {selectedItem.place}
              </DialogHeader>
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
        <DialogFooter
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
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
