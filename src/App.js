import React, { useState, useEffect } from 'react';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Projects from './containers/projects';
import Skills from './containers/skills';
import Navbar from './components/navbar';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Advanced Premium Loading Timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full relative">
      {/* Premium Preloader */}
      <div className={`fixed inset-0 z-[99999] bg-[#151515] flex flex-col justify-center items-center transition-all duration-1000 ease-in-out ${loading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none translate-y-[-50px]'}`}>
        <div className="relative flex justify-center items-center">
          {/* Outer spinning ring */}
          <div className="absolute w-[120px] h-[120px] rounded-full border-[3px] border-t-theme-main border-r-transparent border-b-theme-main border-l-transparent animate-[spin_2s_linear_infinite]"></div>
          {/* Inner pulsing ring */}
          <div className="absolute w-[90px] h-[90px] rounded-full border-[2px] border-white/10 border-t-white/80 animate-[spin_3s_linear_infinite_reverse]"></div>
          {/* Center Initials */}
          <div className="text-theme-main text-[3.5rem] font-extrabold tracking-widest drop-shadow-[0_0_15px_rgba(255,221,64,0.8)] animate-pulse">
            AA
          </div>
        </div>

        <p className="mt-[50px] text-gray-400 text-[1.4rem] tracking-[4px] font-medium animate-pulse">
          LOADING EXPERIENCE
        </p>

        {/* Progress Bar */}
        <div className="mt-[20px] w-[200px] h-[3px] bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <div className="h-full bg-theme-main rounded-full shadow-[0_0_15px_rgba(255,221,64,1)]" style={{ animation: "loadingBar 2.5s ease-in-out forwards" }}></div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* All the pages rendered sequentially */}
      <div className="relative w-full">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[30px] right-[30px] z-[9999] bg-theme-main text-black p-[15px] rounded-full shadow-lg hover:-translate-y-2 hover:shadow-theme-main/50 transition-all duration-300 cursor-pointer"
          title="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
