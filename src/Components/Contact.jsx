import React from "react";
import './Styles/Contact.css';
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
    const [state, handleSubmit] = useForm("mbjvgrbz");
    if (state.succeeded) {
        return (
            <div className="response_main" data-aos="zoom-in">
                <div className="contact_art" data-aos="zoom-in">
                    <h3 className="h3">Contact <span className="prof">Me</span></h3>
                </div>
                <div className="contact_right" data-aos="zoom-in">
                    <div className="response_div">
                        <p className="response"><span className="thank">Thank you</span> for contacting us!</p><p className="response"> Your message has been received.</p>
                    </div>
                </div>

            </div>
        );
    }

    return (
        <>
            <div id="Contact">
                <div className="contact_div" data-aos="fade-up">
                <div className="contact_art1" data-aos="zoom-in-right">
                        <h3 className="h3">Contact <span className="prof">Me</span></h3>
                    </div>
                    <div className="contact_right" data-aos="zoom-in-left">

                        <form onSubmit={handleSubmit}>
                            <input
                                id="name"
                                type="name"
                                name="name"
                                placeholder="Your Name"
                                className="name input"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="email input"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Lets's Talk About Everything. Write Your Message Here..."
                                className="text_msg input"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting} className="submit_btn">
                                Send Message <i class="fa-solid fa-share"></i>
                            </button>
                        </form>
                    </div>
                    <div className="contact_art" data-aos="zoom-in-right">
                        <h3 className="h3">Contact <span className="prof">Me</span></h3>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;
