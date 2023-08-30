import Link from "next/link";
import { useState } from "react";
import HeroBtnGroup from "../home-7/HeroBtnGroup";
import ModalVideo from "react-modal-video";
const Hero = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <>
    {/* <ModalVideo
    channel="youtube"
    autoplay
    isOpen={isOpen}
    videoId="M9CNNbq7AHY"
    onClose={() => setOpen(false)}
  /> */}
    <div className="hero-banner-seven p-30" style={{marginTop:"0px"}}>
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container" >
          <div className="row">
            <div className="col-lg-7 col-md-7" data-aos="fade-right">
            
              <h3 className="hero-heading fw-bold tx-dark mt-25" style={{fontSize:"60px"}}>
                Transform your <span style={{color:"#67CBA0"}}> Procurement Process </span>
                with Purchase Requisition App
              </h3>
              <p className="text-md mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
              Simplify purchasing, reduce costs, and improve control with our easy-to-use solution. With our app, customers can easily raise, review, and manage purchase requisitions from a single location, all while on the go.
              </p>
              <HeroBtnGroup />
            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left" >
            <img
              src="/images/purchase/image_1.png"
              alt="illustration"
              className="lazy-img main-illustration"
              style={{marginLeft:"50px"}}
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
    </>
  );
};

export default Hero;
