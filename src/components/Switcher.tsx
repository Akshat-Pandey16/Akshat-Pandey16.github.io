// Switcher.tsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from './DarkMode';

interface SwitcherProps {
  position: 'left' | 'center' | 'right';
}

const Switcher: React.FC<SwitcherProps> = ({ position }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const switcherPositionClass = () => {
    switch (position) {
      case 'center':
        return 'left-1/2 transform -translate-x-1/2';
      case 'right':
        return 'right-20';
      default:
        return 'left-20';
    }
  };

  return (
    <label className={`absolute top-5 ${switcherPositionClass()}`}>
      <div
        onClick={toggleDarkMode}
        className={`relative flex items-center justify-between w-20 h-9 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
          isDarkMode ? 'bg-gray-800' : 'bg-green-200'
        }`}
      >
        <div
          className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full transition-transform duration-300 ease-in-out transform"
          style={{ transform: isDarkMode ? 'translateX(100%)' : 'translateX(0)' }}
        >
          {isDarkMode ? <FaMoon className="text-gray-600" /> : <FaSun className="text-yellow-500" />}
        </div>
      </div>
    </label>
  );
};

export default Switcher;
