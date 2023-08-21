import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
// import {IoMenuOutline} from 'react-icons/io5';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
        <Navbar expand="lg" className="">
       
        <Link to="/" className="nav-link">
          <Navbar.Brand>
            <img
              src={logo}
              className="mb-3 ms-2 img-fluid"
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          style={{ backgroundColor: "#e2f2ef", marginRight: "15px" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
        className="ms-3"  id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to="/" className="nav-link me-3 fw-600 text-white">HOME</Link>
                 <Link to="/aboutUs" className="nav-link me-3 fw-600 text-white">ABOUT US</Link>
                <Link to="/courses" className="nav-link me-3 fw-600 text-white">COURSES</Link>
                 <Link to="/team" className="nav-link me-3 fw-600 text-white">TEAM</Link>
               <Link to="/gallery" className="nav-link me-3 fw-600 text-white">GALLERY</Link>
               <Link to="/certificate" className="nav-link me-3 fw-600 text-white">CERTIFICATE VERIFY</Link>
                <Link to="/blogs" className="nav-link me-3 fw-600 text-white">BLOG</Link>

                <button className="nav-btn me-3 fw-600 ">CONTACT</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>

        // <div className='navbar'>
        //     <div className='navbar-logo'>
        //         <img src={logo} alt="" />
        //     </div>
        //     <div className='navbar-link'>
            
        //         <Link to="/">HOME</Link>
        //         <Link to="/aboutUs">ABOUT US</Link>
        //         <Link to="/courses">COURSES</Link>
        //         <Link to="/team">TEAM</Link>
        //         <Link to="/gallery">GALLERY</Link>
        //         <Link to="/certificate">CERTIFICATE       VERIFY</Link>
        //         <Link to="/blogs">BLOG</Link>
        //         <button className='nav-btn'>CONTACT</button>
        //     </div>
        // </div>
    );
};

export default Header;