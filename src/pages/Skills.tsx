import React, { useState } from 'react';
import Img from '../assets/skills/Skills.svg';
import Img1 from '../assets/skills/Skills1.svg';
import Navbar from '../components/Navbar';
import cpp from '../assets/skills/cpp.png';
import Python from '../assets/skills/python.png'
import linux from '../assets/skills/linux.png';
import flutter from '../assets/skills/flutter.png';
import sql from '../assets/skills/sql.png';
import react from '../assets/skills/react.png';
import fastapi from '../assets/skills/fastapi.png';

const commonBoxStyle = "bg-green-100 rounded-3xl h-48 w-48 m-20 border-4 border-green-500 hover:opacity-80 transition-all shadow-md shadow-green-400 hover:scale-110 duration-500 relative overflow-hidden";
const commonImageStyle = "w-full h-full object-fit rounded-3xl p-3";
const hiddenTextStyle = "absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 text-gray-950";

const Skills: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const texts = [
    "C/C++",
    "Python",
    "Linux/BASH",
    "Flutter",
    "SQL",
    "React",
    "FastAPI",
  ];

  const images = [
    cpp,
    Python,
    linux,
    flutter,
    sql,
    react,
    fastapi,
  ];

  const handleHover = (boxNumber: number) => {
    setHoveredBox(boxNumber);
  };

  const handleHoverOut = () => {
    setHoveredBox(null);
  };

  return (
    <div id="skills" className="flex flex-col items-center justify-center min-h-screen bg-gray-950 relative">
      <Navbar />

      {/* First Row */}
      <div className="z-50 flex flex-box justify-center items-center absolute top-10">
        <div className="flex">
          {[1, 2, 3, 4].map((boxNumber) => (
            <div
              key={boxNumber}
              className={commonBoxStyle}
              onMouseEnter={() => handleHover(boxNumber)}
              onMouseLeave={handleHoverOut}
            >
              <img src={images[boxNumber - 1]} alt={`CommonImage${boxNumber}`} className={commonImageStyle} />
              <div className={hiddenTextStyle} style={{ opacity: hoveredBox === boxNumber ? 1 : 0 }}>
                {texts[boxNumber - 1]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-box justify-center items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500">
        <h1 className="text-white text-7xl mt-10">Skills.</h1>
      </div>

      {/* Second Row */}
      <div className="flex flex-box justify-center items-center absolute mt-14 top-1/3 left-1/2 transform -translate-x-1/2 transition-all duration-500">
        <div className="flex">
          {[5, 6, 7].map((boxNumber) => (
            <div
              key={boxNumber}
              className={commonBoxStyle}
              onMouseEnter={() => handleHover(boxNumber)}
              onMouseLeave={handleHoverOut}
            >
              <img src={images[boxNumber - 1]} alt={`CommonImage${boxNumber}`} className={commonImageStyle} />
              <div className={hiddenTextStyle} style={{ opacity: hoveredBox === boxNumber ? 1 : 0 }}>
                {texts[boxNumber - 1]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Images */}
      <div className="flex flex-box justify-center items-center absolute top-0 right-80 mr-52">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 left-0 h-1/2">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Skills;
