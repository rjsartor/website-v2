import React from 'react';
import Spacer from './spacer';
import { FaExternalLinkAlt } from 'react-icons/fa';

const EXPERIENCE = {
  robin: {
    company: 'Robin Healthcare',
    date: '2019 - 2023',
    title: 'Full stack software engineer',
    companyUrl: 'https://www.linkedin.com/company/robin-healthcare/',
    description: "Elimatined barriers to health by building applications and services used by doctors and administrators to automate and assist medical documentation.",
    achievements: [
      "Led development of an employee onboarding application that cut training time from months to two weeks for thousands of medical scribes",
      "Designed a 5X revenue-boosting E&M billing code calculator becoming the company's core intellectual property.",
      "Developed an ETL pipeline integrating HL7 and FHIR data, optimizing clinic scheduling processes and patient record keeping.",
      "Built and regularly enhanced the company's internal Nest.js GraphQL API for improved data management.",
      "Led the refactoring of production repositories into a NX monorepo, bolstering security with Snyk.",
      "Implemented front and back-end testing suites that secured over 90% code coverage.",
      "Automated weekly medical coding reports for auditors using AWS Lambda and Google Sheets integration.",
      "Built and refined applications for efficient medical documentation and data capture."
    ],
    skills: ['Typescript', 'React', 'NodeJS', 'NestJS', 'AWS', 'DocDB', 'DynamoDB', 'Docker'],
  },
  thinkful: {
    company: 'Thinkful Coding Bootcamp',
    date: '2018-2019',
    title: 'Engineering Immersion student',
    companyUrl: 'https://www.thinkful.com/',
    description: "Five month, full-time coding bootcamp specializing in full stack web development",
    // . Contributed to Robin's core product, the Assist App, faciliating medical scribes to generate documentation of exam room video footage, designed and built the world's most accurate E&M code billing calculator, and lead team designing and building a scribe training application.", 
    achievements: [
      'Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures',
      'Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer'
    ],
    skills: ['Javascript', 'HTML5', 'CSS3', 'React', 'Redux', 'NodeJS', 'MongoDB', 'Heroku'],
  },

}

const ListItem = ({ job }) => {
  const { date, title, companyUrl, description, skills, company, achievements } = job
   return (
    <div className="flex flex-col md:flex-row mb-6 gap-4">
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
    </div>
  );
};

const Experience = () => {
  return (
    <div className="">
      <h1 className="text-xl mb-8">EXPERIENCE</h1>
      <div className="job">
        <div className="job-header flex flex-col justify-between items-center">
          <ListItem job={EXPERIENCE.robin} />
          <Spacer height={4} />
          <ListItem job={EXPERIENCE.thinkful} />
        </div>
        <h3 className='text-lg italic text-end'>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='link-hover'>
            View full resume <FaExternalLinkAlt className="inline-block ml-2" />
          </a>
        </h3>
      </div>
    </div>
  )
}
export default Experience;