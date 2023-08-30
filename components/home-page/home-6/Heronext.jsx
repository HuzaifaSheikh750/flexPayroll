import Link from "next/link";
import { useState } from "react";
// import Image from 'next/image'
const HeroNext = () => {


  return (
    <>


      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">
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
              className="col-lg-12 col-md-12  m-auto text-center"
              data-aos="fade-up"
            >
              <h2 className="tx-dark mb-20" style={{fontWeight:"bold"}}>Powerful Features for the<br /><span style={{ color: "#145DA0" }}> FlexPayroll</span></h2>

              <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20" style={{ fontSize: "20px", fontStyle: "" }}>
              A complete solution to simplify your payroll and HR procedures is provided by Dynamics 365 
              with FlexPayroll for Payroll & HR. FlexPayroll is a highly flexible and configurable solution that 
              can be tailored to your company's specific needs
              </p>

              <div className="bg-wrapper tablet" style={{backgroundColor:"white", marginTop:"40px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img
                src="/images/payroll/secondTablet.png"
                alt="media"
                style={{width:"100%", height:"auto"}}
                className="lazy-img main-screen  tablet"
              />
            </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-120 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            {/* <div className="bg-wrapper" style={{backgroundColor:"white", marginTop:"-7  0px"}}>
              <img
                src="/images/purchase/image_10.png"
                alt="media"
                className="lazy-img main-screen w-100"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroNext;
