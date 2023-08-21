import React from 'react';
import './AboutUs.css';
import AboutImg from '../../images/img1.jpeg';
import student from '../../images/student.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { TiChartPie } from 'react-icons/ti';
import Header from '../Shared/Navbar/Header';

const AboutUs = () => {
    return (
        <div>
            <div className="about-banner">
                <div className="about-banner-style">
                    <Header />
                    <div className='about-banner-content'>
                    <h1>About Us Hexa's Gobindaganj</h1>
                    <p style={{margin: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum <br /> facilis suscipit earum nisi, nesciunt, ad at id dolor rerum rem quae adipisci ex sint amet eius nam esse, modi quia!
                    </p>
                    <div>
                    <button style={{backgroundColor: 'rgba(33, 137, 234, 1)', color: 'white'}} className='regular-btn'>Book Now</button>
                    <button style={{background: 'transparent', border: '1px solid white', color: 'white'}} className='regular-btn'>Contact Us</button>
                    </div>
                   </div> 
                </div>
            </div>
            <section className="home-about">
                <div className='home-about-img'>
                    <img src={AboutImg} alt="about" />
                </div>
                <div className='home-about-content'>
                    <h2>Why choose Hexa's Gobindaganj?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione.</p>
                    <div style={{display: 'flex', alignItems: 'center', color: 'rgba(33, 137, 234, 1)'}}>
                        <div  style={{backgroundColor: 'rgba(223, 230, 240, 1)' ,width: '50px', height: '50px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        < BiSolidBarChartAlt2 />
                        </div>
                        <h4 style={{marginLeft: '10px'}}>Website Design</h4>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', color: 'rgba(33, 137, 234, 1)', margin: '10px 0'}}>
                    <div  style={{backgroundColor: 'rgba(223, 230, 240, 1)' ,width: '50px', height: '50px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    < TiChartPie />
                        </div>
                        <h4 style={{marginLeft: '10px'}}>Website Development</h4>
                    </div>
                    
                    <div>
                        <button style={{color: 'rgba(1, 41, 73, 1)'}} className='regular-btn'>Read More</button>
                        <button style={{backgroundColor: 'rgba(1, 41, 73, 1)', color: 'white'}} className='regular-btn'>Go About</button>
                    </div>
                    
                </div>
            </section>
            <section className='about-service'>
                <h1 style={{ textAlign: 'center'}}>Services We Provide</h1>
                <p style={{textAlign: 'center', margin: '30px 30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem!</p>
                <div className='about-section'>
                <div className='about'>
                <div className='about-img'>
                    <img src={AboutImg} alt="about" />
                </div>
                <div className='about-content'>
                    <h2>Best Education</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione.</p>
                    <button className='regular-btn' style={{backgroundColor: 'rgba(1, 41, 73, 1)', color: 'white'}}>Read More</button>
                </div>
                </div>
                <div className='about'>
                <div className='about-content'>
                    <h2>Top Management</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione.</p>
                    <button className='regular-btn' style={{backgroundColor: 'rgba(1, 41, 73, 1)', color: 'white'}}>Read More</button>
                </div>
                <div className='about-img'>
                    <img src={AboutImg} alt="about" />
                </div>
                </div>
                <div className='about'>
                <div className='about-img'>
                    <img src={AboutImg} alt="about" />
                </div>
                <div className='about-content'>
                    <h2>Top IELTS Center</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione.</p>
                    <button className='regular-btn' style={{backgroundColor: 'rgba(1, 41, 73, 1)', color: 'white'}}>Read More</button>
                </div>
                </div>
                </div>
            </section>
            <section className='data-bg'>
                <div className='data-bg-style'>
                    <div>
                        <h1>100%</h1>
                        <h3>Student Happy</h3>
                    </div>
                    <div>
                        <h1>789+</h1>
                        <h3>Course Complete</h3>
                    </div>
                    <div>
                        <h1>10+</h1>
                        <h3>Extra Services</h3>
                    </div>
                </div>
            </section>
            <section style={{textAlign: 'center'}}>
                <h1 style={{ margin:'50px'}}>Some of Our Happy Student Saying</h1>
                <div className='student-cards'>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                  <div className='student-card'>
                        <img style={{width: '100%', borderRadius: 10}} src={student} alt="" />
                        <h3 style={{margin: '10px 0'}}>Sayef Habib</h3>
                        <Link>View Review</Link>
                  </div>
                </div>
                <button className='see-btn'>See All</button>
            </section>
            <section>
            <div className='home-about'>
                <div className='home-about-img'>
                    <img src={AboutImg} alt="about" />
                </div>
                <div className='home-about-content'>
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione.</p>
                    <button className='regular-btn' style={{backgroundColor: 'rgba(33, 137, 234, 1)', color: 'white'}}>Read More</button>
                </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutUs;