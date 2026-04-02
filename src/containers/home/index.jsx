import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './style.scss';

const Home = () => {
    const navigate = useNavigate();
    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    }
    return (
        <section id='home' className='home'>
            <div className='home_text-wrapper'>
                <h1>
                    Hello, I'm Ayyan <br />
                    Web Developer
                </h1>
            </div>
            <Animate play duration={1} delay={1} start={{ transform: "translateX(-100px)", opacity: 0 }} end={{ transform: "translateX(0px)", opacity: 1 }}>
                <div className='home_contact-me'>
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                </div>
            </Animate>
        </section >
    );
};

export default Home;