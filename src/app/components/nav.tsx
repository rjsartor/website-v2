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
      const offsetTop = section.offsetTop - 100;
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

    const viewHeight = window.innerHeight;

    const rootMarginTop = -(viewHeight * 0.2) + 'px';
    const rootMarginBottom = -(viewHeight * 0.7) + 'px';

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: `${rootMarginTop} 0px ${rootMarginBottom} 0px`,
    });

    Object.values(sections).forEach((section) => {
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        observer.observe(sectionEl);
      }
    });


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