import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { FiCode, FiLayout, FiServer, FiArrowRight, FiX } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      title: 'Ui/Ux Designer',
      description: [
        'Descrição do serviço de Ui/Ux Designer',
        '- Item 1',
        '- Item 2',
        '- Item 3',
        '- Item 4',
      ],
    },
    {
      title: 'Frontend',
      description: [
        'Descrição do serviço de Frontend',
        '- Item 1',
        '- Item 2',
        '- Item 3',
        '- Item 4',
      ],
    },
    {
      title: 'Backend',
      description: [
        'Descrição do serviço de Backend',
        '- Item 1',
        '- Item 2',
        '- Item 3',
        '- Item 4',
      ],
    },
  ];

  const { theme } = useTheme();
  const [openModalIndex, setOpenModalIndex] = useState(-1); // -1 significa que nenhum modal está aberto

  const handleOpenModal = (index) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(-1);
  };

  return (
    <div
      className={`h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'
        }`}
    >
      <div className="max-w-lg mx-auto" id="services">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Serviços</h1>
          <p className="text-sm font-normal text-slate-600">
            O que eu ofereço
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 space-x-8">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className={`text-center rounded-lg p-6 shadow-md w-72 h-56 ${theme === 'dark'
              ? 'bg-black text-white'
              : 'bg-white text-black'
              }`}
          >
            <div className="mb-4">
              {index === 0 && (
                <FiLayout className="text-red-500 mx-auto" size={25} />
              )}
              {index === 1 && (
                <FiCode className="text-red-500 mx-auto" size={25} />
              )}
              {index === 2 && (
                <FiServer className="text-red-500 mx-auto" size={25} />
              )}
            </div>
            <h2 className="text-xl font-medium mb-2 text-center">{item.title}</h2>
            <button
              className="mt-4 px-4 py-2 text-red-500 bg-transparent rounded-md hover:text-red-600 hover:cursor-pointer focus:outline-none focus:ring focus:border-red-300"
              onClick={() => handleOpenModal(index)}
            >
              Veja Mais
              <FiArrowRight className="inline ml-2" />
            </button>
            {openModalIndex === index && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className={`rounded-lg p-6 relative overflow-y-auto max-h-96 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  <h2 className="text-xl font-medium mb-2">{item.title}</h2>
                  {item.description.map((desc, i) => (
                    <p key={i}>
                      <FaRegCheckCircle className="inline mr-2 text-rose-500" />
                      {desc}
                    </p>
                  ))}
                  <button
                    className="absolute top-2 right-2 text-red-500 bg-transparent rounded-md hover:text-red-600 hover:cursor-pointer focus:outline-none focus:ring focus:border-red-300"
                    onClick={handleCloseModal}
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
