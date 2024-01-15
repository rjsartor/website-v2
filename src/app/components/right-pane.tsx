'use client'

import Experience from './experience';
import About from './about';
import Project from './projects';
import Spacer from './spacer';

const RightPane = () => {
  return (
    <div className="w-full lg:ml-[33%] lg:w-2/3 overflow-auto">
      <section id="about">
        <About />
      </section>
      <Spacer height={4} />
      <section id="experience">
        <Experience />
      </section>
      <Spacer height={4} />
      <section id="projects">
        <Project />
      </section>
      <Spacer height={40} />
    </div>
  );
}

export default RightPane;
