// ScrollListener.tsx
import React, { useEffect } from 'react';

interface ScrollListenerProps {
  onScroll: (show: boolean) => void;
}

const ScrollListener: React.FC<ScrollListenerProps> = ({ onScroll }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      onScroll(scrollPosition > windowHeight * 0.85);
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [onScroll]);
  return <></>;
};

export default ScrollListener;
