import { useEffect, useState } from "react";
import Spacer from './spacer';

enum sections {
  about = 'about',
  experience = 'experience',
  projects = 'projects',
}

const Nav = () => {
  const [selectedSection, setSelectedSection] = useState<sections>(sections.about);
  
  const scrollToSection = (sectionId: sections) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 96;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (sectionId: sections) => {
    setSelectedSection(sectionId);
    scrollToSection(sectionId);
    window.history.pushState(null, '', '#' + sectionId);
  };


  useEffect(() => {
    // Function to check if a section is in view
    const initialSection = window.location.hash.replace('#', '') as sections;
    if (Object.values(sections).includes(initialSection)) {
      setSelectedSection(initialSection);
      scrollToSection(initialSection);
    }

    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id as sections);
        }
      });
    };

    // Set up IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-50% 0px -50% 0px',
    });

    // Observe each section
    Object.values(sections).forEach((section) => {
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        observer.observe(sectionEl);
      }
    });

    // Clean up
    return () => {
      Object.values(sections).forEach((section) => {
        const sectionEl = document.getElementById(section);
        if (sectionEl) {
          observer.unobserve(sectionEl);
        }
      });
    };
  }, []);


  const navItemClass = (section: sections) => {
    return `cursor-pointer ${selectedSection === section ? 'primary-text' : 'secondary-text'}`;
  };

  const bulletPointClass = (section: sections) =>
    `inline-block mr-2 ${selectedSection === section ? 'w-9' : 'w-3'} h-1 bg-current`;

  return (
    <nav>
      <ul>
        <li className={navItemClass(sections.about)} onClick={() => handleNavClick(sections.about)}>
          <span className={bulletPointClass(sections.about)}></span>
          About Me
        </li>
        <Spacer  />
        <li className={navItemClass(sections.experience)} onClick={() => handleNavClick(sections.experience)}>
          <span className={bulletPointClass(sections.experience)}></span>
          Experience
        </li>
        <Spacer  />
        <li className={navItemClass(sections.projects)} onClick={() => handleNavClick(sections.projects)}>
          <span className={bulletPointClass(sections.projects)}></span>
          Projects
        </li>
      </ul>
    </nav>
  )
}

export default Nav;