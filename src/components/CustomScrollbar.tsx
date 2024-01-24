// CustomScrollbar.tsx
import React, { useEffect, useState } from 'react';

const CustomScrollbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <style>
      {`
        /* Customize scrollbar styles */
        ::-webkit-scrollbar {
          width: 12px;
          display: ${scrolling ? 'block' : 'none'};
        }

        ::-webkit-scrollbar-thumb {
          background-color: #8aff8a; /* Change the color as needed */
          border-radius: 6px;
        }

        ::-webkit-scrollbar-track {
          background-color: #f1f1f1;
          border-radius: 6px;
        }

        /* For Firefox scrollbar */
        scrollbar-width: thin;
        scrollbar-color: ${scrolling ? '#8aff8a' : 'transparent'} #f1f1f1;
      `}
    </style>
  );
};

export default CustomScrollbar;
