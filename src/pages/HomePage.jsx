import React from 'react';
import Navigation from '../components/Navigation';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaPinterestP, FaPlay } from 'react-icons/fa';
import image1 from '../assets/avater.png';
// import image2 from '../assets/pt4.png';
const HomePage = () => {
    return (
        <main className='home'>
            <Navigation />
            <div className='hero-content'>
                <div className='content-div'>
                    <div className='left-heroContent'>
                        <h1>Welcome to Endeley</h1>
                        <p>
                            Endeley is Full-stack developer with expertise in web, mobile, and desktop app development. Skilled in HTML, CSS, JavaScript, React.js, Next.js, React Native, and Three.js, with a focus on building responsive user interfaces, scalable applications, and immersive 3D
                            experiences. Capable of delivering end-to-end solutions across platforms with strong frontend and backend development abilities.
                        </p>
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
                        <div className='btn'>
                            <button>
                                <FaPlay />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='image-div'>
                    <div className='right-heroContent'>
                        <img src={image1} alt='Hero' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
