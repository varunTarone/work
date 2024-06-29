import React from 'react'
import Title from './Title'
import Card from './Card'

const Projects = () => {
  return (
    <div>
      <Title title='Projects' description='Check out my latest work' />
      <div className='grid grid-cols-2 gap-6'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Projects