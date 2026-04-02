import React from "react"; // React import
import './style.scss';


import { FaBars, FaReact } from "react-icons/fa"; // React icon import
import { Link } from "react-router-dom"; // routing ke liye Link
import { useState } from "react";
import { HiX } from "react-icons/hi";


// Navbar menu data
const data = [
    { label: "HOME", to: "/" },        // Home page
    { label: "ABOUT ME", to: "/about" }, // About page
    { label: "SKILLS", to: "/skills" },  // Skills page
    { label: "PROJECTS", to: "/projects" }, // Projects page
    { label: "CONTACT ME", to: "/contact" }, // Contact page
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }






    return (
        <div>
            <nav className="navbar"> {/* Navbar container */}

                <div className="navbar__container"> {/* inner container */}

                    {/* Logo + home link */}
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} /> {/* React icon */}
                    </Link>

                </div>

                {/* Menu list */}
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ""}`}>
                    {data.map((item) => ( // data loop

                        // key={item.label} ka matlab:

                        // 👉 Har item ka label hi uska unique id (key) ban raha hai
                        <li key={item.label} className="navbar__container__menu__item"> {/* list item */}

                            {/* Link for each menu */}
                            <Link
                                className="navbar__container__menu__item__links"
                                to={item.to}
                                onClick={() => setToggleIcon(false)}
                            >
                                {item.label} {/* text show */}
                            </Link>

                        </li>

                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}

                </div>

            </nav>
        </div>
    );
};

export default Navbar; // export component