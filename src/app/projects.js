import Image from 'next/image';
import React from 'react';

const PROJECTS = [{
    name: 'RoadRate',
    url: 'https://www.roadrate.app',
    description: "Web and mobile social media platform for anonymously rating and reviewing drivers in the United States. Users can search license plates to view ratings and reviews, or login to claim their own plates and reviews others'. Built with a React and React Native front end and Node.js back end",
    image: '/images/roadrate.png',
    tags: ['React', 'React-Native', 'Node.js', 'Auth0', 'MongoDB', 'Netlify', 'Heroku']
  },
  {
    name: 'Meal Craft',
    url: 'mealcraft.heroku.app',
    description: 'Search for recipes using whichever ingredients you have. Browse for ideas by entering ingredients or login and save your favorites for later.',
    image: '/images/mealcraft.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Heroku'],
  }
];

const ProjectCard = ({ project }) => {
  const { name, url, description, image, tags = [] } = project;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block mb-4">
      <div className="flex flex-row items-start rounded-lg overflow-hidden border border-transparent transition duration-300 ease-in-out hover:bg-gray-800 hover:border-gray-700">
        <div className="w-1/4 p-4 mt-3">
          <Image src={image} alt={name} width={150} height={75} objectFit="cover" className="align-top" />
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

const Projects = () => {
    return (
      <main className="m-4">
        <h1 className="text-xl mb-8">PROJECTS</h1>
        <div className="flex flex-col mb-6 gap-4">
          {PROJECTS.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </main>
    )
}

export default Projects;
