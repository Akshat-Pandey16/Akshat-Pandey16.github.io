// Navbar.tsx
import React, { useState } from 'react';
import Switcher from './Switcher';
import ScrollListener from './ScrollListener';
import { useDarkMode } from './DarkMode';

const commonPillClass =
  'text-gray-600 b text-lg cursor-pointer hover:bg-white hover:scale-105 hover:text-green-300 transition-all duration-300 rounded-full py-1 px-5 shadow-sm shadow-green-500 border-4 border-green-600';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { isDarkMode } = useDarkMode(); // Use the useDarkMode hook to get the dark mode state

  const handleScroll = (show: boolean) => {
    setShowNavbar(show);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <ScrollListener onScroll={handleScroll} />
      {showNavbar && (
        <nav className={`fixed top-1 left-10 w-full bg-transparent z-50 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className="container mx-auto flex justify-between items-center py-3">
            <div className="flex items-center">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`mr-24 ${commonPillClass} ${isDarkMode ? 'bg-green-800' : 'bg-green-300'}`}
              >
                Akshat Pandey{' '}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`ml-28 mr-3 ${commonPillClass} ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}
              >
                About Me.{' '}
              </button>
              <button
                onClick={() => scrollToSection('internships')}
                className={`mr-3 ${commonPillClass} ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}
              >
                Experience{' '}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`mr-3 ${commonPillClass} ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}
              >
                Projects{' '}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`mr-3 ${commonPillClass} ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}
              >
                Skills{' '}
              </button>
              <button
                onClick={() => scrollToSection('hireme')}
                className={`mr-3 ${commonPillClass} ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}
              >
                Why Hire Me?{' '}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`mr-3 ${commonPillClass} ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}
              >
                Contact Me.{' '}
              </button>
              <Switcher position="right" />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
