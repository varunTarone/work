import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import BlurFade from './ui/blur-fade';
import { JetBrains_Mono } from "next/font/google";
import { cn } from '@/utils/cn';

const JetBrains = JetBrains_Mono({
  weight: ["400", "800"],
  display: "swap",
  subsets: ["latin"],
});


const Hero = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Varun!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-[15rem] mb-[5rem] ">
      <p className={cn(`${JetBrains.className} text-neutral-600 dark:text-neutral-200 text-xs sm:text-4xl z-10 `)}>
        200: All ok!👍
      </p>
      <TypewriterEffectSmooth words={words} />

    </div>
  );
}

export default Hero