import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface SwitcherProps {
  position: 'left' | 'center' | 'right';
}

const Switcher: React.FC<SwitcherProps> = ({ position }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add dark mode specific logic here
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const switcherPositionClass = () => {
    switch (position) {
      case 'center':
        return 'left-1/2 transform -translate-x-1/2';
      case 'right':
        return 'right-20';
      default:
        return 'left-4';
    }
  };

  return (
    <label className={`absolute top-5 ${switcherPositionClass()}`}>
      <input
        type="checkbox"
        className="hidden"
        checked={darkMode}
        onChange={handleToggle}
      />
      <div className={`relative flex items-center justify-between w-20 h-9 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-800' : 'bg-green-200'}`}>
        <div className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full transition-transform duration-300 ease-in-out transform" style={{ transform: darkMode ? 'translateX(100%)' : 'translateX(0)' }}>
          {darkMode ? (
            <FaMoon className="text-gray-600" />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </div>
      </div>
    </label>
  );
};

export default Switcher;
