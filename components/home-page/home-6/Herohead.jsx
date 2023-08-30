import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="5GL-ZvKNqX4"
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-three position-relative pt-250 lg-pt-200 md-pt-150 ">
        {/* <img
          src="/images/shape/shape_26.svg"
          alt="shape"
          className="lazy-img shapes shape-left"
        />
        <img
          src="/images/shape/shape_27.svg"
          alt="shape"
          className="lazy-img shapes shape-right"
        /> */}

        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h3 className="hero-heading fw-normal font-recoleta position-relative" style={{color:"white", fontWeight:"bolder"}}>
              Simplify your payroll now! <br/>With our cloud-based solution 
              </h3>
              <p className="text-md mb-75 pt-20 lg-mb-50 lg-pt-10" style={{color:"white"}}>
                FlexPayroll is a cutting-edge payroll solution Microsoft Dynamics 365 F&O designed specifically for 
                customers with legal entities across different regions who require a powerful, flexible payroll tax 
                engine to handle diverse tax rules and regulations.  
              </p>
              
              <div className="d-sm-flex justify-content-center align-items-center topBtn">
                {/* <Link
                  href="/contact"
                  className="tran3s fs-17 fw-500 btn-three mb-25 ms-2 me-3 text-white"
                >
                  Try Free Now
                </Link> */}
                  <a
                    href="https://appsource.microsoft.com/en-us/product/dynamics-365-for-operations/kaispe1627555526352.ksppte?tab=Overview"
                    target="_blank"
                    style={{ marginTop: "-20px", marginRight: "20px" }}
                  >
                    <img
                      src="/images/purchase/download.jpg"
                      alt="icon"
                      style={{
                        width: "150px",
                        height: "50px",
                        marginRight: "20px",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                {/* <img src="/images/payroll/download.jpg" alt="app store" className="lazy-img" style={{width:"100px", height:"100px", borderRadius:"10px", marginBottom:"20px", marginRight:"20px"}} /> */}
                <div
                  role="button"
                  className="fancybox video-icon tran3s mb-25 ms-2 me-3 d-flex align-items-center justify-content-center"
                  onClick={() => setOpen(true)}
                >
                  <i className="fas fa-play text-white" />
                  <div className="ps-3 text-start">
                    <span className="d-block text-white">Watch</span>
                    <strong className="fs-18 fw-500 tx-dark d-block text-white">
                      Intro video
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-20 lg-mt-80 xs-mt-30"
            
          >
            <div className="bg-wrapper">
              <img
                src="/images/payroll/mainTablet.png"
                alt="media"
                className="lazy-img main-screen w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
