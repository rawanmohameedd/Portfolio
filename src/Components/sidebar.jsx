import { useEffect, useRef, useState } from 'react';
import { FaAddressCard, FaBriefcase, FaUser, FaBars } from 'react-icons/fa';
import { SiCodeblocks } from 'react-icons/si';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target))
              setIsOpen(false);
      };
  
      useEffect(() => {
          document.addEventListener('click', handleClickOutside);
          return () => {
              document.removeEventListener('click', handleClickOutside);
          };
      }, []);
  // Reusable styles
  const liStyles = 'py-3 px-5 m-2 hover:bg-color3 rounded-lg';
  const liLinksStyles = 'flex flex-row items-center gap-3 no-underline text-white hover:no-underline hover:text-white';
  const iconStyles = 'w-6 h-6';

  return (
    <div ref={sidebarRef}
    onClick={toggleSidebar}
    className={`flex flex-col ${isOpen ? 'w-48' : 'w-16'} h-screen bg-primary text-white items-center justify-center transition-all duration-300`}>
        <button 
          className="mb-4 bg-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className={iconStyles} />
        </button>
        <ul className="flex flex-col items-center">
          <li className={liStyles} title='Aboutme'>
            <a href="/" className={liLinksStyles}>
              <FaUser className={iconStyles} />
              {isOpen && <span>Aboutme</span>}
            </a>
          </li>
          <li className={liStyles} title='Contact'>
            <a href="/contactme" className={liLinksStyles}>
              <FaAddressCard className={iconStyles} />
              {isOpen && <span>Contact</span>}
            </a>
          </li>
          <li className={liStyles} title='Experience'>
            <a href="/experience" className={liLinksStyles}>
              <FaBriefcase className={iconStyles} />
              {isOpen && <span>Experience</span>}
            </a>
          </li>
          <li className={liStyles} title='Projects'>
            <a href="/projects" className={liLinksStyles}>
              <SiCodeblocks className={iconStyles} />
              {isOpen && <span>Projects</span>}
            </a>
          </li>
        </ul>
      </div>
  );
};