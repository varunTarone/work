import React from 'react'

type titleType ={
    title?: string
    description?: string
}

const Title = (props: titleType) => {
  const {
    title,
    description
  } = props

  return (
    <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <button className="px-3 py-1 rounded-lg border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        {title}
      </button>
      <h1 className="md:text-7xl text-3xl lg:text-5xl my-2 font-bold text-center text-white relative z-20">
        {description}
      </h1>
    </div>
  )
}

export default Title