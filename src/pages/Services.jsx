import React from 'react';
import './Services.css'; // Assuming you have a CSS file for styling
import { FaDatabase, FaLaptopCode, FaApple, FaGithub, FaAirbnb, FaCode } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaPinterestP } from 'react-icons/fa';

const Services = () => {
    return (
        <main>
            <div className='container'>
                <div className='header-div'>
                    <h2>Services</h2>
                </div>
                <div className='header-div'>
                    <h2>Our Services</h2>
                </div>
                <div className='services'>
                    <div className='service'>
                        <FaDatabase className='icon' />
                        <h3>Data Analysis</h3>
                        <p>Transforming raw data into actionable insights.</p>
                    </div>
                    <div className='service'>
                        <FaLaptopCode className='icon' />
                        <h3>Web Development</h3>
                        <p>Building responsive and user-friendly websites.</p>
                    </div>
                    <div className='service'>
                        <FaApple className='icon' />
                        <h3>App Development</h3>
                        <p>Creating mobile applications for iOS and Android.</p>
                    </div>
                    <div className='service'>
                        <FaGithub className='icon' />
                        <h3>Version Control</h3>
                        <p>Managing code changes with Git and GitHub.</p>
                    </div>
                    <div className='service'>
                        <FaAirbnb className='icon' />
                        <h3>UI/UX Design</h3>
                        <p>Designing intuitive user interfaces and experiences.</p>
                    </div>
                    <div className='service'>
                        <FaCode className='icon' />
                        <h3>API Development</h3>
                        <p>Creating RESTful APIs for seamless integration.</p>
                    </div>
                </div>
                <div className='icon-div'>
                    <div className='icon'>
                        <FaFacebook />
                    </div>
                    <div className='icon'>
                        <FaGithub />
                    </div>
                    <div className='icon'>
                        <FaInstagram />
                    </div>
                    <div className='icon'>
                        <FaWhatsapp />
                    </div>
                    <div className='icon'>
                        <FaLinkedin />
                    </div>
                    <div className='icon'>
                        <FaPinterestP />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Services;
