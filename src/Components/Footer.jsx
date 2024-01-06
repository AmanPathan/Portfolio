import React from "react";
import './Styles/Footer.css';
import { Link } from 'react-scroll';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="foot_address" data-aos="zoom-in">
                    <h3 className="foot_tag">Links</h3>
                    <div className='footer_div footer_div0'>
                        <div className='footer_div1'>
                            <ul className='foot_ul'><li className='foot_li' smooth={true} offset={0} duration={200}><Link className='foot_link' to='Nav'><i class="fa-solid fa-arrow-right"></i> Home</Link></li></ul>
                            <ul className='foot_ul'><li className='foot_li'><Link className='foot_link' to='About' smooth={true} offset={0} duration={500}><i class="fa-solid fa-arrow-right"></i> About</Link></li></ul>
                            <ul className='foot_ul'><li className='foot_li'><Link className='foot_link' to='Skills' smooth={true} offset={0} duration={500}><i class="fa-solid fa-arrow-right"></i> Skills</Link></li></ul>
                        </div>
                        <div className="footer_div2">
                            <ul className='foot_ul'><li className='foot_li'><Link className='foot_link' to='Projects' smooth={true} offset={0} duration={500}><i class="fa-solid fa-arrow-right"></i> Projects</Link></li></ul>
                            <ul className='foot_ul'><li className='foot_li'><Link className='foot_link' to='Contact' smooth={true} offset={0} duration={500}><i class="fa-solid fa-arrow-right"></i> Contact</Link></li></ul>
                        </div>
                    </div>
                </div>
                <div className="foot_address" data-aos="zoom-in">
                    <h3 className="foot_tag">Let's Work Together!</h3>
                    <div className="para_div">
                        <p className="para">Transform your ideas into reality. Let's collaborate on your next project.Don't hesitate to get in touch. I'm just an email away and excited to hear from you. Thank You!</p>
                    </div>
                </div>
                <div className="foot_address" data-aos="zoom-in">
                    <h3 className="foot_tag">Get in Touch Today</h3>
                    <div className="para_div">
                        <p className="para"><i class="fa-solid fa-location-dot foot_ico"></i> Akurdi, Pune, 411 022</p>
                        <p className="para"><i class="fa-solid fa-phone-volume foot_ico"></i> +91 9136789756</p>
                        <p className="para"><i class="fa-solid fa-envelope foot_ico"></i> amanpathan526@gmail.com</p>
                        <p className="para"><i class="fa-solid fa-envelope foot_ico"></i> amanofficial526@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="foot_social_link" >
                <div className="foot_social_div">
                    <a href="https://github.com/amanpathan" className="foot_social_link"><i class="fa-brands fa-github foot_contact_ico"></i></a>
                    <a href="https://www.linkedin.com/in/aman-pathan-a006ab202/" className="foot_social_link"><i class="fa-brands fa-linkedin-in foot_contact_ico"></i></a>
                    <a href="https://www.instagram.com/aman__a__pathan/" className="foot_social_link"><i class="fa-brands fa-instagram foot_contact_ico"></i></a>
                    <a href="https://twitter.com/aman_a_pathan" className="foot_social_link"><i class="fa-brands fa-twitter foot_contact_ico"></i></a>
                    <a href="https://leetcode.com/amanpathan526/" className="foot_social_link"><svg className="leetcode" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z" /></svg></a>
                </div>
            </div>
            <div className="foot_credits">
                Copyright © 2023 | Designed and Developed by  <a href="https://www.linkedin.com/in/aman-pathan-a006ab202/" target="_blank" className="information"> Aman Pathan</a>
            </div>
        </>
    )
}

export default Footer;