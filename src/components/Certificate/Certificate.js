import React from 'react';
import './Certificate.css';
import CertificateImg from '../../images/Certificate.jpg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Navbar/Header';

const Certificate = () => {

    const handleSubmit = e => {
        console.log('form submitted for certificate verification');
        e.preventDefault();
    }

    return (
        <div>
            <div className="certificate-banner">
                <div className="certificate-banner-style">
                    <Header />
                    <h1 className='certificate-heading'>Verify Your Certificate</h1>
                </div>
            </div>
            <section className='certificate-section'>
                <div className='certificate-content'>
                    <h1 style={{marginBottom: 45}}>Verify Your Certificate</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Your Student ID' />
                        <input type="text" placeholder='Enter Certificate S/N' />
                        <input type="date" placeholder='Issue Date' />
                        <input type="text" placeholder='Enter Your Name' />
                        <button className='verify-btn' type="submit">Verify</button>
                    </form>
                </div>
                <div className='certificate-img'>
                    <img src={CertificateImg} alt="" />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Certificate;