import React from 'react'
import Button from '@/components/Button'
import {skill} from '@/data/skill'
import Title from './Title';

const Skills = () => {
  return (
    <div className='mb-10'>
      <Title title='Skills' description='Things I have learned'/>
      <h2 className="font-semibold text-xl text-neutral-800 dark:text-neutral-500 text-center">
      During my coding journey, I came accross multiple languages, frameworks and tools.
      </h2>
      <div className='pt-10 grid md:grid-cols-4 grid-cols-2 gap-10'>
        {skill.elements1.map((element, index) => {
          return (
          <div key={index}>
            <Button  text={element.text} logo={element.logo} />
          </div>
        )})}
      </div>
    </div>
  )
}

export default Skills