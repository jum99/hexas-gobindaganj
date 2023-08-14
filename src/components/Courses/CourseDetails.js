import React from 'react';
import './CourseDetails.css';
import Navbar from '../Shared/Navbar/Navbar';
import img1 from '../../images/img1.jpeg';
import teacher from '../../images/student.jpg';


const CourseDetails = () => {
    return (
        <div>
            <div className="course-details-banner">
                <div className="course-details-banner-style">
                    <Navbar />
                </div>
            </div>
            <section className='course-details-section'>
               <div className='half-width'>
                        <img style={{width: '80%', borderRadius: 10}} src={img1} alt="" />
                        <h4 style={{margin: '20px 0'}}>Life Skill English Spoken Course</h4>
                        <div style={{display: 'flex'}}>
                            <button className='common-btn' style={{backgroundColor: 'rgba(203, 219, 229, 1)'}} >Duration: 1:30</button>
                            <button className='common-btn' style={{backgroundColor: 'rgba(235, 194, 181, 1)'}}>Total Class : 26+</button>
                        </div>
                </div>
                <div className='half-width'>
                    <h2 style={{color: 'rgba(33, 137, 234, 1)'}}>Brief description about the course</h2>
                    <p style={{margin: '25px 0', fontSize: '14px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi?</p>
                    <p> <span style={{color: 'rgba(33, 137, 234, 1)'}}>Course Budget <span style={{margin: '0 35px'}}>:</span></span>10,000 BDT</p>
                    <p style={{margin: '5px 0'}}> <span style={{color: 'rgba(33, 137, 234, 1)'}}>Start Course <span style={{margin: '0 35px'}}>:</span> </span> 12-03-2023</p>
                    <p style={{margin: '5px 0'}}> <span style={{color: 'rgba(33, 137, 234, 1)'}}>Total Class <span style={{margin: '0 30px'}}>:</span> </span>  26+ </p>
                    <p> <span style={{color: 'rgba(33, 137, 234, 1)'}}>Class Duration <span style={{margin: '0 30px'}}>:</span> </span> 1:30 Minutes</p>
                    <button style={{margin: '25px 0'}} className='buy-btn'>Buy The Course</button>
                </div>
            </section>
            <section className='teacher-section'>
                <h2 style={{margin: '50px 0'}}>Those who will take classes</h2>
                <div className='teacher-div'>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15%'}}>
                    <img style={{marginRight: '10px'}} src={teacher} alt="" />
                    <div>
                    <h3>Anisuzzaman Khan</h3>
                    <h5 style={{color: 'rgba(42, 153, 255, 1)', margin: '5px 0'}}>IELTS GT : 7.5</h5>
                    </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{marginRight: '10px'}} src={teacher} alt="" />
                    <div>
                    <h3>Rashedul Islam</h3>
                    <h5 style={{color: 'rgba(42, 153, 255, 1)', margin: '5px 0'}}>IELTS GT : 7.5</h5>
                    </div>
                    </div>
                </div>       
            </section>
        </div>
    );
};

export default CourseDetails;