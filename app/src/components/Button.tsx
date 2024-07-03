import React from 'react'

type propsChain ={
    text?: string,
    logo?: React.ReactNode
}

const Button = (props: propsChain) => {
    const {
        text,
        logo
    } = props;

  return (
    <div>
      <button className="inline-flex h-12 w-full gap-3 animate-shimmer items-center justify-center shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        {logo}
        {text}
      </button>
    </div>
  )
}

export default Button