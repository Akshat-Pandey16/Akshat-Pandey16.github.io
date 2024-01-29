import React, { useState } from 'react';
import Img from '../assets/skills/Skills.svg';
import Img1 from '../assets/skills/Skills1.svg';
import Navbar from '../components/Navbar';
import cpp from '../assets/skills/cpp.png';
import python from '../assets/skills/python.png';
import linux from '../assets/skills/linux.png';
import flutter from '../assets/skills/flutter.png';
import sql from '../assets/skills/sql.png';
import react from '../assets/skills/react.png';
import fastapi from '../assets/skills/fastapi.png';
import django from '../assets/skills/django.png';
import gcp from '../assets/skills/gcp.png';
import { useDarkMode } from '../components/DarkMode';
import { getSkillsColors } from '../components/Color';

const commonBoxStyle =
  "rounded-3xl h-40 w-40 m-10 border-4 hover:-translate-y-1/4 transition-all shadow-md hover:scale-110 duration-500 relative overflow-hidden";

const commonImageStyle = "w-full h-full object-fit rounded-3xl p-2";

const Skills: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  const { isDarkMode } = useDarkMode();

  const {
    border,
    background,
    text,
    hoverBackground,
    hoverText,
    boxbackground,
  } = getSkillsColors(isDarkMode);

  const texts = [
    'C/C++',
    'Python',
    'Linux/Bash',
    'Flutter',
    'SQL',
    'React',
    'FastAPI',
    'Django',
    'GCP',
  ];

  const handleBoxHover = (boxNumber: number) => {
    setHoveredBox(boxNumber);
  };

  const handleBoxLeave = () => {
    setHoveredBox(null);
  };

  const images = [cpp, python, linux, flutter, sql, react, fastapi, django, gcp];

  return (
    <div id="skills" className={`flex flex-col border-y-2 ${border} items-center justify-center min-h-screen relative ${background}`} style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }}>
      <Navbar />

      {/* First Row */}
      <div className="z-50 flex flex-box justify-center items-center absolute top-20">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((boxNumber) => (
            <div
              key={boxNumber}
              className={`${commonBoxStyle} ${boxbackground} ${border}`}
              onMouseEnter={() => handleBoxHover(boxNumber)}
              onMouseLeave={handleBoxLeave}
            >
              <img src={images[boxNumber - 1]} alt={`CommonImage${boxNumber}`} className={commonImageStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className={`z-50 flex flex-box justify-center items-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${text}`} style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }}>
        <h1 className="b text-7xl">Skills.</h1>
      </div>

      {/* Second Row */}
      <div className="z-50 flex flex-box justify-center items-center absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-500">
        <div className="flex">
          {[6, 7, 8, 9].map((boxNumber) => (
            <div
              key={boxNumber}
              className={`${commonBoxStyle} ${boxbackground} ${border}`}
              onMouseEnter={() => handleBoxHover(boxNumber)}
              onMouseLeave={handleBoxLeave}
            >
              <img src={images[boxNumber - 1]} alt={`CommonImage${boxNumber}`} className={commonImageStyle} />
            </div>
          ))}
        </div>
      </div>

      {/* Display Text on Hover */}
      {hoveredBox !== null && (
        <div className={`z-50 bottom-10 absolute text-2xl text-center ${hoverText}`}>
          <p className={`${hoverBackground} p-2 rounded-md`}>{texts[hoveredBox - 1]}</p>
        </div>
      )}

      {/* Background Images */}
      <div className="flex flex-box justify-center items-center absolute top-0 right-80 mr-52">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 left-0 h-3/5">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Skills;
