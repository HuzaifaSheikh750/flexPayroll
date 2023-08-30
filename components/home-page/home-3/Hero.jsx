import Image from "next/image";
import HeroBtnGroup from "../home-7/HeroBtnGroup";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="SVHOIAzG-KE"
        // https://www.youtube.com/watch?v=M9CNNbq7AHY
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-twelve pt-225 pb-250 lg-pb-0 md-pt-200 quote">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="text-wrapper" data-aos="fade-right" style={{marginTop:"-30px"}}>

                <h3 className=" tx-dark field_title"
                style={{ fontSize: "40px", color:"white" }}>
                  Empower Your Employees 
                  <span 
                  className="field_title"
                  style={{
                    fontSize: "55px",
                    color: "#B9A5DA",
                    fontWeight: "bold",
                  
                  }}> Financial Wellness </span>
                   with KAISPE Loan Management app!  
                </h3 >
                <p className="text-md tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20 text-white">
                Provides seamless integration between HR, Accounting & Payroll App 
                to directly manage different types of employee loan requests. 
                </p>

                {/* <div className="d-lg-flex align-items-center"> */}

                <div
                  className="d-sm-flex align-items-center btns"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
                    onClick={() => setOpen(true)}
                    role="button"
                    style={{
                      cursor: "pointer",
                      color: "white",
                      borderColor: "white",
                      marginTop: "0px",
                    }}
                  >
                    <i
                      className="bi bi-play"
                      style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontSize: "32px",
                        paddingLeft: "10px",
                      }}
                    />
                    <div className="ps-3">
                      <span
                        className="d-block fs-15 text-uppercase"
                        style={{ textAlign: "start", color: "white" }}
                      >
                        Watch
                      </span>
                      <strong
                        className="fs-18 fw-normal tx-dark d-block"
                        style={{ color: "white" }}
                      >
                        Intro Video
                      </strong>
                    </div>
                  </div>
                  <a
                    href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspelmapp?tab=Overview"
                    target="_blank"
                    style={{ marginTop: "-20px", marginRight: "20px" }}
                  >
                    <img
                      src="/images/loan/download.png"
                      alt="icon"
                      style={{
                        width: "150px",
                        height: "50px",
                        marginRight: "20px",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                  <img
                  src="/images/loan/headerMockup.png"
                  alt="img"
                  className="lazy-img"
                  style={{width:"100%", height:"100%", marginLeft:"50px" }}
                />
                </div>
                {/* <img
                  src="/images/loan/headerMockup.png"
                  alt="img"
                  className="lazy-img"
                  style={{width:"100%", height:"100%", marginLeft:"50px" }}
                /> */}
              </div>
            </div>
            {/* End col-6 */}

            {/* <div
              className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 ms-auto text-end"
              data-aos="fade-left"
            >
              <div
                className="image-holder zn2 d-inline-block position-relative sm-mt-60"
              >
                <img
                  src="/images/loan/headerMockup.png"
                  alt="img"
                  className="lazy-img"
                  style={{width:"100%", height:"100%", marginLeft:"50px" }}
                />
              </div>
            </div> */}
            {/* End col-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
