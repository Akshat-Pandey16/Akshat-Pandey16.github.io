// Internships.tsx
import React, { useState } from 'react';
import Img from '../assets/internships/Internships.svg';
import Img1 from '../assets/internships/Internships1.svg';
import SAIL from '../assets/internships/SAIL.png';
import DRDO from '../assets/internships/DRDO.png';
import Navbar from '../components/Navbar';

interface InternshipCardProps {
  image: string;
  title: string;
  role: string;
  moreInfo: string;
  onMoreInfoClick: () => void;
}
// ... (other imports and code)

const InternshipCard: React.FC<InternshipCardProps> = ({ image, title, role, moreInfo, onMoreInfoClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(96);

  return (
    <div
      className={`group relative z-10 h-44 w-${cardWidth} bg-green-100 border-4 border-green-600 top-20 transform shadow-lg rounded-2xl p-2 flex items-center mb-4 gap-4 transition-all duration-300`}
      onMouseEnter={() => {
        setIsHovered(true);
        setCardWidth(120);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCardWidth(96);
      }}
    >
      {/* Image */}
      <img src={image} alt="Your Alt Text" className="w-1/ h-full object-cover rounded-md" />

      {/* Texts on the right side of the image */}
      <div className="flex flex-col ml-4 w-2/3">
        <div className="text-xl font-bold text-gray-600">{title}</div>
        <div className="text-lg text-gray-600">{role}</div>
      </div>

      {isHovered && (
        <button
          onClick={onMoreInfoClick}
          className={`absolute right-4 top-7 transform -translate-y-1/2 bg-green-200 text-green-800 px-4 py-2 rounded-full opacity-100 transition-opacity duration-500 delay-1000`}
        >
          {moreInfo} <span className="ml-1">&#x2192;</span>
        </button>
      )}
    </div>
  );
};

const Internships: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleMoreInfoClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div id="internships" className="flex flex-col border-y-2 border-green-300 items-center justify-center min-h-screen bg-gray-950 relative">
      <Navbar />
      <div className="flex flex-box justify-center items-center absolute top-16 left-24">
        <h1 className="b text-emerald-400 text-8xl mt-10">Internships.</h1>
      </div>
      <div className='flex flex-box justify-center items-center absolute z-50 top-24 right-72 mr-24 max-w-[500px]'>
        <p className="sb text-white text-2xl mt-8">
          Have a look at the organisations that found me worthy enough to work for them!
        </p>
      </div>

      {/* Internship Cards */}
      <InternshipCard
        image={SAIL}
        title="Steel Authority of India Limited"
        role="Flutter Developer Intern"
        moreInfo="Additional Info 1"
        onMoreInfoClick={handleMoreInfoClick}
      />

      <InternshipCard
        image={DRDO}
        title="Defence Research and Development Organisation"
        role="Research and Development Intern"
        moreInfo="Additional Info 2"
        onMoreInfoClick={handleMoreInfoClick}
      />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-green-100 border-4 border-green-600 p-8 rounded-2xl shadow-md shadow-green-500 text-gray-800">
            <p>This is an example pop-up window content.</p>
            <button onClick={handleClosePopup} className="bg-red-400 text-white px-4 py-2 rounded-full mt-4">
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-box justify-center items-center absolute bottom-0 left-0 h-2/3">
        <img src={Img} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
      <div className="flex flex-box justify-center items-center absolute top-0 right-0 h-2/6">
        <img src={Img1} alt="Img" className="w-full h-full object-cover z-20 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Internships;
