import React from 'react';
import './Blogs.css';
import img1 from '../../images/img1.jpeg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Navbar/Header';

const Blogs = () => {
    return (
        <div>
            <div className="blog-banner">
                <div className="blog-banner-style">
                    <Header />
                    <h1 className='blog-heading'>Our Latest Blog</h1>
                    </div>
            </div>
                    <div className='blog-cards'>
                    <div className='blog-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(235, 181, 181, 1)'}}>26-07-2023</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(198, 181, 235, 1)'}}>See Details</button>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                        <button className='common-btn' style={{backgroundColor: 'rgba(235, 181, 181, 1)'}}>26-07-2023</button>
                        <button className='common-btn' style={{backgroundColor: 'rgba(198, 181, 235, 1)'}}>See Details</button>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                        <button className='common-btn' style={{backgroundColor: 'rgba(235, 181, 181, 1)'}}>26-07-2023</button>
                        <button className='common-btn' style={{backgroundColor: 'rgba(198, 181, 235, 1)'}}>See Details</button>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                        <button className='common-btn' style={{backgroundColor: 'rgba(235, 181, 181, 1)'}}>26-07-2023</button>
                        <button className='common-btn' style={{backgroundColor: 'rgba(198, 181, 235, 1)'}}>See Details</button>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                        <button className='common-btn' style={{backgroundColor: 'rgba(235, 181, 181, 1)'}}>26-07-2023</button>
                        <button className='common-btn' style={{backgroundColor: 'rgba(198, 181, 235, 1)'}}>See Details</button>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                        <button className='common-btn' style={{backgroundColor: 'rgba(235, 181, 181, 1)'}}>26-07-2023</button>
                        <button className='common-btn' style={{backgroundColor: 'rgba(198, 181, 235, 1)'}}>See Details</button>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Blogs;