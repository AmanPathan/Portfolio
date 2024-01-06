import React from "react";
import './Styles/Projects.css';
import img1 from '../Components/Images/door.webp';
import img2 from '../Components/Images/adhyay.webp';
import img3 from '../Components/Images/weather.png';
import img4 from '../Components/Images/movie.png';
import img5 from '../Components/Images/inacan.png';

const Projects = () => {

    return (
        <>
            <div id="Projects">
                <h2 data-aos="zoom-in">Projects</h2>
                <div className="slider">
                    <div className="slider_center">
                        <div className="slider_element">
                            <div className="slider_element_left">
                                <img src={img1} data-aos="fade-up" data-aos-duration="500" className="slider_img" />
                            </div>
                            <div className="slider_element_right">
                                <p className="project_title">DoorDunes</p>
                                <p className="project_text">DOOR DUNES is a one-of-a-kind and distinctive piece of digital art collection that is offered for sale in OpenSea Marketplace as a non-fungible token (NFT) created on the Ethereum Blockchain.This website is landing page for the DoorDune NFTs.</p>
                                <div className="project_links_div">
                                    <a href="https://github.com/DoorDunes/Door_Dunes_Website" className="project_link"><i class="img-icon fa-brands fa-github"></i></a>
                                    <a href="https://doordunes.com/" target="_blank" className="project_link"><i class="img-icon fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="slider_element">
                            <div className="slider_element_left">
                                <img src={img2} data-aos="fade-up" data-aos-duration="500" className="slider_img" />
                            </div>
                            <div className="slider_element_right">
                                <p className="project_title">Adhyay</p>
                                <p className="project_text">A Static website for organisation named Adhyay.Adhyay is the non-profit organisation which provides free and quality education. Adhyay provides live classes and study materials to students. Built this website in a competition.</p>
                                <div className="project_links_div">
                                    <a href="https://github.com/AmanPathan/Adhyay.github.io" className="project_link"><i class="img-icon fa-brands fa-github"></i></a>
                                    <a href="https://www.adhyay.live/index.html" target="_blank" className="project_link"><i class="img-icon fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="slider_element">
                            <div className="slider_element_left">
                                <img src={img4} data-aos="fade-up" data-aos-duration="500" className="slider_img" />
                            </div>
                            <div className="slider_element_right">
                                <p className="project_title">Movie.Ai</p>
                                <p className="project_text">A Basic Machine Learning Project Movie Recommendation System WebApp build using Python and Reactjs.Based on input movie name it suggests top 5 similar movies.</p>
                                <div className="project_links_div">
                                    <a href="https://gitlab.com/amanpathan526/Movie-Recommendation-System-WebApp" className="project_link"><i class="img-icon fa-brands fa-github"></i></a>
                                    {/* <a href="#" target="_blank" className="project_link"><i class="img-icon fa-solid fa-link"></i></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="slider_element">
                            <div className="slider_element_left">
                                <img src={img3} data-aos="fade-up" data-aos-duration="500" className="slider_img" />
                            </div>
                            <div className="slider_element_right">
                                <p className="project_title">CloudJournal</p>
                                <p className="project_text">Weather Forescasting App named Cloud Journal where we can see weather of current location and search weather of other cities using search functionality. API used in this app is  WeatherAPI.Built using API, HTML, CSS, JS, and React.js</p>
                                <div className="project_links_div">
                                    <a href="https://github.com/AmanPathan/WeatherForecastApp" className="project_link"><i class="img-icon fa-brands fa-github"></i></a>
                                    <a href="https://cloudjournal.netlify.app/" target="_blank" className="project_link"><i class="img-icon fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="slider_element">
                            <div className="slider_element_left">
                                <img src={img5} data-aos="fade-up" data-aos-duration="500" className="slider_img" />
                            </div>
                            <div className="slider_element_right">
                                <p className="project_title">In-A-Can - Clone</p>
                                <p className="project_text">In-A-Can is a beverages company which provides Crafted Canned Cocktails. This Website is a clone of their official Website.</p>
                                <div className="project_links_div">
                                    <a href="https://github.com/AmanPathan/inacan" className="project_link"><i class="img-icon fa-brands fa-github"></i></a>
                                    <a href="https://in-a-can.netlify.app/" target="_blank" className="project_link"><i class="img-icon fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="slider_element">
                            <div className="slider_element_left">
                                <img src={img4} data-aos="fade-up" data-aos-duration="500" className="slider_img" />
                            </div>
                            <div className="slider_element_right">
                                <p className="project_title">ToDoList</p>
                                <p className="project_text">A To-Do List built to list down our tasks.A basic to do list created using React.js having functionality to Add, Delete, Update list. We can see Completed Tasks and we can Update list any time and clear at one click.</p>
                                <div className="project_links_div">
                                    <a href="#" className="project_link"><i class="img-icon fa-brands fa-github"></i></a>
                                    <a href="https://rememberyourtask.netlify.app/" target="_blank" className="project_link"><i class="img-icon fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;


{/* <div className="proj_container proj1">
                    <div className="proj_div" data-aos="slide-right">
                        <div className="proj_img proj_img1">
                            <div className="inner inner1">
                                Door Dunes - A NFT Project
                                <div className="showInner">
                                    Door Dunes is a one-of-a-kind and distinctive piece of digital art collection that is offered for sale in OpenSea Marketplace as a non-fungible token (NFT) created on the Ethereum Blockchain.
                                    <div className="buttons">
                                        <a className="btn_proj" href="#">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://doordunes.com/">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="proj_div" data-aos="slide-left">
                        <div className="proj_img proj_img2">
                            <div className="inner inner1">
                                Movie.Ai - WebApp
                                <div className="showInner">
                                    A Basic Machine Learning Project Movie Recommendation System WebApp build using Python and Reactjs.Based on input movie name it suggests top 5 similar movies.                                    <div className="buttons">
                                        <a className="btn_proj" href="https://gitlab.com/amanpathan526/Movie-Recommendation-System-WebApp">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://gitlab.com/amanpathan526/Movie-Recommendation-System-WebApp">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="proj_container">
                    <div className="proj_div" data-aos="slide-right">
                        <div className="proj_img proj_img3">
                            <div className="inner inner1">
                                Adhyay - A Non-Profit Org.
                                <div className="showInner">
                                    A Educational Website named Adhyay is the non-profit organisation which provides free and quality education all over India.It's a group project built in a competition.                                    <div className="buttons">
                                        <a className="btn_proj" href="#">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://amanpathan.github.io/Adhyay.github.io/index.html">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj_div" data-aos="slide-left">
                        <div className="proj_img proj_img4">
                            <div className="inner inner1">
                                In-A-Can - A Clone Project
                                <div className="showInner">
                                    In-A-Can is a beverages company which provides Crafted Canned Cocktails. This Website is a clone of their official Website.                                    <div className="buttons">
                                        <a className="btn_proj" href="#">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://in-a-can.netlify.app/">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="proj_container">
                    <div className="proj_div" data-aos="slide-right">
                        <div className="proj_img proj_img5">
                            <div className="inner">
                                Remember Your Task
                                <div className="showInner">
                                    A To-Do List built to list down our tasks.A basic to do list created using React.js having functionality to Add, Delete, Update list. We can see Completed Tasks and we can Update list any time and clear at one click.
                                    <div className="buttons">
                                        <a className="btn_proj" href="#">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://rememberyourtask.netlify.app/">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj_div" data-aos="slide-left">
                        <div className="proj_img proj_img6">
                            <div className="inner">
                                Cloud Journal
                                <div className="showInner">
                                    Weather Forescasting App named<br></br> `Cloud Journal` where we can see weather of current location and search weather of other cities. API used in this app is  WeatherAPI.
                                    <div className="buttons">
                                        <a className="btn_proj" href="#">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://cloudjournal.netlify.app/">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="proj_container">
                    <div className="proj_div" data-aos="slide-right">
                        <div className="proj_img proj_img7">
                            <div className="inner">
                                Kingdom Hotels
                                <div className="showInner">
                                    It's a Hotel's Website where we can see and book hotel rooms as per our need.It's A static website made using HTML and CSS, It has no backend.
                                    <div className="buttons">
                                        <a className="btn_proj" href="#">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://kingdomhotels.netlify.app/">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj_div" data-aos="slide-left">
                        <div className="proj_img proj_img8">
                            <div className="inner">
                                Covid News App
                                <div className="showInner">
                                    A basic API integrated Webapp which tells us latest updates of Covid-19.It shares current data regarding number of Activd or Confirmed Cases,Deaths,Recoveries,.
                                    <div className="buttons">
                                        <a className="btn_proj" href="#">GitHub <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                        <a className="btn_proj" href="https://amanpathan.github.io/covidapp/">See <i class="fa-solid fa-arrow-right arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}