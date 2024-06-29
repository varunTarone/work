import React from 'react'
import { FlipWords } from "@/components/ui/flip-words"
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

const Hero = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-4xl  ">
        Hi, I'm Varun 👋
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="inline-flex gap-4 w-40 h-10 justify-center items-center rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <IconBrandGithub />
          Github
        </button>
        <button className="inline-flex gap-4 w-40 h-10 rounded-xl bg-white text-black border border-black justify-center items-center text-sm">
          <IconBrandLinkedin />
          LinkedIN
        </button>
      </div>
    </div>
  );
}

export default Hero