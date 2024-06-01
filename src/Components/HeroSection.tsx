"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Components/UI/hero-highlight";

export function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl px-3 md:text-4xl lg:text-4xl font-semibold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hi, I&#39;m Sanskar Soni. Crafting Stunning Digital Experiences That Inspire, Engage, and Transform
        {" "}
        <br />
        <Highlight className="text-black dark:text-white p-2: my-2">
        Stunning Digital Experiences
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
