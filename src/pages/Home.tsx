import React from 'react';
import { FaArrowRight, FaInfo, FaBuilding, FaLaptopCode, FaCode, FaEnvelope } from 'react-icons/fa';
import Img from '../assets/Home.svg';
import Switcher from '../components/Slider';

const commonButtonClass =
  'text-gray-700 text-bold text-2xl bg-green-100 px-20 py-5 rounded-full flex items-center justify-center hover:bg-white hover:text-green-400 transition-transform transform-gpu hover:scale-110 shadow-lg shadow-green-500 border-4 border-green-600 shadow-md duration-500';

const commonButtonClass1 = 
  'w-6 h-6 mr-2';

const sectionButtons = [
  { id: 'about', text: 'ABOUT ME', icon: <FaInfo className={commonButtonClass1} /> },
  { id: 'internships', text: 'EXPERIENCE', icon: <FaBuilding className={commonButtonClass1} /> },
  { id: 'projects', text: 'PROJECTS', icon: <FaLaptopCode className={commonButtonClass1} /> },
  { id: 'skills', text: 'SKILLS', icon: <FaCode className={commonButtonClass1} /> },
  { id: 'hireme', text: 'WHY HIRE ME?', icon: <FaArrowRight className={commonButtonClass1} /> },
  { id: 'contact', text: 'CONTACT ME', icon: <FaEnvelope className={commonButtonClass1} /> },
];

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="home" className="relative flex flex-col items-center justify-end h-screen bg-gray-950 border-b-4 border-green-300">
      <Switcher position="center" />
      <img src={Img} alt="Img" className="h-5/6 z-20" />

      <div className="absolute top-[13%] text-center z-10 transition-transform transform-gpu">
        <h2 className="text-9xl text-emerald-300 tracking-widest">
          <span className="mr-12">//AKSHAT</span>
          <span className="ml-12">PANDEY//</span>
        </h2>
      </div>

      {/* Buttons on the left side */}
{/* Buttons on the left side */}
<div className="absolute top-1/2 flex flex-col items-center transform -translate-y-10 -translate-x-20 left-4 ml-24">
  {sectionButtons.slice(0, 3).map((button, index) => (
    <button
      key={button.id}
      onClick={() => scrollToSection(button.id)}
      className={`mb-14 ${index === 0 || index === 2? 'translate-x-24' : 'translate-x-10'} ${commonButtonClass}`}
    >
      {button.icon} {button.text}
    </button>
  ))}
</div>

{/* Buttons on the right side */}
<div className="absolute top-1/2 flex flex-col items-center transform -translate-y-10 translate-x-20 right-4 mr-24">
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
