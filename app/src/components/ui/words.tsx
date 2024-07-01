import React from 'react'
import { text } from '@/data/about'

const words = () => {
  return (
    <div>
        {text.split(" ").map((word) => {
            return (
                <span className='opacity-1 transform-none'> 
                    <div className="sm:mx-1 mx-[2px] sm:px-3 px-2 rounded-[20px] border-[1.5px] border-transparent cursor-pointer hover:bg-white hover:bg-opacity-[0.16] transition-all duration-300 ease-in-out hover:scale-110 hover:border-[#515151] hover:border-[1.5px]">
                        {word}
                    </div>
                </span>
            );
            }
        )}
    </div>
  )
}

export default words