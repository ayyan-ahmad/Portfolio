import React, { useState, useEffect } from "react"; // React import
import { FaBars, FaReact } from "react-icons/fa"; // React icon import
import { HiX } from "react-icons/hi";

// Navbar menu data
const data = [
    { label: "HOME", to: "#home" },        // Home page
    { label: "ABOUT ME", to: "#about" }, // About page
    { label: "SKILLS", to: "#skills" },  // Skills page
    { label: "PROJECTS", to: "#projects" }, // Projects page
    { label: "CONTACT ME", to: "#contact" }, // Contact page
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for navbar

            for (let i = data.length - 1; i >= 0; i--) {
                const sectionId = data[i].to.substring(1);
                const section = document.getElementById(sectionId);

                if (section && section.offsetTop <= scrollPosition) {
                    setActiveLink(data[i].to);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on load to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <nav className="bg-theme-nav h-[80px] flex justify-between items-center text-[1.2rem] sticky top-0 z-[9999] w-full">
            <div className="flex items-center w-full h-full px-[20px] flex-1">
                <a href="#home" className="text-theme-main cursor-pointer">
                    <FaReact size={30} className="animate-[spin_8s_linear_infinite]" />
                </a>
            </div>

            <ul className={`flex flex-col md:flex-row justify-center md:justify-end w-full md:w-auto absolute md:static top-[80px] md:top-auto left-[-118%] md:left-auto bg-[#181818] md:bg-transparent transition-all duration-300 ease-in-out opacity-100 ${toggleIcon ? 'left-0' : ''}`}>
                {data.map((item) => (
                    <li key={item.label} className="border-b border-[#181818] md:border-none p-[20px_0px] md:p-[0px_10px] m-0">
                        <a
                            className={`block text-[1.4rem] font-medium tracking-[1px] no-underline p-[8px_20px] rounded-full transition-all duration-300 md:mr-[1rem] text-center mt-[10px] md:mt-0 relative overflow-hidden ${item.to === activeLink ? 'bg-theme-main/10 text-theme-main border border-theme-main/50 shadow-[0_0_15px_rgba(255,221,64,0.15)] backdrop-blur-md' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                            href={item.to}
                            onClick={() => {
                                setToggleIcon(false);
                                setActiveLink(item.to);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="md:hidden block text-theme-main cursor-pointer pr-[20px]" onClick={handleToggleIcon}>
                {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
            </div>
        </nav>
    );
};

export default Navbar; // export component