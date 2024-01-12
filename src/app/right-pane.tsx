'use client'

import Experience from './experience';
import About from './about';
import Project from './projects';
import Spacer from './spacer';

const RightPane = () => {
  return (
    <div className="w-full md:w-2/3 ml-auto overflow-auto">
      <section id="about">
        <About />
      </section>
      <Spacer height={2} />
      <section id="experience">
        <Experience />
      </section>
      <Spacer height={2} />
      <section id="projects">
        <Project />
      </section>
      <Spacer height={32} />
    </div>
  );
}

export default RightPane;
