// Projects.tsx
import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import Img from '../assets/projects/Projects.svg';
import Img1 from '../assets/projects/Projects1.svg';
import Sb from '../assets/projects/SB.png';
import Mh from '../assets/projects/MH.png';
import Ht from '../assets/projects/HT.png';
import Hc from '../assets/projects/HC.png';
import Fc from '../assets/projects/FC.png';
import Navbar from '../components/Navbar';

interface ProjectData {
  title: string;
  image: string;
  githubLink: string; // Add GitHub link property
}

const ProjectBox: React.FC<ProjectData> = ({ title, image, githubLink }) => {
  return (
    <div className="group bg-green-100 h-60 w-96 rounded-3xl border-4 border-green-600 shadow-green-300 transform shadow-md p-2 transition-all duration-500 delay-50 hover:scale-105 hover:bg-opacity-180 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-3xl transition-all duration-300 hover:opacity-40 hover:scale-90" />
      <div className=" mb-10 absolute inset-0 flex flex-col items-center justify-end opacity-0 transition-opacity duration-300 p-4 rounded-md group-hover:opacity-100">
        <div className='text-3xl text-green-800 text-center bg-emerald-300 p-3 rounded-2xl border-2 border-emerald-200'>{title}</div>
        <div className="flex items-center mt-4 space-x-2">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-green-400 text-white px-4 py-2 rounded-full flex items-center">
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

  return (
    <div id="projects" className="flex border-y-2 border-green-300 flex-wrap gap-4 items-center justify-center min-h-screen bg-gray-950 relative">
      <Navbar />
      {[0, 1, 2].map((index) => (
        <div key={index} className={`flex z-50 items-center justify-center mt-8 ${index === 2 ? 'mr-32' : 'mr-10'} ${index === 2 && 'z-30'}`}>
          <ProjectBox title={projectData[index].title} image={projectData[index].image} githubLink={projectData[index].githubLink} />
        </div>
      ))}
      {[3, 4].map((index) => (
        <div key={index} className={`flex items-center justify-center mt-[-96px] ${index === 3 ? 'mr-80' : 'ml-40 mr-28'} z-30`}>
          <ProjectBox title={projectData[index].title} image={projectData[index].image} githubLink={projectData[index].githubLink} />
        </div>
      ))}
      <div className="b text-emerald-400 absolute top-1/2 right-0 transform rotate-90 text-8xl z-50" style={{ right: '-100px' }}>
        Projects.
      </div>
      <div className="flex flex-box justify-center items-center absolute top-0 left-0 h-2/6">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 left-80 h-1/2">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Projects;
