'use client';

import { useState } from 'react';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('data-theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      className='btn-circle btn-ghost btn mr-1 duration-150 ease-in hover:scale-105'
      onClick={toggleMode}
    >
      {!isDarkMode ? <ModeNightIcon /> : <WbSunnyIcon />}
    </button>
  );
}
