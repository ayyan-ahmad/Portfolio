import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeader';
import { FaBriefcase } from 'react-icons/fa';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Animate } from 'react-simple-animate';
import { useInView } from 'react-intersection-observer';
import { GravityStarsBackground } from '../../components/animate-ui/components/backgrounds/gravity-stars';
import image1 from "../../helper/images/image1.png";
import image2 from "../../helper/images/image2.png";
import image3 from "../../helper/images/image3.png";
import image4 from "../../helper/images/image4.png";
import image5 from "../../helper/images/image5.png";
import image6 from "../../helper/images/image6.png";

const projectData = [
    {
        id: 2,
        name: "Staylio",
        description: "A comprehensive real estate and hotel booking platform featuring advanced search, property filtering, and a seamless booking experience.",
        techStack: ["Bootstrap", "Node.js", "Express", "MongoDB"],
        image: image1,
        link: 'https://staylio-napw.onrender.com/listings',
        github: 'https://github.com/ayyan-ahmad/Staylio',
        filterId: 2
    },
    {
        id: 3,
        name: "Weather Checker",
        description: "A dynamic weather forecasting application providing real-time data, location-based weather updates, and a sleek user interface.",
        techStack: ["React", "OpenWeather API", "CSS"],
        image: image3,
        link: 'https://weather-checker-2603.netlify.app/',
        github: 'https://github.com/ayyan-ahmad/Weather-Checker-React',
        filterId: 3
    },
    {
        id: 4,
        name: "Spotify Landing Page",
        description: "A pixel-perfect, responsive clone of the Spotify landing page built to demonstrate modern UI/UX design principles and layout techniques.",
        techStack: ["HTML", "CSS"],
        image: image2,
        link: 'https://spotify-landing-page-2603.netlify.app',
        github: 'https://github.com/ayyan-ahmad/Spotify-Landing-Page',
        filterId: 3
    },
    {
        id: 5,
        name: "Notes-App",
        description: "A feature-rich note-taking application supporting persistent local storage, categorization, and a clean, distraction-free environment.",
        techStack: ["React", "LocalStorage", "Tailwind CSS"],
        image: image4,
        link: 'https://ayyan-react-notes-app.netlify.app/',
        github: 'https://github.com/ayyan-ahmad/react-notes-app',
        filterId: 3
    },
    {
        id: 6,
        name: "Gallery App",
        description: "An elegant image gallery application featuring smooth image loading, grid layouts, and interactive viewing options.",
        techStack: ["React", "CSS Modules"],
        image: image5,
        link: 'https://ayyan-gallery-project.netlify.app/',
        github: 'https://github.com/ayyan-ahmad/react-gallery-project',
        filterId: 3
    },
    {
        id: 7,
        name: "JobFit AI",
        description: "An AI-powered job matching tool that analyzes resumes against job descriptions to provide compatibility scores and tailored feedback.",
        techStack: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "OpenAI"],
        image: image6,
        link: 'https://job-fit-ai-plum.vercel.app/',
        github: 'https://github.com/ayyan-ahmad',
        filterId: 2
    }
]

const filterProjectsData = [
    { filterId: 2, label: "Development" },
    { filterId: 3, label: "Frontend" }
]

const Projects = () => {
    const [filteredvalue, setFilteredValue] = useState(2);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleFilter = (currId) => {
        setFilteredValue(currId);
    }

    const filteredItems = filteredvalue === 1 ? projectData : projectData.filter((item) => item.filterId === filteredvalue);

    return (
        <section id="projects" ref={ref} className='min-h-screen flex flex-col py-[20px] px-[20px] md:px-[60px] lg:px-[100px] bg-[#151515] relative overflow-hidden'>
            {/* Gravity Stars Background */}
            <div className="absolute inset-0 z-0">
                <GravityStarsBackground className="w-full h-full opacity-60" />
            </div>

            <div className="relative z-10 w-full flex flex-col flex-1">
                <PageHeaderContent
                    headerText="Projects"
                    icon={<FaBriefcase size={40} />}
                />
                <div className='p-[20px] w-full'>
                    <ul className='flex justify-start p-[10px] rounded-[25px] border border-dashed border-theme-main w-max'>
                    {filterProjectsData.map((item) => (
                        <li
                            onClick={() => { handleFilter(item.filterId) }}
                            key={item.filterId}
                            className={`inline-block text-[11px] sm:text-[14px] md:text-[16px] cursor-pointer relative text-theme-main uppercase p-[12px_10px] transition-all duration-300 ease-in-out overflow-hidden ${item.filterId === filteredvalue ? 'bg-theme-main !text-black rounded-[25px]' : ''}`}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem] mt-[30px]' >
                    {filteredItems.map((item, index) => (
                        <Animate
                            key={item.id}
                            play={inView}
                            duration={0.8}
                            delay={index * 0.15}
                            easeType="cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                            start={{ transform: "perspective(1000px) rotateX(20deg) translateY(80px) scale(0.9)", opacity: 0 }}
                            end={{ transform: "perspective(1000px) rotateX(0deg) translateY(0px) scale(1)", opacity: 1 }}
                        >
                            <div className='flex flex-col bg-[#1e1e24]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(255,221,64,0.1)] transition-all duration-500 hover:-translate-y-2 group h-full'>

                                {/* Image Section */}
                                <div className='h-[220px] w-full overflow-hidden relative border-b border-white/10'>
                                    <a href={item.link} target="_blank" rel='noopener noreferrer' className="h-full w-full block">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </a>
                                    {/* Optional dark overlay on hover */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col flex-1 p-[20px]">
                                    <h3 className="text-white text-[2.2rem] font-bold mb-[10px] group-hover:text-theme-main transition-colors duration-300">{item.name}</h3>
                                    <p className="text-gray-400 text-[1.4rem] leading-[1.6] mb-[20px] line-clamp-3 flex-1">{item.description}</p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-[8px] mb-[25px]">
                                        {item.techStack.map((tech, i) => (
                                            <span key={i} className="bg-white/5 border border-white/10 text-gray-300 text-[1.1rem] px-[10px] py-[4px] rounded-md tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-[15px] mt-auto">
                                        <a
                                            href={item.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center gap-[8px] py-[10px] rounded-lg border border-white/20 text-white text-[1.4rem] font-medium hover:bg-white/10 transition-colors"
                                        >
                                            <FaGithub size={18} /> GitHub
                                        </a>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center gap-[8px] py-[10px] rounded-lg bg-theme-main text-black text-[1.4rem] font-bold hover:brightness-110 transition-all"
                                        >
                                            <FaExternalLinkAlt size={16} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                    ))}
                </div>
            </div>
            </div>
        </section>
    );
};

export default Projects;