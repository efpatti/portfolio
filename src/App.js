import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
