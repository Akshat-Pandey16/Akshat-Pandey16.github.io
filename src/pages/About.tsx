import React, { useEffect } from 'react';
import LAbout from '../assets/Light/About.webp';
import DAbout from '../assets/Dark/About.webp';
import LAbout1 from '../assets/Light/About1.webp';
import DAbout1 from '../assets/Dark/About1.webp';
import Navbar from '../components/Navbar';
import { useDarkMode } from '../components/DarkMode';
import { getAboutColors } from '../components/Color';

const About: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const {
    border,
    background,
    contentBackground,
    contentBorder,
    contentText,
    headingText,
    subheadingText,
    textColor,
    shadow,
  } = getAboutColors(isDarkMode);

  const aboutContainerClass = `flex flex-col items-center justify-center min-h-screen border-y-2 ${border} relative ${background}`;

  const aboutContentClass = `z-50 flex flex-box justify-center items-center rounded-2xl border-2 pr-10 pl-10 pb-10 absolute top-20 left-20 max-w-[800px] ${contentBackground} ${contentBorder} ${contentText}`;

  const aboutTextClass = `text-2xl mt-8 text-justify ${textColor}`;

  return (
    <div
      id="about"
      className={aboutContainerClass}
      style={{
        transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
      }}
    >
      <Navbar />

      <div className="flex flex-box flex-col justify-center items-center absolute top-36 right-20">
        <h1 className={`b ${headingText} text-8xl mb-4`}>
          About Me!
        </h1>
        <p className={`sb text-2xl text-center ${subheadingText}`}>
          See what I cherry-picked about myself!
        </p>
      </div>

      <div
        className={`${aboutContentClass} ${shadow}`}
        style={{
          transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
        }}
      >
        <p className={aboutTextClass}>
        Lorem ipsum dolor sit amet cons... Got you. I am a 22-year-old Backend Developer who is currently pursuing his Bachelors in Computer Science and Engineering at Bhilai Institute of Technology, Durg. I am a self + teacher taught developer who is always looking for new opportunities to learn and grow. I am a quick learner and a team player and other cherry-picked words.
          I am probably a good developer and not so good designer. I have been involved in various projects and hackathons, winning one of these, and leading in many, to give a hint of leadership to the reader. I don't shy away from making use of AI tools to take help and accomplish tasks. <br/><br/>I hope this single-page website would be a testament to my skills and abilities. Enjoy your stay here!<br/> <br/>
          <br/>P.S. We can talk about my weird font choice and color scheme in the interviews.
        </p>
      </div>

      <div className="flex flex-box justify-center items-center absolute bottom-0 right-0 h-2/3">
        <img src={isDarkMode ? DAbout : LAbout} alt="Img" className="w-full h-full object-cover z-20" loading='lazy' />
      </div>

      <div className="flex flex-box justify-center items-center absolute top-0 mr-24 pr-4 h-1/6">
        <img src={isDarkMode ? DAbout1 : LAbout1} alt="Img" className="w-full h-full object-cover z-20" loading='lazy'/>
      </div>
    </div>
  );
};

export default About;
