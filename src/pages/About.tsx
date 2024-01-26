// About.tsx
import React from 'react';
import Img from '../assets/Aboutus.svg';
import Img1 from '../assets/Aboutus1.svg';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center min-h-screen border-y-2 border-green-300 bg-gray-950 relative">
      <Navbar />
      <div className='flex flex-box flex-col justify-center items-center absolute bottom-24 left-40'>
        <h1 className="b text-white text-8xl mb-4">About Me!</h1>
        <p className="text-gray-300 text-2xl text-center">
          See what I cherry picked about myself!
        </p>
      </div>
      <div className='flex flex-box justify-center items-center absolute top-24 left-32 mr-24 max-w-[900px]'>
        <p className="text-white text-2xl mt-8">
          Lorem ipsum dolor sit amet cons... Got you. I am a 22 year old who is currently pursuing his Bachelors in Computer Science and Engineering. I am a self + teacher taught developer who is always looking for new opportunities to learn and grow. I am a quick learner and a team player and other cherry picked words. 
          I am probably a good developer and not so good designer. I have been involved in various projects and hackathons, winning one of these, and leading in many, to give a  hint of leadership to the reader. I dont shy away to make use of AI tools to take help and accomplish task. I hope this single page website would be a testement to my skills and abilities. Enjoy your stay here!
          P.S. We can talk about my wierd font choice and color scheme in the interviews.
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
