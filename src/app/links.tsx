import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Link = (props: any) => {
  const { Icon, url, label } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className='social-link-hover'>
      <Icon size={24} />
    </a>
  );
}

const SocialLinks = () => {
  return (
    <div className="flex justify-start space-x-4 mt-auto gap-2 tertiary-text">
      <Link 
        Icon={FaGithub}
        url="https://github.com/rjsartor"
        label="GitHub"
      />
      <Link 
        Icon={FaLinkedin}
        url="https://linkedin.com/in/rjsartor"
        label="LinkedIn"
      />
      <Link 
        Icon={FaEnvelope}
        url="https://mailto:randal.sartor@gmail.com/randal.sartor"
        label="Gmail"
      />
    </div>
  );
};

export default SocialLinks;