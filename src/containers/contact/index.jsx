import React, { useState, useEffect } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { FaPaperPlane } from 'react-icons/fa';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import { useInView } from 'react-intersection-observer';
import emailjs from "emailjs-com";
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";
import { GravityStarsBackground } from '../../components/animate-ui/components/backgrounds/gravity-stars';

const Contact = () => {

    // ✅ STATE
    const [status, setStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // ✅ AUTO HIDE POPUP
    useEffect(() => {
        if (status) {
            setTimeout(() => setStatus(null), 4000);
        }
    }, [status]);

    // ✅ EMAIL FUNCTION
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then(() => {
                setStatus("success");
                setIsLoading(false);
                e.target.reset(); // form clear only on success
            })
            .catch(() => {
                setStatus("error");
                setIsLoading(false);
            });
    };

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="contact" ref={ref} className="min-h-screen flex flex-col py-[20px] px-[20px] md:px-[60px] lg:px-[100px] relative overflow-hidden bg-[#151515]">
            {/* Gravity Stars Background */}
            <div className="absolute inset-0 z-0">
                <GravityStarsBackground className="w-full h-full opacity-60" movementSpeed={1.2} />
            </div>

            <div className="relative z-10 w-full flex flex-col flex-1">
                <PageHeaderContent
                    headerText="My Contact"
                    icon={<FaPaperPlane size={40} />}
                />

                <div className="p-[20px]">

                <Animate
                    play={inView}
                    duration={1}
                    start={{ transform: "translateY(50px)", opacity: 0 }}
                    end={{ transform: "translateY(0px)", opacity: 1 }}
                >
                    <div className="mt-[30px] flex flex-col lg:flex-row gap-[40px] bg-[#1e1e24]/80 backdrop-blur-sm p-[30px] md:p-[50px] rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">

                        {/* Decorative Blur */}
                        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-theme-main/10 rounded-full blur-[100px] pointer-events-none"></div>

                        {/* Contact Info Side */}
                        <div className="flex-1 flex flex-col justify-center text-center lg:text-left z-10">
                            <h3 className="text-white text-[3.5rem] md:text-[4.5rem] font-bold mb-[20px] leading-tight">
                                Let's build something <span className="text-theme-main">amazing</span> together.
                            </h3>
                            <p className="text-gray-400 text-[1.6rem] mb-[40px]">
                                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                            </p>

                            <div className="flex flex-col gap-[25px] items-center lg:items-start">
                                <div className="flex items-center gap-[15px] group">
                                    <div className="w-[50px] h-[50px] bg-white/5 rounded-full flex items-center justify-center text-theme-main border border-white/10 group-hover:bg-theme-main group-hover:text-black transition-all duration-300">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <span className="text-white text-[1.6rem]">ayyanahmad2603@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-[15px] group">
                                    <div className="w-[50px] h-[50px] bg-white/5 rounded-full flex items-center justify-center text-theme-main border border-white/10 group-hover:bg-theme-main group-hover:text-black transition-all duration-300">
                                        <FaPhoneAlt size={20} />
                                    </div>
                                    <span className="text-white text-[1.6rem]">+91 9508995197</span>
                                </div>
                                <div className="flex items-center gap-[15px] group">
                                    <div className="w-[50px] h-[50px] bg-white/5 rounded-full flex items-center justify-center text-theme-main border border-white/10 group-hover:bg-theme-main group-hover:text-black transition-all duration-300">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <span className="text-white text-[1.6rem]">Dehradun, Uttarakhand</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <form className="flex-1 z-10 mt-[40px] lg:mt-0 flex flex-col gap-[30px]" onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                <div className="relative">
                                    <input required name="name" className="peer w-full bg-white/5 border border-white/10 rounded-xl p-[18px_20px] transition-all duration-300 text-white outline-none focus:border-theme-main focus:bg-white/10 placeholder-transparent" type="text" placeholder="Name" id="name" />
                                    <label htmlFor="name" className="absolute left-[20px] top-[18px] text-gray-400 text-[1.5rem] transition-all duration-300 peer-focus:-top-[25px] peer-focus:left-0 peer-focus:text-theme-main peer-focus:text-[1.4rem] peer-valid:-top-[25px] peer-valid:left-0 peer-valid:text-[1.4rem] cursor-text">Your Name</label>
                                </div>

                                <div className="relative">
                                    <input required name="email" className="peer w-full bg-white/5 border border-white/10 rounded-xl p-[18px_20px] transition-all duration-300 text-white outline-none focus:border-theme-main focus:bg-white/10 placeholder-transparent" type="email" placeholder="Email" id="email" />
                                    <label htmlFor="email" className="absolute left-[20px] top-[18px] text-gray-400 text-[1.5rem] transition-all duration-300 peer-focus:-top-[25px] peer-focus:left-0 peer-focus:text-theme-main peer-focus:text-[1.4rem] peer-valid:-top-[25px] peer-valid:left-0 peer-valid:text-[1.4rem] cursor-text">Your Email</label>
                                </div>
                            </div>

                            <div className="relative mt-[10px]">
                                <textarea required name="description" className="peer w-full bg-white/5 border border-white/10 rounded-xl p-[18px_20px] transition-all duration-300 text-white outline-none focus:border-theme-main focus:bg-white/10 placeholder-transparent resize-none" rows="5" placeholder="Message" id="message" />
                                <label htmlFor="message" className="absolute left-[20px] top-[18px] text-gray-400 text-[1.5rem] transition-all duration-300 peer-focus:-top-[25px] peer-focus:left-0 peer-focus:text-theme-main peer-focus:text-[1.4rem] peer-valid:-top-[25px] peer-valid:left-0 peer-valid:text-[1.4rem] cursor-text">Your Message</label>
                            </div>

                            {/* ✅ INLINE NOTIFICATION */}
                            {status && (
                                <div className={`flex items-center gap-[15px] p-[15px_20px] rounded-xl border backdrop-blur-md transition-all duration-500 animate-slideIn mt-[10px] ${status === 'success' ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                                    <div className={`flex items-center justify-center min-w-[30px] w-[30px] h-[30px] rounded-full ${status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {status === "success" ? <FaCheckCircle size={16} /> : <FaExclamationCircle size={16} />}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`font-bold text-[1.4rem] ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                            {status === "success" ? "Message Sent!" : "Failed to Send"}
                                        </span>
                                        <span className="text-gray-300 text-[1.2rem] leading-tight">
                                            {status === "success" ? "Thanks for reaching out! I will get back to you soon." : "Failed to connect. Please check your network and try again."}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <button
                                disabled={isLoading}
                                className={`w-full mt-[10px] py-[16px] text-black text-[1.8rem] font-bold rounded-xl shadow-lg transition-all duration-300 flex justify-center items-center gap-[10px] ${isLoading ? 'bg-theme-main/70 cursor-not-allowed' : 'bg-theme-main hover:shadow-[0_0_20px_rgba(255,221,64,0.4)] hover:-translate-y-1'}`}
                                type="submit"
                            >
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="animate-spin" size={20} /> Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>

                    </div>
                </Animate>
            </div>
            </div>
        </section>
    );
};

export default Contact;