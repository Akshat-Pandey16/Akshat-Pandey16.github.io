// About.tsx
import React from 'react';
import Img from '../assets/hire.svg';
import Img1 from '../assets/hire1.svg';
import Navbar from '../components/Navbar';

const Hire: React.FC = () => {
  return (
    <div id="hireme" className="flex flex-col items-center justify-center min-h-screen border-y-2 border-green-300 bg-gray-950 relative">
      <Navbar />
      <div className='flex flex-box justify-center items-center absolute top-36 right-40'>
        <h1 className="text-white text-9xl">Why Hire Me?</h1>
      </div>
      <div className='flex flex-box justify-center items-center absolute bottom-24 right-24 mr-24 max-w-[700px]'>
        <p className="text-white text-4xl mt-14">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolore omnis magni assumenda optio atque,
          pariatur maiores quas consectetur adipisci placeat consequatur suscipit, at voluptas! Voluptatum maiores
          aspernatur inventore sunt?.
        </p>
      </div>

      <div className="flex flex-box justify-center items-center absolute top-0 left-0 h-1/3">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
      <div className="flex flex-box justify-center items-center absolute bottom-0 left-0 h-4/5">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20" />
      </div>
    </div>
  );
};

export default Hire;
