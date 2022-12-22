import React from "react";
import { NavLink } from "react-router-dom";
import "./_header.scss";
import metaverse from "../../assets/navbarAssets/metaverse.svg";

const Header = ({onLogin, onRegister}) => {
  return (
    <div className="d-none d-lg-flex px-5 navbar-wrapper py-4">
      <div className="row mx-0 w-100">
        <div className="col-3 d-flex align-items-center justify-content-start ps-0">
          <NavLink to="/">
            <img src={metaverse} alt="metaverse" />
          </NavLink>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-around">
        <NavLink to="/explorer" className="nav-anchor font-poppins">
            Explore
          </NavLink>
          {/* <a href="#marketplace" className="nav-anchor font-poppins">Marketplace</a> */}
          {/* <div className="nav-anchor font-poppins">Roadmap</div> */}
          <NavLink to="/news" className="nav-anchor font-poppins">
            News
          </NavLink>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-end gap-4 pe-0">
          <div className="linear-border">
            <button className="btn outline-btn px-5" onClick={onLogin}>Log In</button>
          </div>
          <div className="linear-border">
            <button className="btn filled-btn px-5" onClick={onRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
