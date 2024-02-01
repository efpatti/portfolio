// src/pages/Home.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-black">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold">Sobre mim</h1>
        <p className="text-sm font-normal text-slate-600">Minha introdução</p>
      </div>
      <div className="flex items-center mb-8">
        <div className="w-80 h-80 rounded-full bg-red-500 flex items-center justify-center text-white mr-8"> {/* Ajustei a margem direita aqui */}
          <span className="text-7xl font-bold uppercase">Ilelo</span>
        </div>
        <div className='w-72'>
          <p className="text-sm font-normal text-slate-600">Olá, meu nome é Enzo ou ilelo e sou apaixonado em criar coisas! Meu interesse em desenvolvimento web surgiu em 2022 com influências do meu pai, partir daí comecei a construir pequenos sites em HTML & CSS.</p>
          <p className='text-sm font-normal text-slate-600'>Trazendo para o presente, eu tenho o prazer de trabalhar em uma start-up sensacional! Meu foco atual é desenvolver aplicações, sites responsivos, acessibilidade, interfaces gráficas e muito mais.</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-base font-semibold">06+ Anos</p>
          <p className="text-sm font-normal text-slate-600">de experiência</p>
        </div>
        <div className="text-center">
          <p className="text-base font-semibold">18+ Projetos</p>
          <p className="text-sm font-normal text-slate-600">completos</p>
        </div>
        <div className="text-center">
          <p className="text-base font-semibold">02+ Empresas</p>
          <p className="text-sm font-normal text-slate-600">trabalhadas</p>
        </div>
      </div>
    </section>
  );
};

export default About;
