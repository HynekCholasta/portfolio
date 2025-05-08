import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';
import { useEffect, useCallback } from 'react';

const App = () => {

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 250 &&
      rect.bottom >= 0 // Ensure the element is not completely out of view
    );
  };

  // Function to add the 'visible' class when elements scroll into view
  const handleScroll = useCallback(() => {
    const elements = document.querySelectorAll('.scroll-fade-up');
    
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }, []); // Empty dependency array means this function is stable and won't change

  // UseEffect to add the scroll event listener and handle initial state
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check to animate elements already in view on load

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Header />
      <main className='main'>
        <div id="home" className="scroll-fade-up"><Home /></div>
        <div id="about" className="scroll-fade-up"><About /></div>
        <div id="skills" className="scroll-fade-up"><Skills /></div>
        <div id="services" className="scroll-fade-up"><Services /></div>
        <div id="qualification" className="scroll-fade-up"><Qualification /></div>
        <div id="portfolio"><Portfolio /></div>
        {/* <div id="testimonials" className="scroll-fade-up"><Testimonials /></div> */}
        <div id="contact" className="scroll-fade-up"><Contact /></div>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
