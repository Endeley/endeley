import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaNetworkWired, FaBlog, FaServicestack, FaBookOpen, FaMobile } from 'react-icons/fa';

const Navigation = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <Link to='/' className='nav__link'>
                            <FaHome />
                        </Link>
                        home
                    </li>
                    <li className='nav__item'>
                        <Link to='/portfolio' className='nav__link'>
                            <FaBriefcase />
                        </Link>
                        portfolio
                    </li>
                    <li className='nav__item'>
                        <Link to='/skills' className='nav__link'>
                            <FaNetworkWired />
                        </Link>
                        Skills
                    </li>
                    <li className='nav__item'>
                        <Link to='/blog' className='nav__link'>
                            <FaBlog />
                        </Link>
                        Blog
                    </li>
                    <li className='nav__item'>
                        <Link to='/services' className='nav__link'>
                            <FaServicestack />
                        </Link>
                        Services
                    </li>
                    <li className='nav__item'>
                        <Link to='/about' className='nav__link'>
                            <FaBookOpen />
                        </Link>
                        About
                    </li>
                    <li className='nav__item'>
                        <Link to='/contact' className='nav__link'>
                            <FaMobile />
                        </Link>
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
