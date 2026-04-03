import React, { useState, useEffect } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "emailjs-com";
import "./style.scss";

const Contact = () => {

    // ✅ STATE
    const [status, setStatus] = useState(null);

    // ✅ AUTO HIDE POPUP
    useEffect(() => {
        if (status) {
            setTimeout(() => setStatus(null), 3000);
        }
    }, [status]);

    // ✅ EMAIL FUNCTION
    const sendEmail = (e) => {
        e.preventDefault();

       emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    e.target,
    process.env.REACT_APP_PUBLIC_KEY
)
            .then(() => {
                setStatus("success");
            })
            .catch(() => {
                setStatus("error");
            });

        e.target.reset(); // form clear
    };

    return (
        <section id="contact" className="contact">

            {/* ✅ POPUP */}
            {status && (
                <div className={`popup ${status}`}>
                    {status === "success" ? "Message Sent ✅" : "Error ❌"}
                </div>
            )}

            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="contact__content">

                <Animate
                    play
                    duration={1}
                    start={{ transform: "translateX(-200px)" }}
                    end={{ transform: "translateX(0px)" }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>

                <Animate
                    play
                    duration={1}
                    start={{ transform: "translateX(200px)" }}
                    end={{ transform: "translateX(0px)" }}
                >

                    {/* ✅ FORM */}
                    <form className="contact__content__form" onSubmit={sendEmail}>

                        <div className="contact__content__form__controlswrapper">

                            <div>
                                <input required name="name" className="inputName" type="text" />
                                <label className="nameLabel">Name</label>
                            </div>

                            <div>
                                <input required name="email" className="inputEmail" type="email" />
                                <label className="emailLabel">Email</label>
                            </div>

                            <div>
                                <textarea required name="description" className="inputDescription" rows="5" />
                                <label className="descriptionLabel">Description</label>
                            </div>

                        </div>

                        <button type="submit">Submit</button>

                    </form>

                </Animate>
            </div>
        </section>
    );
};

export default Contact;