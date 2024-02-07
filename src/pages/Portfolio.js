import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '../ThemeContext';
import imgAtelie from "../img/atelie.png";
import imgVovoSeguro from "../img/vovo-seguro.png";
import imgMercado from "../img/mercado.png";
import imgNotaAluno from "../img/nota-aluno.png";
import imgPomodoro from "../img/pomodoro.png";
import imgGitHub from "../img/github.png"
import { VscError } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const projectsData = [
    {
      title: "Vovô Seguro",
      img: imgVovoSeguro,
      width: "16rem",
      height: "9rem",
      desc: "Página web com HTML, SCSS e JavaScript com o objetivo de catalogar e comprar pulseiras de proteção para idosos.",
      btnText: "Sem demo",
      icon: VscError,
    },
    {
      title: "Temporizador Pomodoro",
      img: imgPomodoro,
      width: "16rem",
      height: "9rem",
      desc: "Aplicação Web com ReactJs e CSS com o objetivo de utilizar o método pomodoro para melhora de produtividade.",
      btnText: "Sem demo",
      icon: VscError,
    },
    {
      title: "Nota Aluno",
      img: imgNotaAluno,
      width: "16rem",
      height: "9rem",
      desc: "Aplicação Web (CRUD) com ReactJs com o objetivo de inserir e modificar notas, mas também adicionar e remover alunos.",
      btnText: "Sem demo",
      icon: VscError,
    },
    {
      title: "Mercado",
      img: imgMercado,
      width: "16rem",
      height: "9rem",
      desc: "Página Web (CRUD) com HTML, CSS e JavaScript com o objetivo de adicionar e remover produtos em uma tabela.",
      btnText: "Sem demo",
      icon: VscError,
    },
    {
      title: "Ateliê Vila Alpina",
      img: imgAtelie,
      width: "16rem",
      height: "9rem",
      desc: "Aplicação Web com ReactJs, SCSS, Express, Core e Stripe. Com o objetivo de catalogar e comprar produtos.",
      btnText: "Sem demo",
      icon: VscError,
    },
    {
      title: "Meu GitHub",
      img: imgGitHub,
      width: "13rem",
      height: "16rem",
      desc: "Ficou interessado e gostaria de ver mais projetos ? Acessa meu GitHub e veja todos os meus repositórios tanto de estudos quanto projetos pessoais!",
      btnText: "Saíba Mais",
      icon: FaArrowRight,
    }
  ];
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className="mx-auto" id="portfolio">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Portfólio</h1>
          <p className="text-sm font-normal text-slate-600">Trabalhos mais recentes</p>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#DC2626",
            "--swiper-navigation-size": "40px",
            "--swiper-pagination-color": "#DC2626",
            "--swiper-pagination-bullet-inactive-color": `${theme === 'dark' ? 'rgb(148 163 184)' : ''}`
          }}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} mb-5"></span>`;
            }
          }}
          navigation={true}
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
              <div className="flex justify-center items-center h-full mt-5 mb-10">
                <div className="flex items-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: project.width, height: project.height }}
                    className='mr-5'
                  />
                  <div>
                    <h1 className='font-semibold text-xl text-left'>{project.title}</h1>
                    <p className='font-normal text-base text-left mb-4 w-52 text-slate-600'>{project.desc}</p>
                    <button className={`flex items-center rounded-lg p-4 bg-red-500 text-white font-medium hover:bg-red-600 mt-4 text-left cursor-${index === projectsData.length - 1 ? 'pointer' : 'default'}`}>
                      <span className={`mr-2 cursor-${index === projectsData.length - 1 ? 'pointer' : 'text'}`}>{project.btnText}</span>
                      <project.icon className="ml-2" />
                    </button>
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
