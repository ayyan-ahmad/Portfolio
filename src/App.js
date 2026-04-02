
import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';// routing ke liye
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react"; //ok
import particlesOptions from "./utils.js/particles";

import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Projects from './containers/projects';
import Skills from './containers/skills';
import Navbar from './components/navbar';

function App() {
  const location = useLocation();
  console.log(location);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // This loads the full tsParticles features
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* All the pages will be rendered here */}

      {/* particles.js */}
      {
        renderParticlesJsInHomePage &&
        init &&
        <Particles id="tsparticles" options={particlesOptions} />
      }

      {/* Navbar */}
      <Navbar />
      {/* main content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
