import React from 'react';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import perfilPhoto from "../img/foto-perfil.png";
import { IoMdArrowDown } from "react-icons/io";
import { BiMouse } from "react-icons/bi";
import { useTheme } from '../ThemeContext';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="flex items-center w-full max-w-4xl">
        <div className="flex-row text-red-500">
          <div className="flex-shrink-0 w-12 mb-3 hover:text-red-600">
            <a href="https://github.com/efpatti" target="_blank" rel="noopener noreferrer">
              <FiGithub size={20} />
            </a>
          </div>
          <div className="flex-shrink-0 w-12 hover:text-red-600">
            <a href="https://www.linkedin.com/in/seu-usuario-do-linkedin" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 w-5/12 mt-8">
          <h1 className="text-5xl font-semibold mb-4 w-80">👋🏽 Olá, meu nome é Enzo</h1>
          <p className={`text-xl font-medium leading-normal mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Eu desenvolvo coisas!</p>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <button className="flex items-center rounded-lg p-4 bg-red-500 text-white font-medium hover:bg-red-600">
              <span className="mr-2">Contato</span>
              <AiOutlineSend className="ml-2" />
            </button>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            <button className={`flex items-center rounded-lg p-4 font-medium text-rose-500 duration-500 hover:transform hover:translate-y-1 ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>
              <BiMouse className="mr-2" size={26} />
              <span className={`mr-2 ${theme === 'dark' ? 'text-white' : 'text-black'} text-sm`}>Role para baixo!</span>
              <IoMdArrowDown className="ml-2" />
            </button>
          </ScrollLink>
        </div>

        <div className="flex-shrink-0 w-1/2 ml-8">
          <img src={perfilPhoto} alt="Perfil" className="rounded-full w-64 h-64 object-cover bg-red-500" />
        </div>
      </div>
    </section>
  );
};

export default Home;
