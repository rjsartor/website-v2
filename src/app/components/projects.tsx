import Image from 'next/image';
import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectType } from '../types/project.types';

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, url, description, image, tags = [] } = project;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block mb-4">
      <div className="flex flex-row items-start rounded-lg overflow-hidden border border-transparent transition duration-300 ease-in-out hover:bg-gray-800 hover:border-gray-700">
        <div className="w-1/4 p-4 mt-3">
          <Image src={image} alt={name} width={150} height={75} className="align-top" />
        </div>
        <div className="flex flex-col p-4 w-3/4">
          <h3 className="text-white text-xl font-semibold mt-2">
            {name}
          </h3>
          <p className="text-gray-300 text-base mt-2 secondary-text">{description}</p>
          <div className="flex flex-wrap mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-teal-700 text-teal-200 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

const Projects: React.FC = () => {
  return (
    <section className="">
      <h1 className="text-xl mb-8">PROJECT SPOTLIGHT</h1>
      <div className="flex flex-col mb-6 gap-4">
        {PROJECTS.map((p, index) => <ProjectCard key={index} project={p} />)}
      </div>
    </section>
  )
}

export default Projects;
