// PageGradient.tsx
import React from 'react';

const PageGradient: React.FC = () => {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-black via-black to-transparent z-30"></div>
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black via-black to-transparent z-30"></div>
    </>
  );
};

export default PageGradient;
