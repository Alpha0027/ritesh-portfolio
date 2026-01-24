import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Hobbies from './components/sections/Hobbies';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Hobbies />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
