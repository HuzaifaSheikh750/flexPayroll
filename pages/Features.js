import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/Header2";
import Subsribe from "../components/home-page/home-7/Subsribe";
import Link from "next/link";
import Social from "../components/home-page/home-7/Social";
import Service1 from "../components/services/Service1";
import Features from "../components/home-page/home-7/Features4";
import Footer from '../components/footer/Footer'
import Blog from "../components/home-page/home-4/FeaturesBlog";
// import Footers from "./Footers"

const contact = () => {
  return (
    <>
      <Seo pageTitle="FlexPayroll | Features" />

      <DefaulHeader />
      {/* purchasefeature */}
      <div className="fancy-feature-seven pt-200 lg-pt-100 purchasefeature ">
        <div className="container " >
          <div className="row align-items-center" style={{marginTop:"50px"}}>
            <div className="col-xl-10 col-lg-10" data-aos="fade-right">
              <div className=" text-center text-lg-start">
                <h2 className="main-title fw-500 tx-dark m0" style={{color:"white"}}>
                  Our Application <span>Features.</span>
                </h2> 
                <p className="text-lg text-center text-lg-start md-pt-30 m0" style={{fontStyle:"italic", fontSize:"20px", color:"white"}}>
                A complete solution to simplify your payroll and HR procedures is provided by Dynamics 365 with FlexPayroll for Payroll & HR. FlexPayroll is a highly flexible and configurable solution that can be tailored to your company specific needs
              </p>
              </div>
              {/* /.title-style-four */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="container pt-50 lg-pt-10" style={{backgroundColor:"white",  marginTop:"40px", borderRadius:"30px", marginBottom:"100px"}}>
          <div className="row gx-xxl-5" style={{padding:"50px", marginTop:"-100px"}}>
            <Blog />
          </div>
        </div>
      </div>


      {/* <div
        className="  mt-130 lg-mt-80 tag_line"

        style={{height:"auto", padding:"50px 0px", width:"90%", margin:"auto",}}
        data-aos="fade-up"
      >
        <div className="container  ">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40 ">
            <div className="row ">
              <div className="col-xl-12 col-md-11 m-auto ">
                <div className="row align-items-center">
                  <div className="col-lg-12"  style={{display:"grid", placeItems:"center", justifyContent:"center"}}>
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h3 className="main-title fw-500 text-white m0" style={{fontSize:"40px", textAlign:"center", paddingLeft:"60px", paddingRight:"60px"}}>
                      Try out the KAISPE Loan Management App<br/> today!
                      </h3>
                    </div>
                    <Link      
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                      style={{marginTop:"30px", backgroundColor:"#389CF5", borderRadius:"10px"}}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="footer-style-ten theme-basic-footer zn2 position-relative backFeature" style={{marginTop:"200px"}}>
        <div className="container" >
          <div className="inner-wrapper" style={{marginBottom:"50px", marginTop:"100px"}}>
            <div className="row justify-content-between"  style={{marginTop:"200px"}}>
              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/payroll/flexWhite.png" alt="logo" width={220} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#61CBFF"}}>KAISPE</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500">Email Address</h5>
                  
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fa fa-envelope text-white fs-18" style={{marginRight:"15px"}}/>info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500">Contact Number</h5>
             
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fa fa-phone text-white fs-18" style={{marginRight:"15px"}}/> USA : (+1)-315-791-4472 <br></br>
                <i className="fa fa-phone text-white fs-18" style={{marginRight:"15px"}}/>   PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {/* <DefaultFooter /> */}
   
    </>
  );
};

export default contact;
