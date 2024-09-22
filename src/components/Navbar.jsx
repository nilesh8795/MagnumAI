import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Magnumlogo from './assets/Magnumlogo.png';

export default function MyComponent() {
  return (
    <div className='container-fluid p-0'>
      <div className="row border-bottom" style={{ minHeight: '100px' }}>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
          <img src={Magnumlogo} alt="Magnum Logo" style={{ width: '150px' }} />
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center text-sm-center text-md-end">
          <span className="d-block about">About</span>
        </div>
        {/* Hide this column on screen sizes below 576px */}
        <div className="col-sm-4 d-none d-sm-flex justify-content-center align-items-center">
          <button className='rounded-pill py-2 px-3 text-light fw-bold d-none d-md-block' style={{ backgroundColor: '#6366F1', border: 'none' }}>
            Talk to agust
          </button>
        </div>
      </div>
    </div>
  );
}
