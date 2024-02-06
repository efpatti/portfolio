import React from 'react';
import { MdFileDownload } from "react-icons/md";
import { useTheme } from "../ThemeContext"
import { FiActivity } from "react-icons/fi";

const About = () => {
  const aboutData = [
    {
      t1: "06+",
      t2: "Anos de experiência"
    },
    {
      t1: "18+",
      t2: "Projetos completos"
    },
    {
      t1: "02+",
      t2: "Empresas trabalhadas"
    }
  ]
  const { theme } = useTheme();
  return (
    <section id="about" className={`min-h-screen flex flex-col items-center justify-center text-black ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold">Sobre mim</h1>
        <p className="text-sm font-normal text-slate-600">Minha introdução</p>
      </div>
      <div className="flex items-center mb-8">
        <div className="w-80 h-80 rounded-full bg-gradient-to-r from-red-200 to-rose-500 flex items-center justify-center text-white mr-8"> {/* Ajustei a margem direita aqui */}
          <span className="text-7xl font-bold">
            Ilelo
            <FiActivity size={90} />
          </span>
        </div>
        <div className='w-72 flex flex-col'>
          <div className='mb-4'>
            <p className="text-sm font-normal text-slate-600">Olá, meu nome é <span className="font-bold">Enzo</span> ou ilelo e sou apaixonado em criar coisas! Meu interesse em desenvolvimento web surgiu em 2022 com influências do meu pai, partir daí comecei a construir pequenos sites em HTML & CSS.</p>
            <p className='text-sm font-normal text-slate-600'>Trazendo para o presente, eu tenho o prazer de trabalhar em uma <span className="font-bold">start-up </span>sensacional! Meu foco atual é desenvolver aplicações, sites responsivos, acessibilidade, interfaces gráficas e muito mais.</p>
          </div>
          <div>
            <div className="flex flex-row text-center">
              {aboutData.map((item) => (
                <div>
                  <span className='text-2xl font-semibold'>{item.t1}</span>
                  <p className='text-xs font-normal'>{item.t2}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button className="flex items-center rounded-lg p-4 bg-red-500 text-white font-medium hover:bg-red-600 mt-4">
              <span className="mr-2">Download CV</span>
              <MdFileDownload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
