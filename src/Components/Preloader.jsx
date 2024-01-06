import React from 'react';
import './Styles/Preloader.css';
const Preloader = () => {

    return (
        <>
            <div className="preloader">
                <div className="texts-container">
                    <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Greetings,</span>
                    <span data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">Visitor!</span>
                    <span data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1500">Welcome to My Portfolio.</span>
                </div>
            </div>
        </>)
}

export default Preloader;