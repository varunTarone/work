import React from 'react'
import Button from '@/components/Button'
import {skill} from '@/data/skill'
import Title from './Title';

const Skills = () => {
  return (
    <div>
      <Title title='Skills' description='Things I have learned'/>
      <div className='grid grid-cols-4 gap-5'>
        {skill.elements1.map((element) => (
          <div>
          <Button text={element.text} logo={element.logo} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills