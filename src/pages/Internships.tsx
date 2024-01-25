import React, { useState } from 'react';
import Img from '../assets/internships/Internships.svg';
import Img1 from '../assets/internships/Internships1.svg';
import SAIL from '../assets/internships/SAIL.png';
import DRDO from '../assets/internships/DRDO.png';
import Navbar from '../components/Navbar';

const Internships: React.FC = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
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
        <h1 className="text-white text-8xl mt-10">Internships.</h1>
      </div>
      <div className="flex absolute justify-start items-start bottom-24 gap-36 right-48 mr-3">
        {/* First Box */}
        <div
          className={`group relative z-10 h-96 w-80 bg-green-100 border-4 border-green-600 shadow-green-300 transform shadow-lg rounded-2xl p-4 transition-all duration-700 delay-200 hover:ml-[-10px] hover:w-96 hover:z-20 hover:bg-opacity-45`}
          onMouseOver={() => setShowMoreInfo(true)}
          onMouseOut={() => setShowMoreInfo(false)}
        >
          <img src={SAIL} alt="sail logo" className="w-full h-full object-center rounded-md transition-all duration-300 group-hover:scale-75" />
          <div
            className={`absolute inset-0 flex flex-col pt-10 pb-10 pl-2 pr-2 items-center justify-between text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200`}
          >
            <div className="text-3xl mb-2 text-center">STEEL AUTHORITY OF INDIA LIMITED</div>
            <div className="text-4xl text-center">Flutter Developer Intern</div>
            {showMoreInfo && (
              <button
                onClick={handleMoreInfoClick}
                className={`absolute bottom-4 left-1/2 mb-40 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded-full opacity-100 transition-opacity duration-500 delay-1000`}
              >
                More Info <span className="ml-1">&#x2192;</span>
              </button>
            )}
          </div>
        </div>
        <div
          className={`group relative z-10 h-96 w-80 bg-green-100 border-4 border-green-600 shadow-green-300 transform shadow-lg rounded-2xl p-4 transition-all duration-700 delay-200 hover:ml-[-10px] hover:w-96 hover:z-20 hover:bg-opacity-45`}
          onMouseOver={() => setShowMoreInfo(true)}
          onMouseOut={() => setShowMoreInfo(false)}
        >
          <img src={DRDO} alt="sail logo" className="w-full h-full object-center rounded-md transition-all duration-300 group-hover:scale-75 group-hover:opacity-25" />
          <div
            className={`absolute inset-0 flex flex-col pt-10 pb-10 pl-2 pr-2 items-center justify-between text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200`}
          >
            <div className="text-3xl mb-2 text-center">DEFENCE RESEARCH AND DEVELOPMENT ORGANISATION</div>
            <div className="text-4xl text-center">Research and Development Intern</div>
            {showMoreInfo && (
              <button
                onClick={handleMoreInfoClick}
                className={`absolute bottom-4 left-1/2 mb-40 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 rounded-full opacity-100 transition-opacity duration-500 delay-1000`}
              >
                More Info <span className="ml-1">&#x2192;</span>
              </button>
            )}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-green-100 border-4 border-green-600 p-8 rounded-2xl shadow-md shadow-green-500">
            <p>Pop-up window content goes here</p>
            <button onClick={handleClosePopup} className="bg-red-500 text-white px-4 py-2 rounded-full mt-4">
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
