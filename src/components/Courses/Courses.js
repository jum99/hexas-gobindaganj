import React from 'react';
import './Courses.css';
import img1 from '../../images/img1.jpeg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Navbar/Header';

const Courses = () => {
    return (
        <div>
            <div className="about-banner">
                <div className="about-banner-style">
                    <Header />
                    <div className='about-banner-content'>
                    <h1>Our Popular Courses</h1>
                    <p style={{margin: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facilis suscipit earum nisi, nesciunt, ad at id dolor rerum rem quae adipisci ex sint amet eius nam esse, modi quia!
                    </p>
                    <div>
                    <button style={{backgroundColor: 'rgba(33, 137, 234, 1)', color: 'white'}} className='regular-btn'>Book Now</button>
                    <button style={{background: 'transparent', border: '1px solid white', color: 'white'}} className='regular-btn'>Contact Us</button>
                    </div>
                   </div> 
                </div>
            </div>
            <section style={{margin: '50px 10px'}}>
                <h1 style={{textAlign: 'center'}}>Our Popular Courses</h1>
                <div className='top-buttons'>
                    <button className='top-button'>All Course</button>
                    <button className='top-button'>English Spoken</button>
                    <button className='top-button'>English Spoken</button>
                    <button className='top-button'>English Spoken</button>
                </div>
                <div className='course-cards'>
                    <div className='course-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(235, 181, 181, 1)'}}>Time: 1:30</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(198, 181, 235, 1)'}}>Fee: 5000 tk</button>
                        </div>
                    </div>
                    <div className='course-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(181, 209, 235, 1)'}}>Time: 1:30</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(189, 235, 181, 1)'}}>Fee: 5000 tk</button>
                        </div>
                    </div>
                    <div className='course-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(181, 209, 235, 1)'}}>Time: 1:30</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(235, 191, 181, 1)'}}>Fee: 5000 tk</button>
                        </div>
                    </div>
                    <div className='course-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(214, 181, 235, 1)'}}>Time: 1:30</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(181, 215, 235, 1)'}}>Fee: 5000 tk</button>
                        </div>
                    </div>
                    <div className='course-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(181, 225, 235, 1)'}}>Time: 1:30</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(181, 235, 183, 1)'}}>Fee: 5000 tk</button>
                        </div>
                    </div>
                    <div className='course-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <h4>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(181, 190, 235, 1)'}}>Time: 1:30</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(235, 220, 181, 1)'}}>Fee: 5000 tk</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Courses;