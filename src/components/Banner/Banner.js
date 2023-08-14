import React from 'react';
import './Banner.css';
import Navbar from '../Shared/Navbar/Navbar';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='banner-style'>
            <Navbar />
            <div className='banner-content'>
            <h4>BEST ENGLISH IELTS</h4>
            <h1 style={{margin: '20px 0'}}>ENGLISH <span style={{color: 'rgba(255, 41, 27, 1)'}}>EDUCATION</span> OF MANAGEMENT</h1>
            <button>Read More</button>
            </div> 
            </div>
            
        </div>
    );
};

export default Banner;