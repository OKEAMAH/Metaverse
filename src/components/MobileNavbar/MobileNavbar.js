import React, { useEffect, useState } from "react";
import "./_mobilenavbar.scss";
import metaverse from "../../assets/navbarAssets/metaverse.svg";
import mobileArrow from "../../assets/navbarAssets/mobileArrow.svg";
import xMark from "../../assets/navbarAssets/xMark.svg";

const MobileNavbar = () => {


const [openNavbar, setOpenNavbar] = useState(false)


const bgmenu = document.querySelector("#bgmenu");
const hamburger = document.querySelector('#mobileNavbar');
const html = document.querySelector("html");

useEffect(() => {
    if (openNavbar === true) {
      html.classList.add('hidescroll')
      bgmenu.style.pointerEvents = "auto";
      hamburger.style.pointerEvents = "auto";
    } else {
      // Enable scroll
      html.classList.remove('hidescroll')
    }



  }, [openNavbar]);


  return (
    <>
      <div className="mobile-navbar d-flex d-lg-none p-3 align-items-center justify-content-between" id="mobileNavbar">
        <img src={metaverse} alt="metaverse" width={126} />
       {openNavbar === false ? 
        <div className="linear-border" onClick={() => setOpenNavbar(true)}>
        <button
          className="btn filled-btn px-4"
          style={{ clipPath: "none" }}
          id="hamburgermenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    :
    <img src={xMark} alt="x mark" style={{position: 'relative', right: '18px'}} onClick={() => setOpenNavbar(false)} />  
    }
      </div>
      <div className={`mobile-menu ${openNavbar && 'mobile-menu-open'} d-flex d-lg-none p-3 flex-column gap-3`} id="bgmenu">
        <div className="mobile-nav-item d-flex align-items-center justify-content-between p-3">
        <h6 className="mobile-nav-link font-poppins mb-0">Explore</h6>
        <img src={mobileArrow} alt="arrow" />
        </div>
        <div className="mobile-nav-item d-flex align-items-center justify-content-between p-3">
        <h6 className="mobile-nav-link font-poppins mb-0">Marketplace</h6>
        <img src={mobileArrow} alt="arrow" />
        </div>
        <div className="mobile-nav-item d-flex align-items-center justify-content-between p-3">
        <h6 className="mobile-nav-link font-poppins mb-0">Roadmap</h6>
        <img src={mobileArrow} alt="arrow" />
        </div>
        <div className="mobile-nav-item d-flex align-items-center justify-content-between p-3">
        <h6 className="mobile-nav-link font-poppins mb-0">News</h6>
        <img src={mobileArrow} alt="arrow" />
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="linear-border" style={{width: 'fit-content'}}>
          <button
            className="btn filled-btn px-4"
          >
            Download
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;