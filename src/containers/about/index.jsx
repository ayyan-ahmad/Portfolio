import React from 'react';
import PageHeaderContent from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './style.scss';
import {
    FaDev,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGithub,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const personalDetails = [
    {
        label: "Name",
        value: "Ayyan Ahmad",
    },
    {
        label: "Age",
        value: "22",
    },
    {
        label: "Address",
        value: "Dehradun,Uttarakhand,India",
    },
    {
        label: "Email",
        value: "ayyanahmad2603@gmail.com",
    },
    {
        label: "Contact No",
        value: "+919508995197",
    },
];
const About = () => {
    return (
        <section id="about" className='about'>
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />


            <div className='about__content'>
                <div className='about__content__personalWrapper'>
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateX(-900px)", opacity: 0 }}
                        end={{ transform: "translateX(0px)", opacity: 1 }}
                    >
                        <h3 className='about__content__header-text'>
                            Web Developer
                        </h3>
                        <p>I am a Computer Science student with a strong interest in web development.
                            I love creating clean, responsive, and interactive web applications.
                            Currently, I am focused on mastering the MERN stack and improving my problem-solving skills.</p>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0.5}
                        start={{ transform: "translateX(500px)", opacity: 0 }}
                        end={{ transform: "translateX(0px)", opacity: 1 }}
                    >
                        <h3 className="personalInformationHeaderText">
                            Personal Information
                        </h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>

                    </Animate>
                </div>
                <div className='about__content__serviceWrapper'>

                    <Animate play duration={1} delay={1} start={{ opacity: 0 }} end={{ opacity: 1 }}>

                        <div className='about__content__serviceWrapper__innerContent'>
                            <div >
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div> <FaReact size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div> <FaNodeJs size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div> <SiExpress size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div> <FaDatabase size={60} color="var(--yellow-theme-main-color)" /></div>
                            <div> <FaGithub size={60} color="var(--yellow-theme-main-color)" /></div>
                        </div>

                    </Animate>

                </div>



            </div>
        </section>
    );
};

export default About;