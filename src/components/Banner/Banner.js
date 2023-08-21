import React from 'react';
import './Banner.css';
import Header from '../Shared/Navbar/Header';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='banner-style'>
            <Header />
            <div className='banner-content'>
            <h4>BEST ENGLISH IELTS</h4>
            <h1 style={{margin: '20px 0'}}>ENGLISH <span style={{color: 'rgba(255, 41, 27, 1)'}}>EDUCATION</span> <br /> OF MANAGEMENT</h1>
            <button>Read More</button>
            </div> 
            </div>
            
        </div>
    );
};

export default Banner;