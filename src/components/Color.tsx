export const getNavbarColors = (isDarkMode: boolean) => {
  return {
    text: isDarkMode ? 'text-white' : 'text-gray-800',
    pillBackground: isDarkMode ? 'bg-emerald-600' : 'bg-emerald-300',
    pillHoverBackground: 'hover:bg-white hover:scale-105 hover:text-green-300',
    pillShadow: isDarkMode ? 'shadow-green-500' : 'shadow-green-500',
    pillBorder: isDarkMode ? 'border-4 border-green-200' : 'border-4 border-green-600',
  };
};

// Home.tsx
export const getHomeColors = (isDarkMode: boolean) => {
       return {
         border: isDarkMode ? 'border-green-600' : 'border-green-300',
         background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
         text: isDarkMode ? 'text-gray-700' : 'text-gray-800',
         accentText: isDarkMode ? 'text-emerald-300' : 'text-green-500',
         hoverBackground: 'hover:bg-white',
         hoverText: 'hover:text-green-400',
         hoverBorder: isDarkMode ? 'hover:border-white' : 'hover:border-green-600',
         shadow: isDarkMode ? 'shadow-md shadow-green-600' : 'shadow-emerald-500',
         buttonBorder: isDarkMode ? 'border-4 border-green-100' : 'border-4 border-green-600',
         buttonBackground: isDarkMode ? 'bg-green-100' : 'bg-emerald-300',
       };
     };
     
// About.tsx
export const getAboutColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-300' : 'border-gray-300',
    background: isDarkMode ? 'bg-zinc-900' : 'bg-emerald-50',
    contentBackground: isDarkMode ? 'bg-emerald-800' : 'bg-white',
    contentBorder: isDarkMode ? 'border-emerald-300' : 'border-gray-300',
    contentText: isDarkMode ? 'text-white' : 'text-gray-800',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    subheadingText: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textColor: isDarkMode ? 'text-white' : 'text-gray-700',
  };
};

// Internship.tsx
export const getInternshipsColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-emerald-700' : 'border-green-100',
    background: isDarkMode ? 'bg-gray-950' : 'bg-gray-50',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    cardBackground: isDarkMode ? 'bg-green-100' : 'bg-emerald-200',
    cardBorder: isDarkMode ? 'border-4 border-emerald-400' : 'border-4 border-green-600',
    cardText: isDarkMode ? 'text-gray-700' : 'text-gray-800',
    shadow: isDarkMode ? 'shadow-md shadow-emerald-500' : 'shadow md shadow-green-500',
    popupBackground: isDarkMode ? 'bg-green-100' : 'bg-gray-50',
    popupBorder: isDarkMode ? 'border-4 border-green-700' : 'border-4 border-green-100',
    popupShadow: isDarkMode ? 'shadow-green-500' : 'shadow-green-200',
    subHeadingText: isDarkMode ? 'text-green-50' : 'text-gray-800',
    closeButtonBackground: 'bg-red-400',
    closeButtonHover: 'hover:bg-red-600',
    hoverBackground: isDarkMode ? 'bg-teal-200' : 'bg-gray-200',
    hoverText: isDarkMode ? 'text-green-800' : 'text-gray-800',
  };
};

export const getProjectsColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-green-600' : 'border-blue-600',
    background: isDarkMode ? 'bg-gray-950' : 'bg-gray-50',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    contentText: isDarkMode ? 'text-white' : 'text-gray-800',
    cardBackground: isDarkMode ? 'bg-emerald-700' : 'bg-white',
    cardBorder: isDarkMode ? 'border-emerald-300' : 'border-blue-200',
    shadow: isDarkMode ? 'shadow-green-500' : 'shadow-blue-500',
  };
};

export const getSkillsColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-emerald-500' : 'border-green-500',
    background: isDarkMode ? 'bg-gray-950' : 'bg-white',
    boxbackground: isDarkMode ? 'bg-green-100' : 'bg-emerald-100',
    text: isDarkMode ? 'text-emerald-300' : 'text-emerald-400',
    hoverBackground: isDarkMode ? 'bg-emerald-700' : 'bg-emerald-300',
    hoverText: isDarkMode ? 'text-white' : 'text-gray-700',
  };
};

export const getHireColors = (isDarkMode: boolean) => {
  return {
    border: isDarkMode ? 'border-emerald-300' : 'border-emerald-200',
    background: isDarkMode ? 'bg-emerald-900' : 'bg-emerald-800',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    subheadingText: isDarkMode ? 'text-gray-300' : 'text-gray-800',
    contentBackground: isDarkMode ? 'bg-gray-950' : 'bg-white',
    contentText: isDarkMode ? 'text-white' : 'text-gray-800',
  };
};

export const getContactColors = (isDarkMode: boolean) => {
  return {
    border: 'border-emerald-300',
    background: isDarkMode ? 'bg-gray-950' : 'bg-white',
    headingText: isDarkMode ? 'text-emerald-300' : 'text-gray-800',
    subheadingText: isDarkMode ? 'text-gray-300' : 'text-gray-800',
    boxBackground: isDarkMode ? 'bg-green-200' : 'bg-emerald-100',
    boxText: isDarkMode ? 'text-gray-600' : 'text-gray-800',
    hoverText: isDarkMode ? 'text-emerald-500' : 'text-gray-600',
    underboxBackground: isDarkMode ? 'bg-emerald-300' : 'bg-emerald-200',
    shadow: 'shadow-md  shadow-emerald-800',
  };
};

