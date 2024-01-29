import React, { useState } from 'react';
import { FaFileDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Img from '../assets/Contact.svg';
import Img1 from '../assets/Contact1.svg';
import Img2 from '../assets/Contact2.svg';
import Img3 from '../assets/Contact3.svg';
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

  const boxesData = [
    { icon: <FaFileDownload />, text: 'Download Resume', link: 'https://drive.google.com/file/d/1xroePlfuRA74yIozn3-nwg-p4wMXZfrL/view?usp=sharing' },
    { icon: <FaGithub />, text: 'Github', link: 'https://github.com/Akshat-Pandey16' },
    { icon: <FaLinkedin />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/akshat16pandey/' },
    { icon: <FaEnvelope />, text: 'Email', link: 'mailto:akshat16pandey@gmail.com' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="contact" style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`flex flex-col items-center justify-center min-h-screen border-y-2 ${border} relative ${background}`}>
      <Navbar />
      <div style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`flex flex-box flex-col justify-center items-center absolute top-24`}>
        <h1 style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`b text-8xl mb-4 ${headingText}`}>Get in Touch!</h1>
        <p style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`sb text-3xl text-center ${subheadingText}`}>
          Ask me why I love rounded corners so much!
        </p>
      </div>

      <div className={`flex flex-box justify-center items-center absolute top-0 left-0 h-1/3`}>
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20" />
      </div>

      <div className={`flex flex-box justify-center items-center absolute bottom-0 right-0 h-4/5`}>
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20" />
      </div>

      <div className={`flex flex-box justify-center items-center absolute bottom-0 left-0 h-1/3`}>
        <img src={Img2} alt="Img" className="w-full h-full object-cover z-20" />
      </div>

      <div className={`flex flex-box justify-center items-center absolute top-0 right-0 h-1/3`}>
        <img src={Img3} alt="Img" className="w-full h-full object-cover z-20" />
      </div>

      <div style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`flex rounded-3xl border-4 ${border} ${boxBackground} p-4 flex-col absolute bottom-8`}>
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
              style={{
                transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease ',
              }} className={`w-16 h-16 ${underboxBackground} ${border} ${shadow} rounded-xl mr-2 flex items-center justify-center overflow-hidden transition-transform transform-gpu hover:scale-110 duration:500 delay-400 ${
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