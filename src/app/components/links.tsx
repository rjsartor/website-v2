import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { trackButtonClick } from '../services/mixpanel';

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
    <div className="flex justify-start space-x-4 gap-2 tertiary-text">
      <Link 
        Icon={FaGithub}
        url="https://github.com/rjsartor"
        label="GitHub"
        onClick={() => trackButtonClick('GitHub')}
      />
      <Link 
        Icon={FaLinkedin}
        url="https://linkedin.com/in/rjsartor"
        label="LinkedIn"
        onClick={() => trackButtonClick('LinkedIn')}
      />
      <Link 
        Icon={FaEnvelope}
        url="mailto:randal.sartor@gmail.com?subject=Job Inquiry&body=Hello Randy, "
        onClick={() => trackButtonClick('Gmail')}
      />
    </div>
  );
};

export default SocialLinks;