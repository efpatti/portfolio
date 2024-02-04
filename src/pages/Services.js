import React from 'react';
import { useTheme } from '../ThemeContext';
const Services = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="max-w-lg mx-auto" id="services">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Serviços</h1>
          <p className="text-sm font-normal text-slate-600">O que eu ofereço</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
