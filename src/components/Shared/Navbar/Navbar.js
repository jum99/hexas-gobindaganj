import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='navbar-link'>
                <Link to="/">HOME</Link>
                <Link to="/aboutUs">ABOUT US</Link>
                <Link to="/courses">COURSES</Link>
                <Link to="/team">TEAM</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/certificate">CERTIFICATE VERIFY</Link>
                <Link to="/blogs">BLOG</Link>
                <button className='nav-btn'>CONTACT</button>
            </div>
        </div>
    );
};

export default Navbar;