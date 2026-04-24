import React from 'react';
import PageHeaderContent from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import image1 from "../../helper/images/image1.png";
import image2 from "../../helper/images/image2.png";
import image3 from "../../helper/images/image3.png";
import image4 from "../../helper/images/image4.png";
import './style.scss';
import { useState } from 'react';

const projectData = [
    {
        id: 2,
        name: "Staylio",
        image: image1,
        link: 'https://staylio-napw.onrender.com/listings',
        filterId: 2



    },


    {
        id: 3,
        name: "Weather Checker",
        image: image3,
        link: 'https://weather-checker-2603.netlify.app/',

        filterId: 3

    },
    {
        id: 4,
        name: "Spotify Landing Page",
        image: image2,
        link: 'https://spotify-landing-page-2603.netlify.app',
        filterId: 3
    },

    {
        id: 5,
        name: "Notes-App",
        image: image4,
        link: 'https://notes-app-2603.netlify.app',
        filterId: 3
    }

]
const filterProjectsData = [
    {
        filterId: 1,
        label: "All"
    },
    {
        filterId: 2,
        label: "Development"
    },


    {
        filterId: 3,
        label: "Frontend"
    }
]

const Projects = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredvalue, setHoveredValue] = useState(null);


    const handleFilter = (currId) => {
        setFilteredValue(currId);


    }

    const filteredItems = filteredvalue === 1 ? projectData : projectData.filter((item) => item.filterId === filteredvalue);

    const handleHover = (index) => {
        setHoveredValue(index);
        if (index !== null) {
            console.log("Hovered project:", filteredItems[index].name);
        }
    };

    return (
        <section id="projects" className='projects'>
            <PageHeaderContent
                headerText="Projects"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='projects__contents'>
                <ul className='projects__contents__filters'>
                    {filterProjectsData.map((item) => (
                        <li onClick={() => { handleFilter(item.filterId) }} key={item.filterId} className={item.filterId === filteredvalue ? 'active' : ''}>
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className='projects__contents__cards' >
                    {filteredItems.map((item, index) => (
                        <div key={item.id} className='projects__contents__cards__item'
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className='projects__contents__cards__item__img-wrapper'>
                                <a href={item.link} target="_blank" rel='noopener noreferrer'>
                                    <img src={item.image} alt="" />
                                </a>
                            </div>
                            <div className="overlay">
                                {index === hoveredvalue && (
                                    <div>
                                        <p>{item.name}</p>
                                        <button onClick={() => window.open(item.link, "_blank")}>
                                            View Project
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;