import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaRobot, FaDatabase, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiBootstrap, SiTailwindcss, SiExpress, SiMongodb, SiRender, SiVercel, SiNetlify, SiGooglegemini, SiJsonwebtokens } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const skillsData = [
    {
        label: "PROGRAMMING LANGUAGES",
        data: [
            {
                skillName: "JAVA",
                icon: <FaJava color="#ED8B00" />,
            },
            {
                skillName: "JAVASCRIPT",
                icon: <SiJavascript color="#F7DF1E" />,
            }
        ],
    },
    {
        label: "FRONTEND",
        data: [
            {
                skillName: "HTML",
                icon: <SiHtml5 color="#E34F26" />,
            },
            {
                skillName: "CSS",
                icon: <FaCss3Alt color="#1572B6" />,
            },
            {
                skillName: "BOOTSTRAP",
                icon: <SiBootstrap color="#7952B3" />,
            },
            {
                skillName: "REACT",
                icon: <FaReact color="#61DAFB" />,
            },
            {
                skillName: "TAILWIND CSS",
                icon: <SiTailwindcss color="#06B6D4" />,
            },
        ],
    },
    {
        label: "BACKEND & DATABASE",
        data: [
            {
                skillName: "NODE JS",
                icon: <FaNodeJs color="#339933" />,
            },
            {
                skillName: "EXPRESS",
                icon: <SiExpress color="#FFFFFF" />,
            },
            {
                skillName: "MONGODB",
                icon: <SiMongodb color="#47A248" />,
            },
            {
                skillName: "REST APIS",
                icon: <TbApi color="#007BFF" />,
            },
            {
                skillName: "JWT AUTHENTICATION",
                icon: <SiJsonwebtokens color="#FF00FF" />,
            }
        ],
    },
    {
        label: "TOOLS & PLATFORMS",
        data: [
            {
                skillName: "GIT",
                icon: <FaGitAlt color="#F05032" />,
            },
            {
                skillName: "GITHUB",
                icon: <FaGithub color="#FFFFFF" />,
            },
            {
                skillName: "RENDER",
                icon: <SiRender color="#c3b4b471" />,
            },
            {
                skillName: "VERCEL",
                icon: <SiVercel color="#FFFFFF" />,
            },
            {
                skillName: "NETLIFY",
                icon: <SiNetlify color="#00C7B7" />,
            }
        ]
    },
    {
        label: "CORE CONCEPTS",
        data: [
            {
                skillName: "DATA STRUCTURE & ALGORITHM",
                icon: <FaCode color="#00E5FF" />,
            },
            {
                skillName: "OBJECT ORIENTED PROGRAMMING",
                icon: <FaDatabase color="#FF4B4B" />,
            }
        ]
    },
    {
        label: "AI SKILLS",
        data: [
            {
                skillName: "GOOGLE GEMINI AI",
                icon: <SiGooglegemini color="#1A73E8" />,
            },
            {
                skillName: "PROMPT ENGINEERING",
                icon: <FaRobot color="#00FF41" />,
            }
        ]
    }
];