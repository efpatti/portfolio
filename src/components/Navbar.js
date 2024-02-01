import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [showShadow, setShowShadow] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about", label: "Sobre" },
    { href: "skills", label: "Habilidades" },
    { href: "services", label: "Serviços" },
    { href: "portfolio", label: "Portfólio" },
    { href: "contact", label: "Contato" },
  ];

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleScroll = () => {
    const scrollOffset = window.scrollY + window.innerHeight / 2;
    const sections = navLinks.map((link) => document.getElementById(link.href));

    let activeSection = null;

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollOffset >= sectionTop && scrollOffset < sectionBottom) {
          activeSection = section.id;
        }
      }
    });

    setActiveSection(activeSection);

    // Adicionar sombra quando scrolla um pouco para baixo
    setShowShadow(scrollOffset > 10);

    // Mostrar o botão "Voltar ao Topo" quando scrolla para baixo
    setShowScrollTopButton(scrollOffset > window.innerHeight);
  };

  const scrollToTop = () => {
    // Rolando suavemente até o topo
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    // Você pode adicionar a lógica para alterar as cores do seu site aqui
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', (to) => handleSetActive(to));

    // Configurar o listener de scroll para atualizar a seção ativa
    window.addEventListener('scroll', handleScroll);

    // Ativar o scrollSpy para usar o React-Scroll com o listener de scroll customizado
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`sm:px-8 px-6 py-4 z-10 w-full fixed top-0 bg-${isDarkMode ? 'gray-900' : 'white'} ${showShadow ? 'drop-shadow-sm' : ''}`}>
        <nav className="flex justify-between items-center max-container mx-auto">
          {/* Links visíveis em telas menores */}
          <ul className="flex-1 flex justify-end items-center gap-14 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label} className="pr-4">
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`leading-normal text-sm ${activeSection === item.href ? 'text-red-500' : 'text-slate-gray'
                    } cursor-pointer hover:text-red-500`}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-2xl cursor-pointer"
              >
                {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-600" />}
              </button>
            </li>
          </ul>

          {/* Botão de menu para telas menores */}
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <FaTimes className="text-4xl" /> : <FaBars className="text-4xl" />}
          </div>
        </nav>
      </header>

      {/* Menu suspenso visível em telas menores */}
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-${isDarkMode ? 'gray-900' : 'white'}">
            <div
              className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <FaTimes className="text-4xl" />
            </div>
            <ul className="lg:hidden flex flex-col items-center justify-center h-full">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <ScrollLink
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`font-raleway leading-normal text-lg ${activeSection === item.href ? 'text-rose-600' : 'text-slate-gray'
                      } cursor-pointer`}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Botão de voltar ao topo */}
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-red-600"
        >
          Voltar ao Topo
        </button>
      )}
    </>
  );
};

export default Navbar;
