import React, { useState } from 'react';
import { FaFileDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import LCont from '../assets/Light/Contact.webp';
import DCont from '../assets/Dark/Contact.webp';
import LCont1 from '../assets/Light/Contact1.webp';
import DCont1 from '../assets/Dark/Contact1.webp';
import LCont2 from '../assets/Light/Contact2.webp';
import DCont2 from '../assets/Dark/Contact2.webp';
import LCont3 from '../assets/Light/Contact3.webp';
import DCont3 from '../assets/Dark/Contact3.webp';
import { useDarkMode } from '../components/DarkMode';
import { getContactColors } from '../components/Color';

const Contact: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const {
    border,
    background,
    headingText,
    subheadingText,
    boxBackground,
    boxText,
    hoverText,
    underboxBackground,
    shadow,
  } = getContactColors(isDarkMode);

  const transitionStyles = {
    transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
  };

  const boxesData = [
    { icon: <FaFileDownload />, text: 'Download Resume', link: 'https://drive.google.com/file/d/1AB5wbR75BfJ3VMbgNqaa94Rv9sGOf53-/view?usp=drivesdk' },
    { icon: <FaGithub />, text: 'Github', link: 'https://github.com/Akshat-Pandey16' },
    { icon: <FaLinkedin />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/akshat16pandey/' },
    { icon: <FaEnvelope />, text: 'Email', link: 'mailto:akshat16pandey@gmail.com' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="contact" className={`flex flex-col items-center justify-center min-h-screen border-y-2 ${border} relative ${background}`} style={transitionStyles}>
      <Navbar />
      <div className={`flex flex-box flex-col justify-center items-center absolute top-24`} style={transitionStyles}>
        <h1 className={`b text-8xl mb-4 ${headingText}`}>Get in Touch!</h1>
        <p className={`sb text-3xl text-center ${subheadingText}`}>
          Ask me why I love rounded corners so much!
        </p>
      </div>

      <div className={`flex flex-box justify-center items-center absolute top-0 left-0 h-1/3`}>
        <img src={isDarkMode ? DCont : LCont} alt="Contact Image 1" className="w-full h-full object-cover z-20" loading='lazy' />
      </div>

      <div className={`flex flex-box justify-center items-center absolute bottom-0 right-0 h-4/5`}>
        <img src={isDarkMode ? DCont1 : LCont1} alt="Contact Image 2" className="w-full h-full object-cover z-20" loading='lazy' />
      </div>

      <div className={`flex flex-box justify-center items-center absolute bottom-0 left-0 h-1/3`}>
        <img src={isDarkMode ? DCont2 : LCont2} alt="Contact Image 3" className="w-full h-full object-cover z-20" loading='lazy' />
      </div>

      <div className={`flex flex-box justify-center items-center absolute top-0 right-0 h-1/3`}>
        <img src={isDarkMode ? DCont3 : LCont3} alt="Contact Image 4" className="w-full h-full object-cover z-20" loading='lazy' />
      </div>

      <div className={`flex rounded-3xl border-4 ${border} ${boxBackground} p-4 flex-col absolute bottom-8`} style={transitionStyles}>
        {boxesData.map((box, index) => (
          <a
            key={index}
            href={box.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center mb-8 group ${boxText}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-16 h-16 ${underboxBackground} ${border} ${shadow} rounded-xl mr-2 flex items-center justify-center overflow-hidden transition-transform transform-gpu hover:scale-110 duration:500 delay-400 ${
                hoveredIndex === index ? hoverText : ''
              }`}
            >
              {React.cloneElement(box.icon, { size: 32 })}
            </div>
            <p className={`text-2xl ml-3 max-h-16 overflow-hidden overflow-ellipsis`}>{box.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
