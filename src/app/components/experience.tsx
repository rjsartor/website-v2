import React from 'react';
import Spacer from './spacer';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { EXPERIENCE } from '../data/experience';
import { ExperienceType } from '../types/experience.types';

type ListItemProps = {
  experience: ExperienceType;
};

const ListItem: React.FC<ListItemProps> = ({ experience }) => {
  const { date, title, companyUrl, description, skills, company, achievements } = experience;
   return (
    <article className="flex flex-col md:flex-row mb-6 gap-4">
      <div className="md:w-1/4 mb-4 md:mb-0 pt-1">
        <p className="text-md font-medium secondary-text">{date}</p>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-xl font-bold text-white-800 mb-2">
          {title} <span className='tertiary-text'>at</span><br></br> 
          <a className='link-hover' href={companyUrl} target='_blank'> {company} <FaExternalLinkAlt className="inline-block ml-2" /></a>
        </h3>
        <h4 className="tertiary-text text-xl mb-2">{description}</h4>
        <ul style={{ listStyleType: 'disc' }} className='mb-4 secondary-text'>
          {achievements.map((p, i) => <li key={i}>{p}</li>)}
          
        </ul>
        <div className="flex flex-wrap mt-2">
          {skills.map((skill) => (
            <span key={skill} className="bg-teal-700 text-teal-200 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <section>
      <h1 className="text-xl mb-8">EXPERIENCE</h1>
      <div>
        <div className="job-header flex flex-col justify-between items-center">
          {EXPERIENCE.map((e, index) => {
            return (
              <article key={index}>
                <ListItem experience={e} />
                <Spacer height={4} />
              </article>
            )
          })}
        </div>
        <h3 className='text-lg italic text-end'>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='link-hover'>
            View full resume <FaExternalLinkAlt className="inline-block ml-2" />
          </a>
        </h3>
      </div>
    </section>
  )
}
export default Experience;