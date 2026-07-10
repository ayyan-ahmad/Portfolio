import React, { useEffect, useState } from 'react';
import { Animate } from 'react-simple-animate';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../utils.js/particles";
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaFileDownload, FaPaperPlane } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';

const Home = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleNavigateToProjects = () => {
        const section = document.getElementById('projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleNavigateToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id="home" ref={ref} className='min-h-screen flex flex-col justify-center items-center relative bg-transparent overflow-hidden'>
            {
                init &&
                <Particles id="tsparticles" className="absolute inset-0 z-[-1]" options={particlesOptions} />
            }
            
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-[40px] lg:gap-[100px] z-10 w-full px-[20px] max-w-[1400px] mx-auto mt-[60px] lg:mt-0'>
                
                {/* Left Side: Text and Buttons */}
                <div className='flex flex-col items-center lg:items-start text-center lg:text-left flex-1'>
                    {/* Premium Typography */}
                    <Animate play={inView} duration={1.2} delay={0.1} start={{ transform: "translateY(-30px)", opacity: 0 }} end={{ transform: "translateY(0px)", opacity: 1 }}>
                        <h1 className='text-white m-0 text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-extrabold leading-tight tracking-[1px]'>
                            Hi, I'm <span className="text-theme-main drop-shadow-[0_0_15px_rgba(255,221,64,0.4)]">Ayyan Ahmad</span>
                            <br />
                            <span className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[3.5rem] text-gray-300 font-medium mt-[10px] block">
                                Full-Stack Web Developer
                            </span>
                        </h1>
                    </Animate>

                    {/* Call to Action Buttons */}
                    <Animate play={inView} duration={1} delay={0.3} start={{ transform: "translateY(50px)", opacity: 0 }} end={{ transform: "translateY(0px)", opacity: 1 }}>
                        <div className='mt-[40px] flex flex-wrap justify-center lg:justify-start items-center gap-[15px]'>
                            <button 
                                onClick={handleNavigateToProjects}
                                className='flex items-center gap-[10px] px-[25px] py-[12px] sm:px-[30px] sm:py-[15px] text-[1.4rem] sm:text-[1.6rem] bg-theme-main text-black rounded-full font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,221,64,0.6)] transition-all duration-300'
                            >
                                <BsEyeFill size={18} /> View Projects
                            </button>
                            
                            <a 
                                href="/Ayyan_CV.pdf" 
                                download="Ayyan_CV.pdf"
                                className='flex items-center gap-[10px] px-[25px] py-[12px] sm:px-[30px] sm:py-[15px] text-[1.4rem] sm:text-[1.6rem] border-[2px] border-theme-main text-theme-main rounded-full font-bold hover:bg-theme-main hover:text-black hover:shadow-[0_0_20px_rgba(255,221,64,0.4)] transition-all duration-300 no-underline'
                            >
                                <FaFileDownload size={18} /> Download CV
                            </a>

                            <button 
                                onClick={handleNavigateToContact}
                                className='flex items-center gap-[10px] px-[25px] py-[12px] sm:px-[30px] sm:py-[15px] text-[1.4rem] sm:text-[1.6rem] border-[2px] border-theme-main text-theme-main rounded-full font-bold hover:bg-theme-main hover:text-black hover:shadow-[0_0_20px_rgba(255,221,64,0.4)] transition-all duration-300'
                            >
                                <FaPaperPlane size={18} /> Contact Me
                            </button>
                        </div>
                    </Animate>

                    {/* Social Icons */}
                    <Animate play={inView} duration={1} delay={0.6} start={{ opacity: 0 }} end={{ opacity: 1 }}>
                        <div className="flex justify-center lg:justify-start gap-[25px] mt-[40px]">
                            <a 
                                href="https://github.com/ayyan-ahmad" 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-[15px] rounded-full border border-white/20 bg-white/5 text-white hover:bg-theme-main hover:text-black hover:border-theme-main hover:shadow-[0_0_20px_rgba(255,221,64,0.5)] transition-all duration-300"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/ayyan-ahmad-5a58a628a/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-[15px] rounded-full border border-white/20 bg-white/5 text-white hover:bg-theme-main hover:text-black hover:border-theme-main hover:shadow-[0_0_20px_rgba(255,221,64,0.5)] transition-all duration-300"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </Animate>
                </div>

                {/* Right Side: Identity Card */}
                <div className='flex-1 flex justify-center lg:justify-end lg:pr-[40px] items-center mt-[50px] lg:mt-0 relative'>
                    
                    {/* Advanced Premium Background Glow for the whole card */}
                    <div className="absolute top-1/2 left-1/2 lg:left-[auto] lg:right-[15%] transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-theme-main/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

                    <Animate play={inView} duration={1.2} delay={0.4} start={{ transform: "scale(0.8) translateY(30px)", opacity: 0 }} end={{ transform: "scale(1) translateY(0px)", opacity: 1 }}>
                        
                        {/* Glassmorphism ID Card with hover float effect */}
                        <div className="bg-gradient-to-br from-[#2a2a35]/60 to-[#151515]/80 backdrop-blur-xl p-[35px] rounded-3xl border border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.5)] hover:border-theme-main/50 hover:shadow-[0_20px_60px_rgba(255,221,64,0.2)] hover:-translate-y-4 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden max-w-[340px] lg:max-w-[400px] w-full z-10">
                            
                            {/* Subtle Inner Glow */}
                            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-theme-main/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-theme-main/40 transition-all duration-700"></div>
                            <div className="absolute bottom-[-50px] left-[-50px] w-[150px] h-[150px] bg-white/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-white/10 transition-all duration-700"></div>

                            {/* 1. Circular Profile Pic with Dual Border */}
                            <div className="relative p-[5px] rounded-full bg-gradient-to-tr from-theme-main/80 to-transparent mb-[25px] z-10 group-hover:rotate-12 transition-all duration-700">
                                <div className="relative w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-[4px] border-[#1e1e24] group-hover:rotate-[-12deg] transition-all duration-700">
                                    <img 
                                        src="/ayyan.png.png" 
                                        alt="Ayyan Ahmad" 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* 2. Name with gradient text effect on hover */}
                            <h2 className="text-[2.6rem] font-extrabold text-white tracking-[1px] m-0 mb-[8px] z-10 group-hover:text-theme-main transition-colors duration-500">
                                Ayyan Ahmad
                            </h2>

                            {/* 3. Subtitle */}
                            <p className="text-[1.5rem] text-gray-300 font-medium m-0 mb-[30px] z-10 bg-white/5 px-[15px] py-[5px] rounded-full border border-white/10">
                                B.Tech CSE (4th Year)
                            </p>

                            {/* 4. Availability Tag */}
                            <div className="flex items-center gap-[12px] bg-[#151515] border border-theme-main/40 px-[22px] py-[12px] rounded-full z-10 shadow-inner group-hover:border-theme-main transition-all duration-500">
                                <span className="relative flex h-[12px] w-[12px]">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-main opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-[12px] w-[12px] bg-theme-main shadow-[0_0_10px_rgba(255,221,64,1)]"></span>
                                </span>
                                <span className="text-white text-[1.2rem] font-bold tracking-[1px] uppercase group-hover:text-theme-main transition-colors duration-500">
                                    Available For Work
                                </span>
                            </div>
                            
                        </div>
                    </Animate>
                </div>
                
            </div>
        </section >
    );
};

export default Home;