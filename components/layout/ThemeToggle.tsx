'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 transition-all duration-200 focus:outline-none"
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {/* Sun icon — shown in dark mode */}
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
        }`}
      >
        <i className="fa-solid fa-sun text-[17px] text-yellow-400" />
      </span>

      {/* Moon icon — shown in light mode */}
      <span
        className={`absolute transition-all duration-300 ${
          !isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
        }`}
      >
        <i className="fa-solid fa-moon text-[17px] text-blue-400" />
      </span>
    </button>
  );
}
