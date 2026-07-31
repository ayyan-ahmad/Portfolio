import React from 'react';
import PageHeaderContent from '../../components/pageHeader';

import { Animate } from 'react-simple-animate';
import { useInView } from 'react-intersection-observer';
import { FaUserAlt } from "react-icons/fa";
import { GravityStarsBackground } from '../../components/animate-ui/components/backgrounds/gravity-stars';
const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" ref={ref} className='min-h-screen flex flex-col py-[20px] px-[20px] md:px-[60px] lg:px-[100px] bg-[#151515] relative overflow-hidden'>
            {/* Gravity Stars Background */}
            <div className="absolute inset-0 z-0">
                <GravityStarsBackground className="w-full h-full opacity-60" movementSpeed={1.2} />
            </div>

            <div className="relative z-10 w-full flex flex-col flex-1">
                <PageHeaderContent
                    headerText="About Me"
                    icon={<FaUserAlt size={40} />}
                />

                <div className='w-full mt-[30px] pb-[50px]'>
                    <Animate
                        play={inView}
                        duration={0.8}
                        delay={0.1}
                        easeType="cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                        start={{ transform: "translateY(50px)", opacity: 0 }}
                        end={{ transform: "translateY(0px)", opacity: 1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] w-full">

                            {/* 1. Intro Card (Spans 2 columns) */}
                            <div className="md:col-span-2 bg-[#1e1e24]/80 backdrop-blur-sm p-[30px] md:p-[40px] rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-theme-main/30 transition-all duration-500">
                                <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-theme-main/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-theme-main/20 transition-all duration-500"></div>

                                <div className="flex items-center gap-[15px] mb-[20px]">
                                    <h3 className='text-[2.5rem] font-bold text-white'>
                                        Hi, I'm <span className="text-theme-main">Ayyan Ahmad</span>
                                    </h3>
                                </div>
                                <p className='text-gray-400 text-[1.6rem] leading-[1.8]'>
                                    I am a passionate web developer and Computer Science student. I love transforming complex problems into elegant, scalable, and user-centric digital solutions. For me, coding is not just about writing syntax, it's about building seamless experiences that make an impact.
                                </p>
                            </div>

                            {/* 2. Personal Info Card */}
                            <div className="md:col-span-1 bg-[#1e1e24]/80 backdrop-blur-sm p-[30px] md:p-[40px] rounded-3xl border border-white/5 shadow-2xl hover:border-theme-main/30 transition-all duration-500">
                                <div className="flex items-center gap-[15px] mb-[20px]">
                                    <h3 className='text-[2.2rem] font-bold text-white'>Profile</h3>
                                </div>
                                <ul className="flex flex-col gap-[15px]">
                                    <li className="flex flex-col border-b border-white/5 pb-[10px]">
                                        <span className="text-gray-500 text-[1.3rem] uppercase tracking-wider mb-[2px]">Education</span>
                                        <div className="flex justify-between items-center mt-[2px]">
                                            <span className="text-white text-[1.5rem] font-medium">B.Tech CSE</span>
                                            <span className="text-theme-main text-[1.2rem] font-medium bg-theme-main/10 px-[8px] py-[2px] rounded-md border border-theme-main/20">2023 - 2027</span>
                                        </div>
                                        <span className="text-theme-main/80 text-[1.3rem] mt-[4px]">Dev Bhoomi Uttarakhand University</span>
                                        <span className="text-gray-400 text-[1.3rem] mt-[2px]">Current CGPA: <strong className="text-white font-medium">8.4</strong></span>
                                    </li>
                                    <li className="flex flex-col">
                                        <span className="text-gray-500 text-[1.3rem] uppercase tracking-wider mb-[2px]">Interests</span>
                                        <span className="text-white text-[1.5rem] font-medium">Web Dev, UI/UX, AI Trends</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 3. DSA Card */}
                            <div className="md:col-span-1 bg-[#1e1e24]/80 backdrop-blur-sm p-[30px] md:p-[40px] rounded-3xl border border-white/5 shadow-2xl hover:border-theme-main/30 transition-all duration-500">
                                <div className="flex items-center gap-[15px] mb-[20px]">
                                    <h3 className='text-[2.2rem] font-bold text-white'>Problem Solving</h3>
                                </div>
                                <p className='text-gray-400 text-[1.5rem] leading-[1.7]'>
                                    Currently intensely practicing <strong className="text-white font-medium">Data Structures & Algorithms (DSA)</strong>. Sharpening my logical thinking and optimizing solutions for upcoming placements.
                                </p>
                            </div>

                            {/* 4. MERN & AI Card (Spans 2 columns) */}
                            <div className="md:col-span-2 bg-[#1e1e24]/80 backdrop-blur-sm p-[30px] md:p-[40px] rounded-3xl border border-theme-main/30 shadow-[0_0_30px_rgba(255,221,64,0.05)] relative overflow-hidden group hover:border-theme-main/60 transition-all duration-500">
                                {/* Glow */}
                                <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-theme-main/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-theme-main/20 transition-all duration-500"></div>

                                <div className="flex items-center gap-[15px] mb-[20px] relative z-10">
                                    <h3 className='text-[2.5rem] font-bold text-white'>
                                        Building with <span className="text-theme-main">MERN & AI</span>
                                    </h3>
                                </div>
                                <p className='text-gray-400 text-[1.6rem] leading-[1.8] relative z-10'>
                                    Focused on developing robust, full-stack web applications using the <strong className="text-white font-medium">MERN stack</strong> (MongoDB, Express, React, Node.js).
                                    I am actively integrating cutting-edge Artificial Intelligence like <strong className="text-theme-main">Google Gemini AI</strong> into my projects to build smart, next-generation web experiences.
                                </p>
                            </div>

                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;