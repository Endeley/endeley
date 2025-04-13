import React from 'react';
import { SiThreedotjs, SiNextdotjs, SiMongodb } from 'react-icons/si';
import { FaJs, FaReact, FaNodeJs, FaUsers } from 'react-icons/fa';
import './Skills.css'; // Assuming you have a CSS file for styling
import Navigation from '../components/Navigation'; // Importing Navigation component
const Skills = () => {
    return (
        <div className='skills-page'>
            <Navigation />
            <div className='skills-intro'>
                <h1>Skills</h1>
            </div>

            <div className='skills-intro'>
                <p>I am a full-stack developer with a passion for creating interactive and dynamic web applications. My expertise lies in JavaScript, React, Node.js, Next.Js, and Three.js. and mostly MongoDB for Database</p>
            </div>

            <div className='skills-content'>
                <div className='skills-description'>
                    <span>
                        <FaJs />
                    </span>
                    javascript
                    <small>23</small>
                </div>
                <div className='skills-description'>
                    <span>
                        <FaReact />
                    </span>
                    React.js
                    <small>43</small>
                </div>
                <div className='skills-description'>
                    <span>
                        <FaNodeJs />
                    </span>
                    Node.js
                    <small>30</small>
                </div>
                <div className='skills-description'>
                    <span>
                        <FaUsers />
                    </span>
                    Clients
                    <small>280</small>
                </div>
                <div className='skills-description'>
                    <span>
                        <SiThreedotjs />
                    </span>
                    three.js
                    <small>12</small>
                </div>
                <div className='skills-description'>
                    <span>
                        <SiNextdotjs />
                    </span>
                    Next.js
                    <small>5</small>
                </div>
                <div className='skills-description'>
                    <span>
                        <SiMongodb />
                    </span>
                    MongoDB for database
                    <small>80%</small>
                </div>
            </div>
        </div>
    );
    // Note: The return statement should not be split across lines like this.
};

export default Skills;
