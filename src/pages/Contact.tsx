// About.tsx
import React, { useState } from 'react';
import { FaFileDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Img from '../assets/Contact.svg';
import Img1 from '../assets/Contact1.svg';

const Hire: React.FC = () => {
  const boxesData = [
    { icon: <FaFileDownload />, text: 'Download Resume', link: 'https://drive.google.com/file/d/1xroePlfuRA74yIozn3-nwg-p4wMXZfrL/view?usp=sharing' },
    { icon: <FaGithub />, text: 'GitHub', link: 'https://github.com/Akshat-Pandey16' },
    { icon: <FaLinkedin />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/akshat-pandey-001a53147/' },
    { icon: <FaEnvelope />, text: 'Email', link: 'mailto:akshat16pandey@gmail.com' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen border-y-2 border-emerald-300 bg-gray-950 relative">
      <Navbar />
      <div className='flex flex-box flex-col justify-center items-center absolute top-24'>
        <h1 className="text-white text-7xl mb-4">Get in Touch!</h1>
        <p className="text-gray-300 text-2xl text-center">
          Ask me why I love rounded corners so much!
        </p>
      </div>

      <div className="flex flex-box justify-center items-center absolute top-0 left-0 h-1/3">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20" />
      </div>

      <div className="flex flex-box justify-center items-center absolute bottom-0 right-0 h-4/5">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20" />
      </div>

      {/* Four vertically placed clickable boxes with different icons and text */}
      <div className="flex flex-col absolute left-56 bottom-16">
        {boxesData.map((box, index) => (
          <a
            key={index}
            href={box.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-8 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-16 h-16 bg-white border-4 border-emerald-300 shadow-sm shadow-emerald-100 rounded-xl mr-2 flex items-center justify-center overflow-hidden transition-transform transform group-hover:scale-110 group-hover:bg-emerald-100 ${
                hoveredIndex === index ? 'group-hover:text-emerald-500' : 'text-gray-600'
              }`}
            >
              {React.cloneElement(box.icon, { size: 32 })}
            </div>
            <p className="text-white max-h-16 overflow-hidden overflow-ellipsis">{box.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hire;
