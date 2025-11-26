import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { EXPERIENCE } from '../data/experience';
import { ExperienceType } from '../types/experience.types';
import TechnologyTags from './technology-tags';
import { trackButtonClick } from '../services/mixpanel';

type ListItemProps = {
  experience: ExperienceType;
};

const ListItem: React.FC<ListItemProps> = ({ experience }) => {
  const { date, title, companyUrl, description, skills, company, achievements } = experience;
   return (
    <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="group block mb-4" onClick={() => trackButtonClick(company)}>
      <div className="group flex flex-row items-start rounded-lg overflow-hidden border border-transparent transition duration-300 ease-in-out hover:bg-gray-800">
        <div className="w-1/4 p-4">
          <p className="text-lg font-medium secondary-text">{date}</p>
        </div>
        <div className="flex flex-col p-4 w-3/4">
          <h3 className="text-xl font-bold mb-2">
            {title} <span className='tertiary-text'>at</span><br></br>
            <span className='link-hover'>{company}</span>
          </h3>
          <h4 className="tertiary-text text-xl mb-2">{description}</h4>
          <ul style={{ listStyleType: 'disc' }} className='mb-4 secondary-text'>
            {achievements.map((p, i) => <li key={i}>{p}</li>)}
            
          </ul>
          <div className="flex flex-wrap mt-2">
            <TechnologyTags tags={skills} />
          </div>
        </div>
      </div>
    </a>
  );
};

const Experience = () => {
  return (
    <section>
      <h1 className="text-xl mb-8">EXPERIENCE</h1>
      <div className="flex flex-col mb-6 gap-4">
        {EXPERIENCE.map((e, index) => <ListItem key={index} experience={e} />)}
      </div>
      <h3 className='link-hover italic text-3xl text-end'>
        <a href="/resume-2025.pdf" target="_blank" rel="noopener noreferrer" onClick={() => trackButtonClick('Resume')}>
          View full resume <FaExternalLinkAlt className="inline-block ml-2" />
        </a>
      </h3>
    </section>
  )
}
export default Experience;