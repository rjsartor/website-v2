import React from 'react';
import Spacer from './spacer';

export default function About() {
  return (
    <main className=''>
      <div className='secondary-text'>
        <p>
          {"I've always been fascinated by ideas. After studying philosophy and starting my career in operations management, I became a software engineer to help people turn those ideas into life changing experiences. In my first professional role, I removed barriers to health by building applications and services used by doctors and medical scribes."}
        </p>
        <br/>
        <p>
          {"Now I'm looking for new mid or senior level roles where I can continue developing my technical skills and grow into an engineering leader. Javascript and Typescript are my bread and butter, but I'm open an eager to learning any new technologies. I love solving different problems across the tech stack but would also be more than happy to specialize for the right role. cript and Typescript based tech stacks. I'm comfortable working across the stack, but equally open to specializing for the right opportunity." 
          + " I am most passionate about mission-driven and I like building products or tools that make a positive impact."}
        </p>
        <br/>
        <p>
          {"In my free time, I like to close the computer and move as much as possible, exploring nature, walking the New England coastline, and playing soccer. Some of my favorite passions are travelling, animals, cooking, and history."}
        </p>
      </div>
      <Spacer height={3} />
    </main>
  )
}