import React from 'react';
import { FaHome, FaEnvelope, FaPhone, FaPrint, FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import icons from react-icons
import './Footer.css'; // Add your CSS or Bootstrap import here

const Footer = () => {
  return (
    <div className="container-fluid mt-5 p-0">
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">MagnumAI</h6>
                <p className='text-start'>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a href="#!" className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Bootstrap Angular</a>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><FaHome className="mr-3" /> New York, NY 10012, US</p>
                <p><FaEnvelope className="mr-3" /> info@gmail.com</p>
                <p><FaPhone className="mr-3" /> + 01 234 567 88</p>
                <p><FaPrint className="mr-3" /> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                {/* Social media links */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                  <FaFacebookF />
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                  <FaTwitter />
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                  <FaGoogle />
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                  <FaInstagram />
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                  <FaLinkedinIn />
                </a>
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
                  <FaGithub />
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MagnumAI</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
