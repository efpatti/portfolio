import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { useTheme } from '../ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const infosData = [
    {
      title: "Me ligue!",
      desc: "(11) 97883-3101",
      icon: FiPhoneCall,
    },
    {
      title: "Email",
      desc: "enzo.patti@aluno.senai.br",
      icon: FiMail,
    },
    {
      title: "Localização",
      desc: "Brasil - São Paulo",
      icon: FiMapPin,
    }
  ];
  const inputsData = [
    {
      id: 1,
      title: "Nome",
      desc: "Nome e Sobrenome"
    },
    {
      id: 2,
      title: "Email",
      desc: "seuemail@email.com"
    },
    {
      id: 3,
      title: "Assunto",
      desc: "Qual o tópico?"
    },
    {
      id: 4,
      title: "Mensagem",
      desc: "Seja sucinto na sua mensagem"
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="max-w-4xl mx-auto" id="contact">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold">Contato</h1>
          <p className="text-sm font-normal text-slate-600">Entre em contato comigo!</p>
        </div>
        <div className="grid grid-rows-5 gap-8">
          {infosData.map((info, index) => (
            <div key={index} className="flex items-center mb-4 text-left">
              <info.icon className="mr-4 text-red-500" size={26} />
              <div>
                <h1 className={`font-medium text-xl text-black ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>{info.title}</h1>
                <span className={`text-sm font-normal leading-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{info.desc}</span>
              </div>
            </div>
          ))}
          <div className={`grid grid-cols-2 gap-4 ${theme === 'dark' ? 'text-white' : 'text-black'} `}>
            {inputsData.slice(0, 2).map((input, index) => (
              <div key={index} className="flex flex-col mb-4 text-left">
                <label htmlFor={input.id} className={`p-2 rounded-ss-md rounded-tr-md ${theme === 'dark' ? 'bg-black text-white' : 'bg-red-100 text-black'}`}>{input.title}</label>
                <input type="text" placeholder={input.desc} id={input.id} className={`p-2 focus:outline-none border-none rounded-ee-md rounded-es-md ${theme === 'dark' ? 'bg-black text-white' : 'bg-red-100 text-black'}`} />
              </div>
            ))}
          </div>
          {inputsData.slice(2).map((input, index) => (
            <div key={index} className="flex flex-col mb-4 text-left">
              <label htmlFor={input.id} className={`p-2 rounded-ss-md rounded-tr-md ${theme === 'dark' ? 'bg-black text-white' : 'bg-red-100 text-black'}`}>{input.title}</label>
              <input type="text" placeholder={input.desc} id={input.id} className={`p-2 focus:outline-none border-none rounded-ee-md rounded-es-md ${theme === 'dark' ? 'bg-black text-white' : 'bg-red-100 text-black'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
