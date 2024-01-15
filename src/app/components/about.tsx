import React from 'react';
import Spacer from './spacer';

const CONTENT_PARAGRAPH_1: string = 
  "I'm Randy and I've always been fascinated by ideas. After studying philosophy and starting my career in operations management, I became a software engineer to help people turn those ideas into life-changing experiences. In my first professional role, I removed barriers to healthcare by building applications and services used by doctors and medical scribes.";

const CONTENT_PARAGRAPH_2: string = 
  "Now I'm looking for new mid or senior level roles where I can continue developing my technical skills and grow into an engineering leader. I love solving different problems across the tech stack, but would also enjoy specializing for the right role. I am most passionate about mission-driven work and I like building products and tools that make a positive impact.";

const CONTENT_PARAGRAPH_3: string = 
  "In my free time, I like to close the computer and move as much as possible, exploring nature, walking the New England coastline, and playing soccer. Some of my passions are travelling, working with animals, cooking, and history.";

const About: React.FC = () => {
  return (
    <main>
      <div className='secondary-text text-lg'>
        <p>{CONTENT_PARAGRAPH_1}</p>
        <br/>
        <p>{CONTENT_PARAGRAPH_2}</p>
        <br/>
        <p>{CONTENT_PARAGRAPH_3}</p>
      </div>
      <Spacer height={3} />
    </main>
  );
}

export default About;
