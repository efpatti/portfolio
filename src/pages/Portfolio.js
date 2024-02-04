import React from 'react';
import { useTheme } from '../ThemeContext';
const Portfolio = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="max-w-lg mx-auto" id="portfolio">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Portfólio</h1>
          <p className="text-sm font-normal text-slate-600">Trabalhos mais recentes</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
