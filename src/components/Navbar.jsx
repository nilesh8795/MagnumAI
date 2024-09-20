import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Magnumlogo from './assets/Magnumlogo.png';

export default function MyComponent() {
  return (
    <div className='container-fluid'>
      <div className="row border-bottom" style={{ minHeight: '100px' }}>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
          <img src={Magnumlogo} alt="Magnum Logo" style={{ width: '150px' }} />
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
          <b> About</b>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
          <button className='rounded-pill py-2 px-3 text-light fw-bold' style={{ backgroundColor: '#6366F1', border: 'none' }}>Talk to agust</button>
        </div>
      </div>
    </div>
  );
}
