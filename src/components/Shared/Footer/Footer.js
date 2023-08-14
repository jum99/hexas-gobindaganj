import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import insta from '../../../images/insta.png';
import snap from '../../../images/snap.png';
import wp from '../../../images/wp.png';
import fb from '../../../images/fb.png';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-top'>
            <div>
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Nam, aspernatur!</p>
                <div className='footer-social-icon'>
                        <img src={insta} alt="" />
                        <img src={snap} alt="" />
                        <img src={wp} alt="" />
                        <img src={fb} alt="" />
                </div>
            </div>
            <div className='footer-links'>
                <h3>Get Our Link</h3>
                <Link>Homes</Link>
                <Link>Apartments</Link>
                <Link>Resorts</Link>
                <Link>Villas</Link>
                <Link>Hostels</Link>
                <Link>B&Bs</Link>
                <Link>Guest houses</Link>
            </div>
            <div className='footer-links'>
            <h3>Get Our Link</h3>
                <Link>Homes</Link>
                <Link>Apartments</Link>
                <Link>Resorts</Link>
                <Link>Villas</Link>
                <Link>Hostels</Link>
                <Link>B&Bs</Link>
                <Link>Guest houses</Link>
            </div>
            <div className='footer-links'>
            <h3>Get Our Link</h3>
                <Link>Homes</Link>
                <Link>Apartments</Link>
                <Link>Resorts</Link>
                <Link>Villas</Link>
                <Link>Hostels</Link>
                <Link>B&Bs</Link>
                <Link>Guest houses</Link>
            </div>
            </div>
            <div className="footer-bottom">
            <hr className='hr-line' />
            <p>Copyright c 1996-2022 Booking.com. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;