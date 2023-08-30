import { useEffect, useState } from "react";
import MainMenu from "../../components/header/MainMenu";
import Link from "next/link";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const textColor = scrolling ? 'white' : 'black';
    const backgroundColor = scrolling ? '#145DA0' : 'white';
    const logo = scrolling ? '/images/payroll/flexLogo.png' : '/images/payroll/flexWhite.png';


  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-six ${
        navbar ? "fixed" : ""
      }`}
      // style={{backgroundColor:"white"}}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <img
                src={logo}
                alt=""
                width={180}
              />
            </Link>
          </div>
          {/* End logo */}
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="https://kspcs.powerappsportals.com/customer-landing/"
              target="_blank"
              className="start-btn-two fs-18 fw-500 tran3s position-relative d-none d-lg-block"
              style={{ backgroundColor: backgroundColor, color: textColor }}
            >
              Support Portal
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
