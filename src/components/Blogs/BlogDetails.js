import React from 'react';
import './BlogDetails.css';
import img1 from '../../images/img3.jpg';
import teacher from '../../images/student.jpg';
import Footer from '../Shared/Footer/Footer';
import { MdOutlineTimelapse } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaFacebookMessenger } from 'react-icons/fa';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { BiSolidLike } from 'react-icons/bi';
import Header from '../Shared/Navbar/Header';


const BlogDetails = () => {
    return (
        <div>
            <div className="blog-details-banner">
                <div className="blog-details-banner-style">
                    <Header />
                    <h1 className='blog-details-heading'>Blog Details</h1>
                </div>
            </div>
            <section className='blog-details-section'>
                <img style={{width: '100%', height: '350px', borderRadius: '10px'}} src={img1} alt="" />
                <h2 style={{margin: '30px 0'}}>Lorem ipsum dolor sit amet.</h2>
                <div style={{display: 'flex', color: 'rgba(42, 153, 255, 1)', marginBottom: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                   <MdOutlineTimelapse style={{fontSize: '20px'}} />
                    <Link style={{marginLeft: '10px', color: 'rgba(42, 153, 255, 1)', textDecoration: 'none'}}>23-06-2023</Link>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', margin: '0 30px'}}>
                    <FaFacebookMessenger style={{fontSize: '16px'}} />
                    <Link style={{marginLeft: '10px', color: 'rgba(42, 153, 255, 1)', textDecoration: 'none'}}>2 Comments</Link>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <BiSolidLike style={{fontSize: '18px'}} />
                    <Link style={{marginLeft: '10px', color: 'rgba(42, 153, 255, 1)', textDecoration: 'none'}}>190 Like</Link>
                    </div>
                </div>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad inventore explicabo? Ullam nihil dolorem harum similique, temporibus ipsam cupiditate expedita non blanditiis aperiam, earum vero fugit dolor quisquam totam deleniti rem est pariatur dolorum quaerat assumenda. Cum nisi, perferendis dignissimos, sapiente fugiat fugit distinctio ullam suscipit tenetur dolorem vero?</p>
                <p style={{margin: '20px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at, magni fugiat aliquam tempora consequuntur. Assumenda vero quaerat itaque dolores?</p>
                <div style={{display: 'flex'}}>
                <RiDoubleQuotesL style={{color: 'rgba(42, 153, 255, 1)', fontSize: '38px', marginRight: '10px', marginTop: '-5px'}} />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae rerum odit amet mollitia, quis similique! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, culpa!</p>
                </div>
                <p style={{margin: '20px 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, animi.
                </p>
                <div style={{display: 'flex'}}>
                    <h3>Tags: </h3>
                    <button className='tag-btn' style={{backgroundColor: 'rgba(209, 227, 244, 1)'}}># lorem ipsum</button>
                    <button className='tag-btn' style={{backgroundColor: 'rgba(218, 209, 244, 1)'}}># lorem ipsum</button>
                    <button className='tag-btn' style={{backgroundColor: 'rgba(244, 209, 209, 1)'}}># lorem ipsum</button>
                    <button className='tag-btn' style={{backgroundColor: 'rgba(209, 244, 219, 1)'}}># lorem ipsum</button>
                </div>
                <h2 style={{marginTop: '30px'}}>Comments(04)</h2>
                <div style={{margin: '30px 0'}} >
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15%'}}>
                    <img style={{marginRight: '15px', width: '70px', height: '70px', borderRadius: '50%'}} src={teacher} alt="" />
                    <div style={{color: 'rgba(1, 41, 73, 1)'}}>
                    <h3>Ibrahim Khan</h3>
                    <p>ibrahimkhan@gmail.com</p>
                    </div>
                    </div>
                    <button className='reply-btn'>Reply</button>
                </div>
                <p style={{ marginTop: '10px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, consectetur sapiente quod quas eveniet asperiores, ipsum ipsam voluptates velit est beatae iste sed sit placeat officiis enim esse. Sapiente, distinctio.</p>
                </div>
                <div style={{margin: '30px 0'}} >
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15%'}}>
                    <img style={{marginRight: '15px', width: '70px', height: '70px', borderRadius: '50%'}} src={teacher} alt="" />
                    <div style={{color: 'rgba(1, 41, 73, 1)'}}>
                    <h3>Ibrahim Khan</h3>
                    <p>ibrahimkhan@gmail.com</p>
                    </div>
                    </div>
                    <button className='reply-btn'>Reply</button>
                </div>
                <p style={{ marginTop: '10px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, consectetur sapiente quod quas eveniet asperiores, ipsum ipsam voluptates velit est beatae iste sed sit placeat officiis enim esse. Sapiente, distinctio.</p>
                </div>
                <div style={{margin: '30px 0'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15%'}}>
                    <img style={{marginRight: '15px', width: '70px', height: '70px', borderRadius: '50%'}} src={teacher} alt="" />
                    <div style={{color: 'rgba(1, 41, 73, 1)'}}>
                    <h3>Ibrahim Khan</h3>
                    <p>ibrahimkhan@gmail.com</p>
                    </div>
                    </div>
                    <button className='reply-btn'>Reply</button>
                </div>
                <p style={{ marginTop: '10px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, consectetur sapiente quod quas eveniet asperiores, ipsum ipsam voluptates velit est beatae iste sed sit placeat officiis enim esse. Sapiente, distinctio.</p>
                </div>
                <div style={{margin: '30px 0'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15%'}}>
                    <img style={{marginRight: '15px', width: '70px', height: '70px', borderRadius: '50%'}} src={teacher} alt="" />
                    <div style={{color: 'rgba(1, 41, 73, 1)'}}>
                    <h3>Ibrahim Khan</h3>
                    <p>ibrahimkhan@gmail.com</p>
                    </div>
                    </div>
                    <button className='reply-btn'>Reply</button>
                </div>
                <p style={{ marginTop: '10px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, consectetur sapiente quod quas eveniet asperiores, ipsum ipsam voluptates velit est beatae iste sed sit placeat officiis enim esse. Sapiente, distinctio.</p>
                </div>
                <div className='comment-section'>
                    <h1 style={{marginBottom: '15px'}}>Leave a Reply</h1>
                    <p>Your email address will not be published. Required fields are marked * </p>
                    <form className='comment-form'>
                        <div>
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Your Email' />
                        <input type="text" placeholder='Your Website' />
                        </div>
                       
                        <textarea placeholder='Your Comment' name="" id="" cols="30" rows="10"></textarea>
                        <button className='comment-btn' type="submit">Post a Comment</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BlogDetails;