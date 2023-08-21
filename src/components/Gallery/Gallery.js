import React from 'react';
import './Gallery.css';
import img1 from '../../images/img1.jpeg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Navbar/Header';

const Gallery = () => {
    return (
        <div>
            <div className="gallery-banner">
                <div className="gallery-banner-style">
                    <Header />
                    <h1 className='gallery-heading'>Our Gallery</h1>
                </div>
            </div>
            <div className='top-buttons'>
                    <button className='top-button'>All Photo</button>
                    <button className='top-button'>Student</button>
                    <button className='top-button'>Teacher</button>
                    <button className='top-button'>Class Room</button>
            </div>
            <div className='gallery-images'>
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            <img src={img1} alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;