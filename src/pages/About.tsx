// About.tsx
import React from 'react';
import Img from '../assets/Aboutus.svg';
import Img1 from '../assets/Aboutus1.svg';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../components/DarkMode';

const About: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  const aboutContainerClass = `flex flex-col items-center justify-center min-h-screen border-y-2 border-green-300 relative ${
    isDarkMode ? 'bg-gray-950' : 'bg-white'
  }`;

  const aboutContentClass = `z-50 flex flex-box justify-center items-center rounded-2xl border-2 pr-10 pl-10 pb-10 absolute top-20 left-20 max-w-[800px] ${
    isDarkMode ? 'bg-emerald-800 border-emerald-300 text-white' : 'bg-white border-gray-300 text-gray-800'
  }`;

  const aboutTextClass = `text-2xl mt-8 text-justify ${isDarkMode ? 'text-white' : 'text-gray-700'}`;

  return (
    <div id="about" className={aboutContainerClass}>
      <Navbar />
      <div className='flex flex-box flex-col justify-center items-center absolute top-36 right-20'>
        <h1 className={`b text-emerald-400 text-8xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          About Me!
        </h1>
        <p className={`sb text-lg text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          See what I cherry-picked about myself!
        </p>
      </div>
      <div className={aboutContentClass}>
        <p className={aboutTextClass}>
        Lorem ipsum dolor sit amet cons... Got you. I am a 22 year old who is currently pursuing his Bachelors in Computer Science and Engineering at Bhilai Institute of Technology, Durg. I am a self + teacher taught developer who is always looking for new opportunities to learn and grow. I am a quick learner and a team player and other cherry picked words. 
          I am probably a good developer and not so good designer. I have been involved in various projects and hackathons, winning one of these, and leading in many, to give a  hint of leadership to the reader. I dont shy away to make use of AI tools to take help and accomplish task. <br/><br/>I hope this single page website would be a testement to my skills and abilities. Enjoy your stay here!<br/> <br/>
          <br/>P.S. We can talk about my wierd font choice and color scheme in the interviews.
       
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
