import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import LProj from '../assets/Light/Projects.svg';
import DProj from '../assets/Dark/Projects.svg';
import LProj1 from '../assets/Light/Projects1.svg';
import DProj1 from '../assets/Dark/Projects1.svg';
import Sb from '../assets/projects/SB.png';
import Mh from '../assets/projects/MH.png';
import Ht from '../assets/projects/HT.png';
import Hc from '../assets/projects/HC.png';
import Fc from '../assets/projects/FC.png';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../components/DarkMode';
import { getProjectsColors } from '../components/Color';

interface ProjectData {
  title: string;
  image: string;
  githubLink: string;
}

const ProjectBox: React.FC<ProjectData> = ({ title, image, githubLink }) => {
  const { isDarkMode } = useDarkMode();
  const {
    cardBackground,
    cardBorder,
    shadow,
    contentText,
  } = getProjectsColors(isDarkMode);

  return (
    <div className={`group ${cardBackground} h-60 w-96 rounded-3xl border-4 ${cardBorder} ${shadow} transform shadow-md p-2 transition-all duration-500 delay-50 hover:scale-105 hover:bg-opacity-180 relative overflow-hidden`}>
      <img src={image} alt={title} className="w-full h-full object-cover rounded-3xl transition-all duration-300 hover:opacity-40 hover:scale-90" />
      <div className={`mb-10 absolute inset-0 flex flex-col items-center justify-end opacity-0 transition-opacity duration-300 p-4 rounded-md group-hover:opacity-100 ${contentText}`}>
        <div className={`text-3xl ${contentText} text-center bg-emerald-500 p-3 rounded-2xl border-2 border-emerald-200`}>{title}</div>
        <div className="flex items-center mt-4 space-x-2">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={`bg-green-400 text-white px-4 py-2 rounded-full flex items-center ${contentText} hover:bg-green-600`}>
            <FaGithub className="w-6 h-6 mr-2" />
            <FaArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectData: ProjectData[] = [
    { title: 'SheildBuntu', image: Sb, githubLink: 'https://github.com/Akshat-Pandey16/ShieldBuntu' },
    { title: 'MeshHawk', image: Mh, githubLink: 'https://github.com/Akshat-Pandey16/MeshHawk' },
    { title: 'HeadTogether', image: Ht, githubLink: 'https://github.com/Akshat-Pandey16/HeadTogether' },
    { title: 'Hoctor', image: Hc, githubLink: 'https://github.com/Akshat-Pandey16/Hoctor.git' },
    { title: 'FineCode', image: Fc, githubLink: 'https://github.com/Akshat-Pandey16/FineCode' },
  ];

  const { isDarkMode } = useDarkMode();
  const {
    border,
    background,
    headingText,
  } = getProjectsColors(isDarkMode);

  return (
    <div id="projects" className={`flex border-y-2 ${border} flex-wrap gap-4 items-center justify-center min-h-screen relative ${background}`} style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }}>
      <Navbar />
      {[0, 1, 2].map((index) => (
        <div key={index} className={`z-50 flex items-center justify-center mt-8 ${index === 2 ? 'mr-32' : 'mr-10'} ${index === 2 && 'z-30'}`}>
          <ProjectBox title={projectData[index].title} image={projectData[index].image} githubLink={projectData[index].githubLink} />
        </div>
      ))}
      {[3, 4].map((index) => (
        <div key={index} className={`flex items-center justify-center mt-[-96px] ${index === 3 ? 'mr-80' : 'ml-40 mr-28'} z-30`}>
          <ProjectBox title={projectData[index].title} image={projectData[index].image} githubLink={projectData[index].githubLink} />
        </div>
      ))}
      <div className={`b ${headingText} absolute top-1/2 right-0 transform rotate-90 text-8xl z-50`} style={{ right: '-100px', transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease' }}>
        Projects.
      </div>
      <div className="flex flex-box justify-center items-center absolute top-0 left-0 h-2/6">
        <img src={isDarkMode ? DProj : LProj } alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 left-80 h-1/2">
        <img src={isDarkMode ? DProj1 : LProj1 } alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Projects;
