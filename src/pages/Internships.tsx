import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import LIntern from '../assets/Light/Internships.webp';
import DIntern from '../assets/Dark/Internships.webp';
import LIntern1 from '../assets/Light/Internships1.webp';
import DIntern1 from '../assets/Dark/Internships1.webp';
import SAIL from '../assets/internships/SAIL.png';
import DRDO from '../assets/internships/DRDO.png';
import { useDarkMode } from '../components/DarkMode';
import { getInternshipsColors } from '../components/Color';

interface InternshipCardProps {
  image: string;
  title: string;
  role: string;
  moreInfo: string;
  popupContent: PopupContentProps;
  onMoreInfoClick: (content: PopupContentProps) => void;
}

interface PopupContentProps {
  text: string;
  imageUrl: string;
  role: string;
  description: string;
  skill: string;
  githubLink?: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  image,
  title,
  role,
  moreInfo,
  popupContent,
  onMoreInfoClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(96);
  const { isDarkMode } = useDarkMode();

  const {
    cardBackground,
    cardBorder,
    hoverBackground,
    shadow,
    hoverText,
    cardText,
  } = getInternshipsColors(isDarkMode);

  return (
    <div
      className={`group relative z-10 h-44 w-${cardWidth} ${cardBackground} ${cardBorder} ${shadow} top-24 transform shadow-lg rounded-2xl p-2 flex items-center mb-4 gap-3 transition-all duration-300`}
      onMouseEnter={() => {
        setIsHovered(true);
        setCardWidth(120);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCardWidth(96);
      }}
    >
      <img src={image} alt="Your Alt Text" className="w-1/ h-full object-cover rounded-md" loading='lazy' />

      <div className={`flex flex-col ml-4 w-2/3 ${cardText}`} style={{
        transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
      }}>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-lg">{role}</div>
      </div>

      {isHovered && (
        <button
          onClick={() => onMoreInfoClick(popupContent)}
          className={`absolute right-4 top-7 transform -translate-y-1/2 ${hoverBackground} ${hoverText} px-4 py-2 rounded-full opacity-100 transition-opacity duration-500 delay-1000`}
          style={{
            transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
          }}
        >
          {moreInfo} <span className="ml-1">&#x2192;</span>
        </button>
      )}
    </div>
  );
};

const transitionStyles = {
  transition: 'background 0.5s ease, color 0.5s ease, border 0.5s ease',
};

const Internships: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<PopupContentProps | null>(null);
  const { isDarkMode } = useDarkMode();

  const {
    border,
    background,
    headingText,
    subHeadingText,
    shadow,
    popupBackground,
    popupBorder,
    closeButtonHover,
  } = getInternshipsColors(isDarkMode);

  const handleMoreInfoClick = (content: PopupContentProps) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupContent(null);
  };

  return (
    <div
      id="internships"
      className={`flex flex-col border-y-2 ${border} items-center justify-center min-h-screen ${background} relative`} style={transitionStyles}>
      <div className={`flex flex-box justify-center items-center absolute top-16 left-24`}>
        <h1 className={`b ${headingText} text-8xl mt-10`}>Internships.</h1>
      </div>
      <div className={`flex flex-box justify-center items-center absolute z-50 top-24 right-72 mr-24 max-w-[500px]`}>
        <p className={`sb ${subHeadingText} text-2xl mt-8`}>
          Have a look at the organisations that found me worthy enough to work for them!
        </p>
      </div>

      <div className="flex flex-col items-center">
        <InternshipCard
          image={SAIL}
          title="Steel Authority of India Limited"
          role="Flutter Developer Intern"
          moreInfo="Additional Info 1"
          popupContent={{
            text: "Steel Authority of India Limited",
            imageUrl: SAIL,
            skill: "Flutter, Node.js, OracleDB",
            role: "Flutter Developer Intern",
            description: `Led development of a cutting-edge mobile app with Flutter and Node.js, optimizing for iOS and Android. Integrated OracleDB for improved data access and efficiency, collaborating with diverse teams for success.`,
            githubLink: "https://github.com/your-username/sail-internship-project",
          }}
          onMoreInfoClick={handleMoreInfoClick}
        />

        <div className="ml-4 md:ml-96 lg:right-80">
          <InternshipCard
            image={DRDO}
            title="Defence Research and Development Organisation"
            role="Research and Development Intern"
            moreInfo="Additional Info 2"
            popupContent={{
              text: "Defence Research and Development Organisation",
              imageUrl: DRDO,
              role: "Research and Development Intern",
              skill: "Python, GIS",
              description: `
              Explored terrain using QGIS and Python, enhancing efficiency in identifying ridges and spurs from DEM data. Elevated geospatial insights and streamlined terrain assessment for improved outcomes.`,
              githubLink: "https://github.com/your-username/drdo-internship-project",
            }}
            onMoreInfoClick={handleMoreInfoClick}
          />
        </div>
      </div>

      {showPopup && (
        <div className={`fixed inset-0 flex items-center justify-center gap-5 ${popupBackground} bg-opacity-50 z-50`}>
          <div className={`bg-green-100 border-4 ${popupBorder} p-8 rounded-2xl ${shadow} flex`}>
            {popupContent?.imageUrl && (
              <div className="mr-4">
                <img src={popupContent.imageUrl} alt="Popup Image" className="w-1/ h-64 object-cover rounded-md" />
              </div>
            )}
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-bold">Organisation: {popupContent?.text}</p>
                <p className="font-semibold">Role: {popupContent?.role}</p>
                <p className="font-semibold">Skills: {popupContent?.skill}</p>
                <p>Description:</p>
                <p className="max-w-80 text-justify overflow-hidden">
                  {popupContent?.description}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <button onClick={handleClosePopup} className={`bg-red-400 text-white px-4 py-2 rounded-full ${closeButtonHover}`}>
                  Close
                </button>
              </div>
              {popupContent?.githubLink && (
                <div className="flex justify-center mt-2">
                  <a
                    href={popupContent.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-blue-500 text-white px-4 py-2 rounded-full ${closeButtonHover} flex items-center`}
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-box justify-center items-center absolute bottom-0 left-0 h-2/3">
        <img src={isDarkMode ? DIntern : LIntern } alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" loading='lazy'/>
      </div>
      <div className="flex flex-box justify-center items-center absolute top-0 right-0 h-2/6">
        <img src={isDarkMode ? DIntern1 : LIntern1 } alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" loading='lazy' />
      </div>
    </div>
  );
};

export default Internships;
