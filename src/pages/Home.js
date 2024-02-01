import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import perfilPhoto from "../img/foto-perfil.png";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-black">
      <div className="flex items-center w-full max-w-4xl">
        {/* Ícone do GitHub à esquerda */}
        <div className="flex-shrink-0 w-12 text-red-500">
          <a href="https://github.com/seu-usuario-do-github" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
          </a>
        </div>

        {/* Ícone do LinkedIn abaixo do GitHub */}
        <div className="flex-shrink-0 w-12 text-red-500">
          <a href="https://www.linkedin.com/in/seu-usuario-do-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
        </div>

        {/* Texto à esquerda */}
        <div className="flex-shrink-0 w-5/12">
          <h1 className="text-5xl font-semibold mb-4 w-80">👋🏽 Olá, meu nome é Enzo</h1>
          <p className="text-xl font-medium leading-normal text-gray-600">Eu desenvolvo coisas!</p>
          <button className="rounded-lg p-4 bg-red-500 text-white font-medium mt-4">Contato</button>
        </div>

        {/* Foto de perfil à direita */}
        <div className="flex-shrink-0 w-1/2 ml-8">
          <img src={perfilPhoto} alt="Perfil" className="rounded-full w-64 h-64 object-cover bg-red-500" />
        </div>
      </div>
    </section>
  );
};

export default Home;
