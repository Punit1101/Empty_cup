import React from 'react';
import logo from '../icons/logo.svg'

function Navbar() {
  return (
    <div className="container border-bottom px-4" style={{height: "72px"}}>
        <div className="row ">
          <div className="col text-start my-auto">
            <img src={logo} className="img-fluid rounded-circle" style={{width: "31px", height: "31px"}}/>
          </div>
          <div className="col text-center fw-bold text-secondary my-auto" style={{fontSize: "35px"}}>
            EmptyCup
          </div>
          <div className="col text-end my-auto">
            <i className="fa-solid fa-ellipsis-vertical mx-1 pt-2" style={{fontSize: "27px"}} aria-hidden="true"></i>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
