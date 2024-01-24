// About.tsx
import React from 'react';
import Img from '../assets/Aboutus.svg';
import Img1 from '../assets/Aboutus1.svg';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center min-h-screen border-y-2 border-green-300 bg-gray-950 relative">
      <Navbar />
      <div className='flex flex-box justify-center items-center absolute bottom-24 left-24'>
        <h1 className="text-white text-9xl">About Me.</h1>
      </div>
      <div className='flex flex-box justify-center items-center absolute top-24 left-24 mr-24 max-w-[700px]'>
        <p className="text-white text-4xl mt-14">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolore omnis magni assumenda optio atque,
          pariatur maiores quas consectetur adipisci placeat consequatur suscipit, at voluptas! Voluptatum maiores
          aspernatur inventore sunt?.
        </p>
      </div>

      <div className="flex flex-box justify-center items-center absolute bottom-0 right-0 h-2/3">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
      <div className="flex flex-box justify-center items-center absolute top-0 mr-24 pr-4 h-1/6">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
    </div>
  );
};

export default About;
