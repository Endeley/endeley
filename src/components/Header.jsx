import React from 'react';
import { Link } from 'react-router-dom';
import imageLogo from '../assets/logbg.png';
const Header = () => {
    return (
        <nav className='header'>
            <div className='header__logo'>
                <Link to='/'>
                    <img src={imageLogo} alt='Logo' />
                </Link>
            </div>
            <div className='header__links'>
                <ul className='header__list'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
