import React from 'react';
import PageHeaderContent from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './style.scss';

const Skills = () => {
    return (
        <section id="skills" className='skills'>
            <PageHeaderContent
                headerText="Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='skills__content__wrapper'>
                {skillsData.map((skill, index) => (
                    <div key={index} className='skills__content__wrapper__innerContent'>

                        <Animate
                            play
                            duration={1}
                            delay={0.5}
                            start={{ transform: "translateX(-200px)", opacity: 0 }}
                            end={{ transform: "translateX(0px)", opacity: 1 }}
                        >
                            <h3 className='skills__content__wrapper__innerContent__header-text'>
                                {skill.label}
                            </h3>
                            <div className='skills__content__wrapper__innerContent__data'>
                                {skill.data.map((item, innerIndex) => (
                                    <AnimateKeyframes key={innerIndex}

                                        play
                                        duration={1}
                                        keyframes={["opacity: 1", "opacity: 0"]}
                                        iterationCount="1"
                                    >
                                        <div className='progressbar'>
                                            <p>{item.skillName}</p>
                                            <Line
                                                percent={parseInt(item.percentage)}
                                                strokeColor="var(--yellow-theme-main-color)"
                                                strokeWidth="2"
                                                trailWidth="2"
                                                strokeLinecap="square"
                                            >
                                            </Line>

                                        </div>
                                    </AnimateKeyframes>
                                ))}
                            </div>

                        </Animate>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;