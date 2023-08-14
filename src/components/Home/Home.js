import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import HomeAboutImg from '../../images/hexas.jpg';
import img1 from '../../images/img1.jpeg';
import googleplay from '../../images/googleplay.jpg';
import appstore from '../../images/appstore.jpg';
import './Home.css';
import Footer from '../Shared/Footer/Footer';
import {  FaUsers, FaLessThan, FaGreaterThan  } from 'react-icons/fa';
import { SlGraduation } from 'react-icons/sl';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { TiChartPie } from 'react-icons/ti';
import { FiUsers, FiFileText } from 'react-icons/fi';
import {HiOutlineUsers, HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import {MdOutlinePlayCircleFilled} from 'react-icons/md';

const Home = () => {
    return (
        <div>
            <Banner />
            <section className="home-about">
                <div className='home-about-img'>
                    <img src={HomeAboutImg} alt="about" />
                </div>
                <div className='home-about-content'>
                    <h3 style={{color: 'rgba(249, 15, 14, 1)', margin: '20px 0'}}>About Us</h3>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione beatae illum ad, itaque, et accusamus dicta. Facilis cum vel nisi perspiciatis voluptatibus eaque voluptate sit, autem commodi quos incidunt cumque expedita.</p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <MdOutlinePlayCircleFilled style={{fontSize: '28px'}} />
                    <Link style={{marginLeft: '10px', color: 'rgba(1, 41, 73, 1)'}}>Know More</Link>
                    </div>
                </div>
            </section>
            <section className='offer-section'>
                <h1 style={{margin: '20px 0'}}>What We Offer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.</p>
                <div className='offer-cards'>
                    <div className='offer-card'>
                       
                        <SlGraduation style={{fontSize: '34px'}} />
                        <h2 style={{margin: '15px 0'}}>All Course</h2>
                        <p style={{color: 'rgba(0, 0, 0, 1)', margin: '15px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit officiis iusto a et officiis iusto a et.</p>
                        <h4>Read more</h4>
                    </div>
                    <div id='offer-card2' className='offer-card'>
                    < FaUsers style={{fontSize: '32px'}} />
                        <h2 style={{margin: '15px 0'}}>All Course</h2>
                        <p style={{margin: '15px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit officiis iusto a et officiis iusto a et.</p>
                        <h4>Read more</h4>
                    </div>
                    <div className='offer-card'>
                     <HiOutlineUsers style={{fontSize: '32px'}} />
                        <h2 style={{margin: '15px 0'}}>All Course</h2>
                        <p style={{color: 'rgba(0, 0, 0, 1)', margin: '15px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nulla maxime officiis iusto a et.</p>
                        <h4>Read more</h4>
                    </div>
                </div>
            </section>
            <section className="home-about">
                <div className='home-about-img'>
                    <img src={HomeAboutImg} alt="about" />
                </div>
                <div className='home-about-content'>
                    <h2>Why choose Hexa's Gobindaganj?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione.</p>
                    <div style={{display: 'flex', alignItems: 'center', color: 'rgba(33, 137, 234, 1)'}}>
                        <div  style={{backgroundColor: 'rgba(223, 230, 240, 1)' ,width: '50px', height: '50px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        < BiSolidBarChartAlt2 />
                        </div>
                        <h4 style={{marginLeft: '10px'}}>Best Education</h4>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', color: 'rgba(33, 137, 234, 1)', margin: '10px 0'}}>
                    <div  style={{backgroundColor: 'rgba(223, 230, 240, 1)' ,width: '50px', height: '50px', borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    < TiChartPie />
                        </div>
                        <h4 style={{marginLeft: '10px'}}>Top IELTS Center</h4>
                    </div>
                    <div className='buttons'>
                        <button style={{color: 'rgba(1, 41, 73, 1)'}}>Read More</button>
                        <button style={{backgroundColor: 'rgba(1, 41, 73, 1)', color:'white'}}>Go About</button>
                    </div>
                    
                </div>
            </section>
            <section>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <h1 style={{margin: '30px 15% 30px 0'}}>Discover Our <br /> Popular Courses</h1>
                <div style={{display: 'flex'}}>
                    <div  style={{backgroundColor: 'rgba(1, 41, 73, 1)', color: 'white' ,width: '50px', height: '50px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FaLessThan />
                    </div>
                    <div style={{backgroundColor: 'rgba(223, 230, 240, 1)', color: 'rgba(1, 41, 73, 1)' ,width: '50px', height: '50px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 10px'}}>
                    <FaGreaterThan />
                    </div>
                </div>
                </div>
                <div className='home-courses'>
                    <div className='home-course'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          <FiUsers style={{fontSize: '50px'}}/>
                          <div style={{ fontSize: '38px', color: 'rgba(141, 141, 141, 1)', margin: '0 20px 10px 20px'}}>
                            |
                          </div>
                            <h4>Life Skill English Spoken Course</h4>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, est?</p>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '270px'}}>
                            <h5>Class Full</h5>
                            <h5>60%</h5>
                        </div>
                        <label><progress max="100" value="60">60%</progress></label>
                    </div>
                    <div className='home-course'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <FiFileText style={{fontSize: '50px'}} />
                        <div style={{ fontSize: '38px', color: 'rgba(141, 141, 141, 1)', margin: '0 20px 10px 20px'}}>
                            |
                          </div>
                            <h4>Life Skill English Spoken Course</h4>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, est?</p>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '270px'}}>
                            <h5>Class Full</h5>
                            <h5>80%</h5>
                        </div>
                        <label><progress max="100" value="80">80%</progress></label>
                    </div>
                    <div className='home-course'>
                        <img style={{width: '100%', borderRadius: 10}} src={img1} alt="" />
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <HiOutlineClipboardDocumentList style={{fontSize: '50px'}} />
                            <div style={{ fontSize: '38px', color: 'rgba(141, 141, 141, 1)', margin: '0 20px 10px 20px'}}>
                            |
                          </div>
                            <h4>Life Skill English Spoken Course</h4>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, est?</p>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '270px'}}>
                            <h5>Class Full</h5>
                            <h5>90%</h5>
                        </div>
                        <label><progress max="100" value="90"></progress></label>
                    </div>
                </div>
            </section>
            <section className="home-about">
                <div className='home-about-img'>
                    <img src={HomeAboutImg} alt="about" />
                </div>
                <div className='home-about-content'>
                    <h4 style={{marginBottom: 15}}>DOWNLOAD APP</h4>
                    <h2>Hexa's Best English Solution <br /> Makes Your Skills Better</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate in molestias exercitationem a nemo nihil iure deleniti voluptates repellat debitis quisquam perferendis soluta voluptate perspiciatis nostrum ratione beatae illum ad, itaque, et accusamus dicta. Facilis cum vel nisi perspiciatis voluptatibus eaque voluptate sit, autem commodi quos incidunt cumque expedita.</p>
                    <div className='playstore'>
                        <img src={googleplay} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
            </section>
            <section>
                {/* <h1>Our Professional Trainer</h1> */}
            </section>
            <section>
                {/* <h1>Some of Our Happy Student Saying</h1> */}
            </section>
            <Footer />
        </div>
    );
};

export default Home;