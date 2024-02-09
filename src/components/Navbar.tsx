// Navbar.tsx
import React, { useState } from 'react';
import Switcher from './Switcher';
import ScrollListener from './ScrollListener';
import { useDarkMode } from './DarkMode';
import { getNavbarColors } from '../components/Color';

const commonPillClass = 'text-white-600 sb text-lg cursor-pointer transition-all duration-300 rounded-full py-1 px-5 shadow-sm';

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { isDarkMode } = useDarkMode();
  const {
    text,
    pillBackground,
    pillHoverBackground,
    pillShadow,
    pillBorder,
  } = getNavbarColors(isDarkMode);

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
        <nav className={`fixed top-1 left-10 w-full z-50 ${text}`}>
          <div className="container mx-auto flex justify-between items-center py-3">
            <div className="flex items-center">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`mr-24 ${commonPillClass} ${pillBackground} ${pillHoverBackground} ${pillShadow} ${pillBorder}`}
              >
                Akshat Pandey{' '}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`ml-28 mr-3 ${commonPillClass} ${pillBackground} ${pillHoverBackground} ${pillShadow} ${pillBorder}`}
              >
                About Me.{' '}
              </button>
              <button
                onClick={() => scrollToSection('internships')}
                className={`mr-3 ${commonPillClass} ${pillBackground} ${pillHoverBackground} ${pillShadow} ${pillBorder}`}
              >
                Experience{' '}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`mr-3 ${commonPillClass} ${pillBackground} ${pillHoverBackground} ${pillShadow} ${pillBorder}`}
              >
                Projects{' '}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`mr-3 ${commonPillClass} ${pillBackground} ${pillHoverBackground} ${pillShadow} ${pillBorder}`}
              >
                Skills{' '}
              </button>
              <button
                onClick={() => scrollToSection('hireme')}
                className={`mr-3 ${commonPillClass} ${pillBackground} ${pillHoverBackground} ${pillShadow} ${pillBorder}`}
              >
                Why Hire Me?{' '}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`mr-3 ${commonPillClass} ${pillBackground} ${pillHoverBackground} ${pillShadow} ${pillBorder}`}
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
