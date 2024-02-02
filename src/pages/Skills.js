import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown, IoMdCodeWorking, IoIosBicycle } from 'react-icons/io';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiPython } from 'react-icons/si';

const skillsData = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', percentage: 80, icon: SiHtml5 },
      { name: 'CSS', percentage: 70, icon: SiCss3 },
      { name: 'JavaScript', percentage: 60, icon: SiJavascript },
      { name: 'ReactJS', percentage: 50, icon: SiReact },
    ],
    icon: IoMdCodeWorking, // Adicionado ícone "{}" para Frontend
  },
  {
    title: 'Backend',
    items: [
      { name: 'NodeJS', percentage: 40, icon: SiNodeDotJs },
      { name: 'Python', percentage: 30, icon: SiPython },
    ],
    icon: IoIosBicycle, // Adicionado ícone "terminais" para Backend
  },
];

export default function Skills() {
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
    <div className="max-w-md mx-auto mt-8" id="skills">
      <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center bg-gray-200 cursor-pointer p-4 rounded-md"
            onClick={() => handleAccordionClick(index)}
          >
            <div className="flex items-center">
              {React.createElement(category.icon, { size: 20, className: 'mr-2' })}
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            {activeAccordions.includes(index) ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </div>
          {activeAccordions.includes(index) && (
            <div className="bg-gray-100 p-4 mt-2 rounded-md">
              {category.items.map((item, subIndex) => (
                <div key={subIndex} className="mb-2">
                  <div className="flex items-center">
                    {React.createElement(item.icon, { size: 16, className: 'mr-2' })}
                    <p className="text-sm font-semibold ml-2">{item.name}</p>
                  </div>
                  <div className="bg-red-300 h-2 relative rounded-md">
                    <div
                      className="h-full bg-red-500 rounded-md"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
