import React, { useEffect } from 'react';
import { FaArrowRight, FaInfo, FaBuilding, FaLaptopCode, FaCode, FaEnvelope } from 'react-icons/fa';
import Img from '../assets/Home.svg';
import Switcher from '../components/Switcher';
import { useDarkMode } from '../components/DarkMode';
import { getHomeColors } from '../components/Color';

const Home: React.FC = () => {
  const { isDarkMode } = useDarkMode(); 

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const {
    border,
    background,
    text,
    accentText,
    hoverBackground,
    hoverText,
    shadow,
    buttonBorder,
    buttonBackground,
    hoverBorder,
  } = getHomeColors(isDarkMode);

  const commonButtonClass = `${buttonBackground} text-2xl px-20 py-5 rounded-full flex items-center justify-center ${hoverBackground} ${hoverText} ${hoverBorder} transition-transform transform-gpu hover:scale-110 ${shadow} ${buttonBorder} duration-500`;

  const commonButtonClass1 = 'w-6 h-6 mr-2';

  const sectionButtons = [
    { id: 'about', text: 'ABOUT ME', icon: <FaInfo className={commonButtonClass1} /> },
    { id: 'internships', text: 'EXPERIENCE', icon: <FaBuilding className={commonButtonClass1} /> },
    { id: 'projects', text: 'PROJECTS', icon: <FaLaptopCode className={commonButtonClass1} /> },
    { id: 'skills', text: 'SKILLS', icon: <FaCode className={commonButtonClass1} /> },
    { id: 'hireme', text: 'WHY HIRE ME?', icon: <FaArrowRight className={commonButtonClass1} /> },
    { id: 'contact', text: 'CONTACT ME', icon: <FaEnvelope className={commonButtonClass1} /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      id="home"
      className={`relative flex flex-col items-center justify-end h-screen ${border} ${background} border-b-4 ${text}`}
    >
      <Switcher position="center" />
      <img src={Img} alt="Img" className="h-5/6 z-20" />

      <div className={`absolute top-[13%] text-center z-10 transition-transform transform-gpu ${text}`}>
        <h2 className={`title text-9xl tracking-widest ${accentText}`}>
          <span className="mr-12">//AKSHAT</span>
          <span className="ml-12">PANDEY//</span>
        </h2>
      </div>

      {/* Buttons on the left side */}
      <div className="b absolute top-1/2 flex flex-col items-center transform -translate-y-10 -translate-x-20 left-4 ml-24">
        {sectionButtons.slice(0, 3).map((button, index) => (
          <button
            key={button.id}
            onClick={() => scrollToSection(button.id)}
            className={`mb-14 ${index === 0 || index === 2 ? 'translate-x-24' : 'translate-x-10'} ${commonButtonClass}`}
          >
            {button.icon} {button.text}
          </button>
        ))}
      </div>

      {/* Buttons on the right side */}
      <div className="b absolute top-1/2 flex flex-col items-center transform -translate-y-10 translate-x-20 right-4 mr-24">
        {sectionButtons.slice(3).map((button, index) => (
          <button
            key={button.id}
            onClick={() => scrollToSection(button.id)}
            className={`mb-14 ${index === 0 || index === 2 ? '-translate-x-24' : '-translate-x-10'} ${commonButtonClass}`}
          >
            {button.icon} {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
