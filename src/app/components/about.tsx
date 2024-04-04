import React from 'react';
import Spacer from './spacer';

const CONTENT_PARAGRAPH_1: string = 
  "My name is Randy and I've always been fascinated by ideas. After studying philosophy and international relations at Northeastern University and starting my career in operations management, I became a software engineer to help people turn great ideas into life-changing experiences. In my first professional role, I removed barriers to healthcare by building applications and services used by doctors and medical scribes.";

const CONTENT_PARAGRAPH_2: string = 
  "Now I'm looking for opporunties where I can continue to build impactful products while growing into an engineering leader. I'm a full stack generalist, but wouldn't mind specializing for the right role. I'm most inpsired by mission-driven work and strive to skills to make a positive impact.";

const CONTENT_PARAGRAPH_3: string = 
  "In my free time, I like to close the computer and move as much as possible, playing soccer and exploring New England nature. Some of my passions including travelling, working with animals, cooking, and history.";

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
