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
      <button className="inline-flex h-12 w-full gap-3 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none ">
        {logo}
        {text}
      </button>
    </div>
  )
}

export default Button