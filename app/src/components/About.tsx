import React from 'react'
import { text } from '@/data/about';
import { motion } from 'framer-motion';
import { JetBrains_Mono } from "next/font/google";
import { cn } from '@/utils/cn';

const JetBrains = JetBrains_Mono({
  weight: ["400", "800"],
  display: "swap",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className='mb-10 w-full'>
      <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          className=" flex flex-col items-center justify-center"
        >
          <div className="flex font-sans w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-1 px-4 rounded-[20px] border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
            <div className="flex justify-center items-center gap-2">
              {/* status */}
              <div className="flex justify-center">
              <div
                  className={`h-2 w-2 rounded-full filter `}
                  style={{
                    boxShadow: `0px 0px 7px 4px #0bff0640`,
                    backgroundColor: `#0CCE6B`,
                  }}
                />
              </div>

              {/* status type */}
              <div className={cn(`${JetBrains.className}`)}>
                <div className="text-[13px] sm:text-[15px]">Me!</div>
              </div>
            </div>
          </div>
        </motion.div>
      <div className='mt-[50px] sm:w-[500px] w-[300px] sm:text-[22px] text-[19px] justify-center text-center'>
      <div className='flex flex-wrap items-center justify-center '>
        {text.split(" ").map((word, index) => {
            return (
                <span key={index} className='opacity-1 transform-none'> 
                    <div className="sm:mx-1 mx-[2px] sm:px-3 px-2 rounded-[20px] border-[1.5px] border-transparent cursor-pointer hover:bg-white hover:bg-opacity-[0.16] transition-all duration-300 ease-in-out hover:scale-110 hover:border-[#515151] hover:border-[1.5px]">
                        {word}
                    </div>
                </span>
            );
            }
        )}  
        </div>
    </div>
    </div>
  )
}

export default About