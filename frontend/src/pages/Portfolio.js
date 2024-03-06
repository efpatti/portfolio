import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTheme } from "../ThemeContext";

const Portfolio = () => {
  const [repoImages, setRepoImages] = useState([]);
  useEffect(() => {
    async function fetchRepoImages() {
      try {
        const response = await fetch("http://localhost:5000/repo-images");

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setRepoImages(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRepoImages();
  }, []);

  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-home text-white" : "bg-slate-50 text-black"
      }`}
    >
      <div className="mx-auto" id="portfolio">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Portfólio</h1>
          <p
            className={`text-sm font-normal ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Trabalhos mais recentes
          </p>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#DC2626",
            "--swiper-navigation-size": "40px",
            "--swiper-pagination-color": "#DC2626",
            "--swiper-pagination-bullet-inactive-color": `${
              theme === "dark" ? "rgb(148 163 184)" : ""
            }`,
          }}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} mb-5"></span>`;
            },
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
          {Object.entries(repoImages).map(([repoName, { images, desc }]) =>
            images.map((imageUrl, index) => (
              <SwiperSlide key={`${repoName}-${index}`}>
                <div className="flex justify-center items-center h-full mt-5 mb-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={`${repoName}-${index}`}
                          className="h-96 w-96"
                        />
                      ) : (
                        <p>Nenhuma imagem disponível para este projeto.</p>
                      )}
                    </div>
                    <div className="col">
                      <h1>{repoName}</h1>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
