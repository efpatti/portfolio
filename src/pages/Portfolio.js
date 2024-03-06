import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '../ThemeContext';
import { capitalCase } from "change-case"

const PortfolioComponent = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchGitHubRepos() {
      try {
        const response = await fetch('https://api.github.com/users/efpatti/repos');

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchGitHubRepos();
  }, []);

  const fetchReadmeContent = async (repoName) => {
    try {
      const response = await fetch(`https://api.github.com/repos/efpatti/${repoName}/contents/src`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      const content = atob(data.content); // decode base64 content
      return content;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const { theme } = useTheme();

  const convertToCapitalCase = (string) => {
    return capitalCase(string);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-home text-white' : 'bg-slate-50 text-black'}`}>
      <div className="mx-auto" id="portfolio">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Portfólio</h1>
          <p className={`text-sm font-normal ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Trabalhos mais recentes</p>
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
          {repos.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full mt-5 mb-10">
                <div className="flex items-center">
                  <div>
                    <h1 className='font-semibold text-xl text-left'>{convertToCapitalCase(project.name)}</h1>
                    <p className={`font-normal text-base text-left mb-4 w-52 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>{project.description}</p>
                    <p className={`font-normal text-base text-left mb-4 w-52 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>{project.efpatti}</p>
                    <div>
                      {/* Usando a função convertToPascalCase para obter o nome correto da imagem */}
                      {/* <img src={pomodoro} alt="Imagem do projeto" /> */}
                      <button
                        className={`flex items-center rounded-lg p-4 bg-red-500 text-white font-medium hover:bg-red-600 mt-4 text-left cursor-${index === repos.length - 1 ? 'pointer' : 'default'}`}
                        onClick={async () => {
                          const readmeContent = await fetchReadmeContent(project.name);
                          if (readmeContent) {
                            console.log(readmeContent); // Aqui você pode decidir como lidar com o conteúdo do README, como exibindo em uma modal, etc.
                          } else {
                            console.log('Não foi possível obter o conteúdo do README');
                          }
                        }}
                      >
                        <span className={`mr-2 ${index === repos.length - 1 ? 'cursor-pointer' : 'cursor-text'}`}>Saiba Mais</span>
                      </button>
                    </div>
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

export default PortfolioComponent;
