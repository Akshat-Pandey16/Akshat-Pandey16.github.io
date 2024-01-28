// About.tsx
import React from 'react';
import Img from '../assets/hire.svg';
import Img1 from '../assets/hire1.svg';
import Navbar from '../components/Navbar';

const Hire: React.FC = () => {
  return (
    <div id="hireme" className="flex flex-col items-center justify-center min-h-screen border-y-2 border-green-300 bg-gray-950 relative">
      <Navbar />
      <div className='flex flex-box flex-col justify-center items-center absolute top-24'>
        <h1 className="b text-emerald-400 text-8xl mb-4">Why Hire Me?</h1>
        <p className="sb text-gray-300 text-3xl text-center">
          I might be a good fit for your team!
        </p>
      </div>
      <div className='rounded-2xl bg-emerald-900 border-emerald-300 border-2 p-4 flex flex-box justify-center items-center absolute bottom-24 right-24 max-w-[900px]'>
        <p className="text-white text-3xl text-justify">
          This complete SPA (Single Page Application) is built by me on React + Typescript, which I learned as I built this website, along with Tailwindcss. Also learned figma to design this website. So that must give you a brief description of my ability to learn new technology as and when needed or my personal and buisness growth. 
          Yes this paragraph is shifted to right and I am not sure why I did that. But I am sure I can shift your buisness to the right direction! <br/>(This line was definitely not written by ChatGPT)
        </p>
      </div>
      <div className="flex flex-box justify-center items-center absolute top-0 left-0 h-2/5">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 left-0 h-4/5">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
    </div>
  );
};

export default Hire;
