import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa'; // Import GitHub and ArrowRight icons
import Img from '../assets/projects/Projects.svg';
import Img1 from '../assets/projects/Projects1.svg';
import Sb from '../assets/projects/SB.png';
import Mh from '../assets/projects/MH.png';
import Ht from '../assets/projects/HT.png';
import Hc from '../assets/projects/HC.png';
import Fc from '../assets/projects/FC.png';
import Navbar from '../components/Navbar';

const ProjectBox: React.FC<{ title: string; image: string }> = ({ title, image }) => {
  return (
    <div className="group bg-green-100 h-60 w-96 rounded-3xl border-4 border-green-600 shadow-green-300 transform shadow-md p-2 transition-all duration-500 delay-50 hover:scale-105 hover:bg-opacity-45 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-3xl" />
      <div className="text-3xl text-green-500 text-center mb-16 absolute inset-0 flex flex-col items-center justify-end opacity-0 transition-opacity duration-300 p-4 rounded-md group-hover:opacity-100">
        {title}
        <div className="flex items-center mt-4 space-x-2">
          <button className="bg-green-400 text-white px-4 py-2 rounded-full flex items-center">
            <FaGithub className="w-6 h-6 mr-2" /> {/* GitHub icon */}
            <FaArrowRight className="w-4 h-4" /> {/* Right Arrow icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  // Define different names and images for each box
  const projectData = [
    { title: 'SheildBuntu', image: Sb },
    { title: 'MeshHawk', image: Mh },
    { title: 'HeadTogether', image: Ht },
    { title: 'Hoctor', image: Hc },
    { title: 'FineCode', image: Fc },
  ];

  return (
    <div id="projects" className="flex border-y-2 border-green-300 flex-wrap gap-4 items-center justify-center min-h-screen bg-gray-950 relative">
      <Navbar />
      {/* First Row */}
      {[0, 1, 2].map((index) => (
        <div key={index} className={`flex z-50 items-center justify-center mt-8 ${index === 2 ? 'mr-32' : 'mr-10'} ${index === 2 && 'z-30'}`}>
          <ProjectBox title={projectData[index].title} image={projectData[index].image} />
        </div>
      ))}

      {/* Second Row */}
      {[3, 4].map((index) => (
        <div key={index} className={`flex items-center justify-center mt-[-96px] ${index === 3 ? 'mr-80' : 'ml-40 mr-28'} z-30`}>
          <ProjectBox title={projectData[index].title} image={projectData[index].image} />
        </div>
      ))}

      {/* Common Overlay */}
      <div className="absolute top-1/2 right-0 transform rotate-90 text-white text-8xl z-50" style={{ right: '-100px' }}>
        Projects.
      </div>

      {/* Image overlays */}
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
