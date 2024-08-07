"use client";
import React from "react";
import { Vortex } from "./UI/vortex";

export function HeroSection() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Hi, I&apos;m Sanskar Soni
        </h2>
        <p className="text-grey text-sm md:text-2xl max-w-xl mt-6 text-center">
        Crafting Stunning Digital Experiences That Inspire, Engage, and Transform
        <br />
        <br />
        Stunning Digital Experiences...
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-800 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Resume
          </button>
          <button className=" border-2 border-blue-600 px-4 py-2 rounded-lg  text-white">Hire Me</button>
        </div>
      </Vortex>
    </div>
  );
}
