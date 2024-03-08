import React, { useState } from "react";
import { FaServer, FaAccusoft } from "react-icons/fa";
import { BsBraces } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiPython,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import { useTheme } from "../ThemeContext";

const skillsData = [
  {
    title: "Frontend",
    desc: "Mais que 1 ano",
    items: [
      { name: "HTML", percentage: 80, icon: SiHtml5 },
      { name: "CSS", percentage: 70, icon: SiCss3 },
      { name: "JavaScript", percentage: 60, icon: SiJavascript },
      { name: "ReactJS", percentage: 50, icon: SiReact },
    ],
    icon: BsBraces,
    size: 25,
  },
  {
    title: "Backend",
    desc: "Mais que 3 meses",
    items: [
      { name: "NodeJS", percentage: 40, icon: SiNodeDotJs },
      { name: "Python", percentage: 30, icon: SiPython },
    ],
    icon: FaServer,
    size: 20,
  },
  {
    title: "Designer",
    desc: "Mais que 2 anos",
    items: [
      { name: "Figma", percentage: 90, icon: SiFigma },
      { name: "Photoshop", percentage: 65, icon: SiAdobephotoshop },
    ],
    icon: FaAccusoft,
    size: 20,
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const [activeAccordions, setActiveAccordions] = useState([0]);

  const handleAccordionClick = (index) => {
    setActiveAccordions((prevAccordions) => {
      if (prevAccordions.includes(index)) {
        return prevAccordions.filter((accordion) => accordion !== index);
      } else {
        return [...prevAccordions, index];
      }
    });
  };

  return (
    <div
      className={`overflow-hidden ${
        theme === "dark" ? "bg-home text-white" : "bg-slate-50 text-black"
      }`}
    >
      <div className="max-w-lg mx-auto" id="skills">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-semibold">Habilidades</h1>
          <p
            className={`text-sm font-normal ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Ferramentas que tenho contato diariamente
          </p>
        </div>
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`mb-4 ${index === skillsData.length - 1 ? "mb-0" : ""}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer p-4 rounded-md"
              onClick={() => handleAccordionClick(index)}
            >
              <div className="flex items-center">
                {React.createElement(category.icon, {
                  size: category.size,
                  className: "mr-2 text-red-500",
                })}
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              {activeAccordions.includes(index) ? (
                <IoIosArrowUp size={20} className="text-red-500" />
              ) : (
                <IoIosArrowDown size={20} className="text-red-500" />
              )}
            </div>
            {activeAccordions.includes(index) && (
              <div className="p-4 mt-2 rounded-md">
                {category.items.map((item, subIndex) => (
                  <div key={subIndex} className="mb-2">
                    <div className="flex items-center">
                      {React.createElement(item.icon, {
                        size: 16,
                        className: "mr-2",
                      })}
                      <p className="text-sm font-semibold ml-2">{item.name}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-red-300 h-2 relative rounded-md w-full">
                        <div
                          className="h-full bg-red-500 rounded-md"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="ml-2">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
