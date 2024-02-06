import React, { useState } from 'react';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { useTheme } from "../ThemeContext"
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const { theme } = useTheme();
  const navLinks = [
    { href: 'services', label: 'Serviços' },
    { href: 'portfolio', label: 'Portfólio' },
    { href: 'contact', label: 'Contato' },
    { href: 'google.com', label: 'Heej' }
  ]
  const socialLinks = [
    {
      name: "Github",
      icon: FiGithub,
      href: "https://github.com/efpatti"
    },
    {
      name: "Linkedin",
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/seu-usuario-do-linkedin"
    }
  ]
  return (


    <footer class={`shadow ${theme === 'dark' ? 'bg-black' : 'bg-red-500'}`}>
      <div class="w-full max-w-screen-xl mx-auto p-10 md:py-16">
        <div class="sm:flex sm:items-center justify-around text-zinc-50">
          <h1 class="self-center text-4xl font-semibold w-20">Enzo Patti</h1>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ml-3 mr-4 space-x-4">
            {navLinks.map((item) => (
              <li key={item.label} >
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="leading-normal cursor-pointer hover:opacity-60 text-base font-normal"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className='flex flex-row space-x-4'>
            {socialLinks.map((link) => (
              <div>
                <button className='mr-2 rounded-xs border-transparent hover:opacity-60'>
                  {React.createElement(link.icon, { size: 20 })}
                </button>
              </div>
            ))}
          </div>
        </div>
        <hr class="my-6 border-transparent sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Enzo Patti<span > (@ilelofpp) 2021</span> - Todos os Direitos Reservados.</span>
      </div>
    </footer>


  )
}

export default Footer