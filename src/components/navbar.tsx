'use clinet'
import React, { useState } from "react";
import {
  Navbar as MTNavbar,
  Input,
  Button,
} from "@material-tailwind/react";
import { ClipboardIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Socials from "./socials";

export function Navbar() {
  const [copied, setCopied] = useState(false);
  const email = "tmphugo@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <div className="container mx-auto flex items-center justify-between"> 
        <div className="w-full max-w-[16rem]">
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email</label>
            <Input
  id="email"
  type="text"
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-bold rounded-lg px-2.5 py-2 w-full"
  value={email}
  disabled
  readOnly
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
  crossOrigin="anonymous"
/>


            <button
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-900 bg-white border border-gray-300 rounded-lg p-2 flex items-center"
            >
              {copied ? (
                <>
                  <CheckCircleIcon className="w-4 h-4 text-black mr-1" />
                  <span className="text-xs font-semibold text-black">Copied</span>
                </>
              ) : (
                <>
                  <ClipboardIcon className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-xs font-semibold">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
        <Socials />
      </div>
    </MTNavbar>
  );
}

export default Navbar;
