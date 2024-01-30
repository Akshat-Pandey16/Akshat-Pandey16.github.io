export const getNavbarColors = (isDarkMode: boolean) => {
  return {
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    pillBackground: isDarkMode ? 'bg-emerald-600' : 'bg-emerald-300',
    pillHoverBackground: 'hover:bg-white hover:scale-105 hover:text-green-300 hover:border-white',
    pillShadow: isDarkMode ? 'shadow-inner shadow-green-500' : 'shadow-inner shadow-slate-400',
    pillBorder: isDarkMode ? 'border-4 border-green-200' : 'border-4 border-green-600',
  };
};

// Home.tsx
export const getHomeColors = (isDarkMode: boolean) => {
       return {
         border: isDarkMode ? 'border-green-300' : 'border-emerald-400',
         background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
         text: isDarkMode ? 'text-gray-700' : 'text-gray-800',
         accentText: isDarkMode ? 'text-emerald-300' : 'text-green-400',
         hoverBackground: 'hover:bg-white',
         hoverText: 'hover:text-green-400',
         hoverBorder: isDarkMode ? 'hover:border-white' : 'hover:border-white',
         shadow: isDarkMode ? 'shadow-md shadow-green-600' : 'shadow-md shadow-emerald-700',
         buttonBorder: isDarkMode ? 'border-4 border-green-200' : 'border-4 border-emerald-200',
         buttonBackground: isDarkMode ? 'bg-green-100' : 'bg-emerald-200',
       };
     };
     
// About.tsx
export const getAboutColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-300' : 'border-emerald-400',
    background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
    contentBackground: isDarkMode ? 'bg-emerald-800' : 'bg-emerald-100',
    contentBorder: isDarkMode ? 'border-emerald-300' : 'border-emerald-300',
    contentText: isDarkMode ? 'text-white' : 'text-gray-800',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    subheadingText: isDarkMode ? 'text-gray-300' : 'text-emerald-600',
    textColor: isDarkMode ? 'text-white' : 'text-gray-700',
    shadow: isDarkMode ? 'shadow-inner shadow-green-500' : 'shadow-inner shadow-emerald-500',
  };
};

// Internship.tsx
export const getInternshipsColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-300' : 'border-emerald-400',
    background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    cardBackground: isDarkMode ? 'bg-green-100' : 'bg-emerald-100',
    cardBorder: isDarkMode ? 'border-4 border-emerald-400' : 'border-4 border-green-600',
    cardText: isDarkMode ? 'text-gray-700' : 'text-gray-800',
    shadow: isDarkMode ? 'shadow-md shadow-emerald-500' : 'shadow-md shadow-green-500',
    popupBackground: isDarkMode ? 'bg-green-100' : 'bg-emerald-50',
    popupBorder: isDarkMode ? 'border-4 border-green-100' : 'border-4 border-green-100',
    popupShadow: isDarkMode ? 'shadow-green-500' : 'shadow-green-200',
    subHeadingText: isDarkMode ? 'text-gray-300' : 'text-emerald-600',
    closeButtonBackground: 'bg-red-400',
    closeButtonHover: 'hover:bg-red-600',
    hoverBackground: isDarkMode ? 'bg-teal-200' : 'bg-gray-200',
    hoverText: isDarkMode ? 'text-green-800' : 'text-gray-800',
  };
};

export const getProjectsColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-300' : 'border-emerald-400',
    background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    cardBackground: isDarkMode ? 'bg-emerald-700' : 'bg-white',
    cardBorder: isDarkMode ? 'border-emerald-300' : 'border-emerald-200',
    shadow: isDarkMode ? 'shadow-green-500' : 'shadow-gray-500',
    contentText: isDarkMode ? 'text-gray-900' : 'text-gray-800',
  };
};

export const getSkillsColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-300' : 'border-emerald-400',
    background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
    boxbackground: isDarkMode ? 'bg-green-100' : 'bg-emerald-100',
    text: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    hoverBackground: isDarkMode ? 'bg-emerald-700' : 'bg-emerald-300',
    hoverText: isDarkMode ? 'text-white' : 'text-gray-700',
  };
};

export const getHireColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-300' : 'border-emerald-400',
    background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    subheadingText: isDarkMode ? 'text-gray-300' : 'text-emerald-600',
    contentBackground: isDarkMode ? 'bg-emerald-100' : 'bg-emerald-100',
    contentText: isDarkMode ? 'text-gray-900' : 'text-gray-800',
    contentborder: isDarkMode ? 'border-emerald-200' : 'border-emerald-200',
    shadow: isDarkMode ? 'shadow-inner shadow-green-500' : 'shadow-inner shadow-emerald-500',
  };
};

export const getContactColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-300' : 'border-emerald-400',
    background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    subheadingText: isDarkMode ? 'text-gray-300' : 'text-emerald-600',
    boxBackground: isDarkMode ? 'bg-green-200' : 'bg-emerald-100',
    boxText: isDarkMode ? 'text-gray-600' : 'text-gray-800',
    hoverText: isDarkMode ? 'text-emerald-500' : 'text-emerald-400',
    underboxBackground: isDarkMode ? 'bg-emerald-300' : 'bg-emerald-200',
    shadow: 'shadow-inner  shadow-emerald-800',
  };
};

