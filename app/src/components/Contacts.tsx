import React from 'react'
import Title from './Title'
import { SignupForm } from './ui/signup'
import RetroGrid from './ui/retro-grid'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import BlurFade from './ui/blur-fade'
import { JetBrains_Mono } from "next/font/google";
import { cn } from '@/utils/cn';

const JetBrains = JetBrains_Mono({
  weight: ["400", "800"],
  display: "swap",
  subsets: ["latin"],
});

const Contacts = () => {
  return (
    <div className='relative flex flex-col h-full w-[95vw] items-center justify-center bg-background p-10 '>
      <Title title='Contact' description='Get in Touch' />
      <h2 className="font-semibold text-xl text-neutral-800 dark:text-neutral-500 text-center">
        Want to chat? Just shoot me an email
      </h2>
      <SignupForm />
      <RetroGrid />
      <BlurFade duration={0.3} delay={0.3}>
      <div className="flex flex-col mt-20 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 z-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
        >
          <Link 
          href='https://github.com/varunTarone/'
          target='_blank'
          className="dark:bg-black bg-white text-black dark:text-white inline-flex py-4 gap-2 w-40 h-4 items-center justify-center">
            <IconBrandGithub />
            Github
          </Link>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white inline-flex gap-4 items-center justify-center space-x-2"
        >
          <Link 
          href='https://www.linkedin.com/in/varun-tarone/'
          target='_blank'
          className="dark:bg-black bg-white text-black dark:text-white inline-flex py-4 gap-2 w-40 h-4 items-center justify-center">
            <IconBrandLinkedin />
            LinkedIN
          </Link>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white inline-flex gap-4 items-center justify-center space-x-2"
        >
          <Link 
          href='https://x.com/varuntarone'
          target='_blank'
          className="dark:bg-black bg-white text-black dark:text-white inline-flex py-4 gap-2 w-40 h-4 items-center justify-center">
            <IconBrandTwitter />
            Twitter
          </Link>
        </HoverBorderGradient>
      </div>
      <BlurFade duration={0.4} delay={0.4}>
        <div className={cn(`${JetBrains.className} flex flex-row gap-1 justify-center mt-5`)}>
              <div className="text-[13px] sm:text-[15px]">Email:</div>
              <a className="font-semibold text-neutral-800 dark:text-neutral-500 text-[13px] sm:text-[15px]" href="mailto:varuntarone@gmail.com">varuntarone@gmail.com</a>
        </div>
      </BlurFade>
      
      </BlurFade>
    </div>
  )
}

export default Contacts