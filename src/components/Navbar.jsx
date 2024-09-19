import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

export default function MyComponent() {
  return (
    <div className='container-fluid'>
      <div className="row border-bottom">
        <div className="col-sm-4 d-flex justify-content-center align-items-center text-success" style={{ fontSize: '50px' }}>
            <b>agust</b>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
           <b> About</b>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
            <button className='bg-success rounded-pill py-2 px-3 text-light fw-bold' style={{border: 'none'}}>Talk to agust</button>
        </div>
      </div>
    </div>
  );
}
