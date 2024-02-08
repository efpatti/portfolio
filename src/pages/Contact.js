import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
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
      desc: "Nome e Sobrenome",
      type: "text"
    },
    {
      id: 2,
      title: "Email",
      desc: "seuemail@email.com",
      type: "text"
    },
    {
      id: 3,
      title: "Assunto",
      desc: "Qual o tópico?",
      type: "text"
    },
    {
      id: 4,
      title: "Mensagem",
      desc: "Seja sucinto na sua mensagem",
      type: "textarea"
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-home text-white' : 'bg-slate-50 text-black'}`}>
      <div className="max-w-4xl mx-auto" id="contact">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold">Contato</h1>
          <p className={`text-sm font-normal ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Entre em contato comigo!</p>
        </div>
        <form action="https://formspree.io/f/mnqepwdv" method="POST">
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
                  <label htmlFor={input.id} className={`p-2 rounded-ss-md rounded-tr-md ${theme === 'dark' ? 'bg-fraquinho text-white' : 'bg-red-100 text-black'}`}>{input.title}</label>
                  {input.type === "textarea" ? (
                    <textarea
                      placeholder={input.desc}
                      id={input.id}
                      name={input.title.toLowerCase()}
                      className={`p-2 focus:outline-none border-none rounded-ee-md rounded-es-md ${theme === 'dark' ? 'bg-fraquinho text-white' : 'bg-red-100 text-black'}`}
                    />
                  ) : (
                    <input
                      type={input.type}
                      placeholder={input.desc}
                      id={input.id}
                      name={input.title.toLowerCase()}
                      className={`p-2 focus:outline-none border-none rounded-ee-md rounded-es-md ${theme === 'dark' ? 'bg-fraquinho text-white' : 'bg-red-100 text-black'}`}
                    />
                  )}
                </div>
              ))}
            </div>
            {inputsData.slice(2).map((input, index) => (
              <div key={index} className="flex flex-col mb-4 text-left">
                <label htmlFor={input.id} className={`p-2 rounded-ss-md rounded-tr-md ${theme === 'dark' ? 'bg-fraquinho text-white' : 'bg-red-100 text-black'}`}>{input.title}</label>
                {input.type === "textarea" ? (
                  <textarea
                    placeholder={input.desc}
                    id={input.id}
                    name={input.title.toLowerCase()}
                    className={`p-2 focus:outline-none border-none rounded-ee-md rounded-es-md ${theme === 'dark' ? 'bg-fraquinho text-white' : 'bg-red-100 text-black'}`}
                  />
                ) : (
                  <input
                    type={input.type}
                    placeholder={input.desc}
                    id={input.id}
                    name={input.title.toLowerCase()}
                    className={`p-2 focus:outline-none border-none rounded-ee-md rounded-es-md ${theme === 'dark' ? 'bg-fraquinho text-white' : 'bg-red-100 text-black'}`}
                  />
                )}
              </div>
            ))}
          </div>
          <button type="submit" className="flex items-center rounded-lg p-3 bg-red-500 text-white font-medium hover:bg-red-600 font-extrabold text-sm">
            <span className="mr-2">Enviar</span>
            <AiOutlineSend className="ml-2" size={20} />
          </button>
        </form>
        <div className='mt-4 h-14'>
          <p className='font-normal text-xs text-center text-slate-400'>O envio dos e-mails são feitos utilizando uma ferramenta chamada FormSpree, após o envio click em <span className='font-semibold'>Go Back</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
