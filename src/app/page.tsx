"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Components
import { Navbar } from "@/components";

// Sections
import Hero from "./hero";
import TechStack from "./teck-stack";
import Projects from "./projects";
import Certifications from "./Certifications";
import MyTimeline from "./Timeline";

// Animation function
const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time it enters the viewport
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: -0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -50,
      });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="mb-16" // Adjust spacing as needed
    >
      {children}
    </motion.section>
  );
};

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <FadeInSection>
            <Hero />
          </FadeInSection>
          <FadeInSection>
            <TechStack />
          </FadeInSection>
          <FadeInSection>
            <MyTimeline />
          </FadeInSection>
          {/* <FadeInSection>
            <Projects />
          </FadeInSection> */}
          <FadeInSection>
            <Certifications />
          </FadeInSection>
        </article>
      </main>
  
    </>
  );
}
