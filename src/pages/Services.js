import React from 'react';
import { useTheme } from '../ThemeContext';
import { FiCode, FiLayout, FiServer, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const servicesData = [
    {
      title: "Ui/Ux Designer",
    },
    {
      title: "Frontend",
    },
    {
      title: "Backend",
    }
  ];

  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="max-w-lg mx-auto" id="services">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Serviços</h1>
          <p className="text-sm font-normal text-slate-600">O que eu ofereço</p>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-8">
        {servicesData.map((item, index) => (
          <div key={index} className={`text-center rounded-lg p-6 shadow-md w-72 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="mb-4">
              {index === 0 && <FiLayout className="text-red-500 mx-auto" size={25} />}
              {index === 1 && <FiCode className="text-red-500 mx-auto" size={25} />}
              {index === 2 && <FiServer className="text-red-500 mx-auto" size={25} />}
            </div>
            <h2 className="text-xl font-medium mb-2">{item.title}</h2>
            <button className="mt-4 px-4 py-2 text-red-500 bg-transparent rounded-md hover:text-red-600 hover:cursor-pointer focus:outline-none focus:ring focus:border-red-300">
              Veja Mais
              <FiArrowRight className="inline ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
