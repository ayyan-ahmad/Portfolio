import React from 'react';
import PageHeaderContent from '../../components/pageHeader';
import { FaLaptopCode } from 'react-icons/fa';
import { skillsData } from './utils';
import { Animate } from 'react-simple-animate';
import { Line } from 'rc-progress';
import { useInView } from 'react-intersection-observer';
import { GravityStarsBackground } from '../../components/animate-ui/components/backgrounds/gravity-stars';

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="skills" ref={ref} className='min-h-screen flex flex-col py-[20px] px-[20px] md:px-[60px] lg:px-[100px] relative overflow-hidden bg-[#151515]'>
            
            {/* Gravity Stars Background */}
            <div className="absolute inset-0 z-0">
                <GravityStarsBackground className="w-full h-full opacity-60" />
            </div>

            <div className="relative z-10 flex flex-col flex-1 w-full">
                <PageHeaderContent
                    headerText="Skills"
                    icon={<FaLaptopCode size={40} />}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] p-[20px] w-full mt-[20px]'>
                    {skillsData.map((skill, index) => (
                        <Animate
                            key={index}
                            play={inView}
                            duration={0.6}
                            delay={index * 0.15}
                            start={{ transform: "translateY(50px)", opacity: 0 }}
                            end={{ transform: "translateY(0px)", opacity: 1 }}
                            render={({ style }) => (
                                <div style={style} className="h-full w-full">
                                    <div className='w-full h-full bg-[#1e1e24]/80 backdrop-blur-sm p-[20px] md:p-[25px] rounded-2xl border border-white/5 shadow-lg hover:shadow-[0_10px_30px_rgba(255,221,64,0.15)] transition-all duration-500 hover:-translate-y-2'>

                                    <h3 className='inline-block text-[2rem] md:text-[2.2rem] font-bold text-theme-main mb-[20px] tracking-[1px] relative pb-[8px] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-theme-main after:rounded-[10px]'>
                                        {skill.label}
                                    </h3>
                                    <div className='w-full'>
                                        {skill.data.map((item, innerIndex) => (
                                                <div key={innerIndex} className='mb-[20px]'>
                                                    <p className='text-[1.5rem] md:text-[1.6rem] text-gray-300 mb-[5px]'>{item.skillName}</p>
                                                    <Line
                                                        percent={parseInt(item.percentage)}
                                                        strokeColor="var(--yellow-theme-main-color)"
                                                        strokeWidth="2"
                                                        trailWidth="2"
                                                        strokeLinecap="round"
                                                        trailColor="rgba(255,255,255,0.05)"
                                                    >
                                                    </Line>

                                                </div>
                                        ))}
                                    </div>

                                    </div>
                                </div>
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;