import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaPinterestP } from 'react-icons/fa';
import './Contact.css';
const Contact = () => {
    return (
        <main>
            <div className='contact-container'>
                <div className='contact-header'>
                    <h2>Contact Me</h2>
                </div>
                <div className='contact-form'>
                    <form>
                        <label htmlFor='name'>Name</label>
                        <input type='text' placeholder='Your Name' required />
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Your Email' required />
                        <textarea cols={100} rows={10} placeholder='Your Message' required></textarea>
                        <button type='submit'>Send Message</button>
                    </form>
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

export default Contact;
