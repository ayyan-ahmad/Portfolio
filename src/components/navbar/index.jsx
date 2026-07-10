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

            <ul className={`flex flex-col md:flex-row justify-center md:justify-end w-full md:w-auto absolute md:static top-[80px] md:top-auto left-0 md:left-auto md:bg-transparent transition-all duration-500 ease-in-out md:opacity-100 md:visible md:translate-y-0 ${toggleIcon ? 'translate-y-0 opacity-100 visible bg-[#181820]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_30px_50px_rgba(0,0,0,0.7)] py-[20px]' : 'translate-y-[-20px] opacity-0 invisible -z-10'}`}>
                {data.map((item) => (
                    <li key={item.label} className="border-b border-white/5 last:border-none md:border-none p-[15px_20px] md:p-[0px_10px] m-0">
                        <a
                            className={`block text-[1.4rem] font-bold tracking-[2px] no-underline p-[12px_20px] rounded-2xl transition-all duration-300 md:mr-[1rem] text-center mt-[5px] md:mt-0 relative overflow-hidden ${item.to === activeLink ? 'bg-theme-main text-black shadow-[0_0_20px_rgba(255,221,64,0.4)]' : 'text-gray-300 hover:text-theme-main hover:bg-white/5 border border-transparent'}`}
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
            <div className="md:hidden flex items-center justify-center w-[45px] h-[45px] rounded-xl bg-white/5 border border-white/10 text-theme-main cursor-pointer mr-[20px] hover:bg-theme-main hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,221,64,0.1)] z-[10000]" onClick={handleToggleIcon}>
                {toggleIcon ? <HiX size={26} /> : <FaBars size={24} />}
            </div>
        </nav>
    );
};

export default Navbar; // export component