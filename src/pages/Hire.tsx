import React from 'react';
import Img from '../assets/Hire.svg';
import Img1 from '../assets/Hire1.svg';
import Img2 from '../assets/Hire2.svg';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../components/DarkMode';
import { getHireColors } from '../components/Color';

const Hire: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  const {
    border,
    background,
    headingText,
    contentBackground,
    contentText,
    subheadingText,
    contentborder,
    shadow,
  } = getHireColors(isDarkMode);

  return (
    <div id="hireme" style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`flex flex-col items-center justify-center min-h-screen border-y-2 ${border} relative ${background}`}>
      <Navbar />
      <div className={`flex flex-box flex-col justify-center items-center absolute top-24 right-24`}>
        <h1 style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`b text-8xl mb-4 ${headingText}`}>Why Hire Me?</h1>
        <p style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`sb text-3xl text-center ${subheadingText}`}>
          I might be a good fit for your team!
        </p>
      </div>
      <div style={{
      transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
    }} className={`z-50 rounded-2xl ${contentBackground} ${contentborder} ${shadow} border-2 p-4 flex flex-box justify-center items-center absolute bottom-24 right-24 max-w-[900px]`}>
        <p className={`text-3xl text-justify ${contentText}`}>
          This complete SPA (Single Page Application) is built by me on React + Typescript, which I learned as I built this website, along with Tailwindcss. Also learned figma to design this website. So that must give you a brief description of my ability to learn new technology as and when needed or my personal and buisness growth. 
          Yes, this paragraph is shifted to the right and I am not sure why I did that. But I am sure I can shift your buisness in the right direction! <br/>(This line was definitely not written by ChatGPT)
        </p>
      </div>
      <div className="flex flex-box justify-center items-center absolute top-0 left-0 h-2/5">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 left-0 h-4/5">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 right-0 h-1/3">
        <img src={Img2} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
    </div>
  );
};

export default Hire;
