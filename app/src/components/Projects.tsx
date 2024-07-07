import React from 'react'
import Title from './Title'
import Card from './Card'
import {project} from '@/data/project'

const Projects = () => {
  return (
    <div className='z-10'>
      <Title title='Projects' description='Check out my latest work' />
      <h2 className="font-semibold text-xl text-neutral-800 dark:text-neutral-500 text-center">
      {`I've worked on a variety of projects, here are a few of my favorites.`}
      </h2>
      <div className='md:grid-cols-2 grid grid-cols-1 gap-10 '>
      {project.map((element, index) => {
        return(
          <div key={index}>
          <Card heading={element.heading} description={element.description} live={element.live} code={element.code} image={element.image} />
          </div>
        )})}
      </div>
    </div>
  )
}

export default Projects