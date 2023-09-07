'use client';

import { useEffect, useState } from 'react';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function DarkModeButton() {
  const [showDarkModeButton, setShowDarkModeButton] = useState<boolean>();

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setShowDarkModeButton(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleMode = () => {
    if (localStorage.theme == 'dark') {
      localStorage.theme = 'light';
      setShowDarkModeButton(true)
    } else {
      localStorage.theme = 'dark';
      setShowDarkModeButton(false)
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <button
      className='btn-circle btn-ghost btn mr-1 duration-150 ease-in hover:scale-105'
      onClick={toggleMode}
    >
      {showDarkModeButton ? <DarkModeIcon /> : <WbSunnyIcon />}
    </button>
  );
}
