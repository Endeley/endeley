import React from 'react';
import './PortFolio.css';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaPinterestP } from 'react-icons/fa';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpeg';
import p4 from '../assets/images/p4.png';
import p5 from '../assets/images/p5.png';
import p6 from '../assets/images/p6.jpg';
import p7 from '../assets/images/p7.jpg';
import p8 from '../assets/images/p8.jpg';
import p9 from '../assets/images/p9.jpg';
import p10 from '../assets/images/p10.png';
import p11 from '../assets/images/p11.webp';
import p12 from '../assets/images/p12.png';
import p13 from '../assets/images/p13.jpg';
import p14 from '../assets/images/p14.jpg';
import p15 from '../assets/images/p15.jpg';

const PortFolio = () => {
    return (
        <main className='portfolio'>
            <div className='portfolio-header'>
                <h1>PortFolio</h1>
            </div>
            <div className='portfolio-intro'>
                <h2>My Recent Works</h2>
                <p>Here are a few projects I've worked on recently. Click on the images to see more details.</p>
                <p>Feel free to reach out if you have any questions!</p>
                <p>Thanks for visiting my portfolio!</p>
            </div>
            <div className='portfolio-container'>
                <div className='portfolio-item'>
                    <img src={p1} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p2} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p3} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p4} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p5} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p6} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p7} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p8} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p9} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p10} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p11} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p12} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p13} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p14} alt='Project 1' />
                </div>
                <div className='portfolio-item'>
                    <img src={p15} alt='Project 1' />
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
        </main>
    );
};

export default PortFolio;
