import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling
import Me from '../assets/images/about1.png'; // Adjust the path as necessary
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaPinterestP, FaGithub } from 'react-icons/fa';
const About = () => {
    return (
        <main>
            <div className='about-container'>
                <div className='about-header'>
                    <h1>About Me</h1>
                </div>
                <div className='about-description'>
                    <p>
                        Hello! I’m a passionate and versatile full-stack developer with a deep love for building dynamic, user-focused applications across the web, mobile, and desktop platforms. With a strong foundation in HTML, CSS, and JavaScript, and hands-on experience with modern frameworks
                        like React.js, Next.js, and React Native, I specialize in creating clean, efficient, and visually engaging digital experiences. My journey in tech began with a fascination for how websites worked, which quickly evolved into a full-blown obsession with front-end and back-end
                        development. Over the years, I’ve honed my skills through real-world projects, working across various stacks to build responsive websites, cross-platform mobile apps, and even immersive 3D experiences using Three.js. On the web development front, I focus on building
                        pixel-perfect, responsive interfaces that not only look great but perform smoothly across all devices. I enjoy working with React.js and Next.js for their component-based architecture, powerful routing, and performance optimizations. Whether it's a landing page, a dynamic
                        single-page app, or a full-scale web application, I bring both aesthetic sense and engineering discipline to every project I take on. My mobile development experience comes from working with React Native, which allows me to create native-quality apps for both iOS and Android
                        using a shared codebase. I love the challenge of making intuitive and performant mobile interfaces, and I take pride in crafting apps that feel seamless and natural to use. In addition to front-end skills, I have a solid grasp of back-end principles and full-stack workflows,
                        including REST APIs, state management, authentication, and deployment. I'm comfortable with integrating third-party services, working with cloud platforms, and ensuring everything runs smoothly behind the scenes. One of the more unique areas I work in is 3D development with
                        Three.js. Whether it's integrating interactive 3D elements into a website or building immersive web experiences, I enjoy pushing the boundaries of what's possible in the browser. What sets me apart is my attention to detail, curiosity for learning, and the ability to adapt
                        across different technologies and platforms. I approach every project with a mindset of continuous improvement, always striving to make the user experience as smooth and impactful as possible. When I’m not coding, I enjoy exploring new tech trends, experimenting with UI/UX
                        ideas, and contributing to creative side projects. I believe that great development is a mix of creativity, structure, and empathy—and I bring that philosophy into every line of code I write. If you're looking for someone who can bring ideas to life across web, mobile, or
                        desktop with high-quality code and thoughtful design, I’d love to connect.
                    </p>
                </div>
            </div>
            <div className='about-image'>
                <img src={Me} alt='About Us' />
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

export default About;
