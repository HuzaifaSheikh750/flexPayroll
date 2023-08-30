import Link from "next/link";
import { useState } from "react";
import Main from "../../../components/home-page/home-6/Hero";

       
const Hero = () => {
  
  const features = [
    "Integration with Dynamics 365 F&O",
    "Defined Tax Information",
    "No Change to Payroll Process",
    "Easy Payroll Calculations",
    "User-Friendly Interface",
  ];

  const buttons = [
    {
      // platform: "Google play",
      icon: "images/payroll/app_store.png",
      className: "windows-button",
    },
    {
      // platform: "App store",
      icon: "images/payroll/google_play.png",
      className: "ios-button",
    },
  ];

  return (
    <>
      <div className="hero-banner-two position-relative mt-100 pt-30 pb-30 lg-pt-30 md-pt-100 dashboard" >
        <div className="container">
           <div className="row align-items-center" >
        <div className="col-lg-6">
          <div className="block-style-seven wow fadeInLeft" style={{paddingTop:"100px", paddingBottom:"100px"}}>
            <div className="title-style-one">
              <h3 className=" fw-500 tx-dark m0" style={{fontSize:"40px", fontWeight:"bold", color:"white"}}>
              How does FlexPayroll work?
              </h3>
            </div>
            <p className="fs-20 pt-30 pb-30 lg-pb-20" style={{color:"white"}}>
            FlexPayroll for Dynamics 365 is a powerful payroll 
            management solution that helps businesses process 
            their payroll accurately and efficiently. Here's how 
            FlexPayroll for Dynamics 365 works
            </p>
            <ul className="style-none list-item fs-10">
              {features.map((listItem, index) => (
                <li key={index} style={{color:"white", fontFamily:"body"}}>{listItem}</li>
              ))}
            </ul>

            {/* <div className="d-sm-flex align-items-center  mt-55 lg-mt-30 playAppleBtn">
              {buttons.map((button, index) => (
                  <img src={button.icon} alt="" className="lazy-img icon" style={{width:"150px", marginRight:"20px"}}/>
              ))}
                
            </div> */}
          </div>
        </div>
  
        <div className="col-lg-6 wow fadeInRight">
          <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80" style={{width:"150%"}}>
            <img
              src="images/payroll/tab.png"
              alt=""
           
              className="lazy-img main-img ms-auto"
            />
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
