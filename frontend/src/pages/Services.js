import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { FiCode, FiLayout, FiServer, FiArrowRight, FiX } from 'react-icons/fi';
import { FaRegCheckCircle } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      title: 'Ui/Ux Designer',
      description: [
        'Desenvolvo o layout da sua aplicação mobile ou web.',
        'Crio vídeos editados para apresentações de aplicações.',
        'Desenvolvo interfaces UI/UX interativas.',
        'Crio logótipos de marcas.',
        'E muito mais...',
      ],
    },
    {
      title: 'Frontend',
      description: [
        'Aplico landing pages.',
        'Desenvolvo páginas com designes diversos.',
        'Manutenção de códigos.',
        'Crio a responsividade do seu site.',
        'Implementações de novas funcionalidades.',
        'E muito mais...'
      ],
    },
    {
      title: 'Backend',
      description: [
        'Refatoração de databases.',
        'Manutenção de bancos de dados.',
        'Migração de tecnologia.',
        'Remodelagem da lógica do banco de dados.',
        'E muito mais...',
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
      className={`h-screen flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-home text-white' : 'bg-slate-50 text-black'}`}
    >
      <div className="max-w-lg mx-auto" id="services">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Serviços</h1>
          <p className={`text-sm font-normal ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            O que eu ofereço
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 space-x-8">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className={`text-center rounded-lg p-6 shadow-md w-72 h-56 ${theme === 'dark'
              ? 'bg-fraquinho text-white'
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
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-home bg-opacity-50">
                <div className={`rounded-lg p-6 relative overflow-y-auto max-h-96 ${theme === 'dark' ? 'bg-home text-white' : 'bg-white text-black'}`}>
                  <h2 className="text-xl font-medium mb-2 text-start">{item.title}</h2>
                  {item.description.map((desc, i) => (
                    <p key={i} className='text-left text-base font-normal text-slate-500 leading-9'>
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
