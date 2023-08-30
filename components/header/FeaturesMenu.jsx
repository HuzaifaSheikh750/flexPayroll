import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
} from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import React, { useState, useEffect } from 'react';

import { useRouter } from "next/router";

const MainMenu = () => {

    // const [scrolling, setScrolling] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //       if (window.scrollY > 0) {
    //         setScrolling(true);
    //       } else {
    //         setScrolling(false);
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    //   const textColor = scrolling ? 'black' : 'white';


  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/field/fieldLogo.png" alt="" width={130} />
              </Link>
            </div>
          </li>
          {/* End li */}
          <li className="nav-item">
            <Link className="nav-link " href="/" role="button" style={{ color: "black"}} >
              Home
            </Link>
          </li> <li className="nav-item">
            <Link className="nav-link" href="/Features" role="button" style={{ color: "black"}} >
              Features
            </Link>
          </li> <li className="nav-item">
            <Link className="nav-link" href="https://www.kaispe.com/resources/blogs/" target="_blank" role="button" style={{ color: "black"}} >
              Blog
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" href="/pages-menu/pricing" role="button" style={{ color: "black"}} >
              Pricing
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button" style={{ color: "black"}}    >
              Contact
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="https://kspcs.powerappsportals.com/customer-landing/" target="_blank" className="btn-twentyOne fw-500 tran3s">
              Support Portal
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
