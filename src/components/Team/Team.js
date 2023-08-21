import React from 'react';
import './Team.css';
import student from '../../images/student.jpg';
import Footer from '../Shared/Footer/Footer';
import wp from '../../images/wp.png';
import call from '../../images/call.png';
import fb from '../../images/fb.png';
import Header from '../Shared/Navbar/Header';

const Team = () => {
    return (
        <div>
            <div className="team-banner">
                <div className="team-banner-style">
                    <Header />
                    <h1 className='team-heading'>Meet The Team <br /> Professionals</h1>
                </div>
            </div>
            <section className='team-members' style={{margin: '80px'}}>
                <div className='team-member'>
                    <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                <div className='team-member'>
                <div className='member-img'>
                    <img src={student} alt="" />
                    </div>
                    <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                    <h4>Creative Designer</h4>
                    <p style={{margin: '10px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sed.</p>
                    <div className='social-icon'>
                        <img src={wp} alt="" />
                        <img src={call} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Team;