import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '../ThemeContext';
import imgTest from "../img/black.png"

const Portfolio = () => {
  const projectsData = [
    {
      title: "Vovô Seguro",
      img: imgTest,
      desc: "Página web com HTML, SCSS e JavaScript com o objetivo de catalogar e comprar pulseiras de proteção para idosos."
    },
    {
      title: "Temporizador Pomodoro",
      img: imgTest,
      desc: "Aplicação Web com ReactJs e CSS com o objetivo de utilizar o método pomodoro para melhora de produtividade."
    },
    {
      title: "Nota Aluno",
      img: imgTest,
      desc: "Aplicação Web (CRUD) com ReactJs com o objetivo de inserir e modificar notas, mas também adicionar e remover alunos."
    },
    {
      title: "Mercado",
      img: imgTest,
      desc: "Página Web (CRUD) com HTML, CSS e JavaScript com o objetivo de adicionar e remover produtos em uma tabela."
    },
    {
      title: "Ateliê Vila Alpina",
      img: imgTest,
      desc: "Aplicação Web com ReactJs, SCSS, Express, Core e Stripe. Com o objetivo de catalogar e comprar produtos."
    },
  ];
  const { theme } = useTheme();

  return (
    <div className={`h-96 ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="max-w-lg mx-auto" id="portfolio">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Portfólio</h1>
          <p className="text-sm font-normal text-slate-600">Trabalhos mais recentes</p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-row space-x-10">
                <div>
                  <img src={project.img} alt={project.title} />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <h1>{project.title}</h1>
                  </div>
                  <div>
                    <p>{project.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
