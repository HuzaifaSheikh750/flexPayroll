import Link from "next/link";

const AppBanner = () => {
  const features = [
    "Improved Access to Funds",
    "Increased Employee Productivity ",
    "Customizable Workflow",
    "Multi-Language Support",
    "Enhanced Security",
    "Improved Employee Satisfaction",
  ];

  
  const buttons = [
    {
      // platform: "Google play",
      icon: "images/field/app_store.png",
      className: "windows-button",
    },
    {
      // platform: "App store",
      icon: "images/field/google_play.png",
      className: "ios-button",
    },
  ];


  return (
    <div className="container ">

  
    <div className="row align-items-center" >
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight order-md-first ">
        <div className="illustration-holder  pt-50 pb-50 pe-md-5 lg-mt-80"  >
          <img
            src="images/loan/tabDashboard.png"
            alt=""
            className="lazy-img main-img ms-auto img6"
            style={{ width: "600px"}}
          />
        </div>
      </div>

      <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one">
          {/* <div className="sc-title" style={{ fontWeight: "bold", marginBottom: "30px"}}>Benefit</div>   */}
            <h3 className=" fw-500 tx-dark m0 appBannerHeading" style={{ fontSize: "38px", fontWeight:"bold" }}>
           Boost Your Business and Empower Your Employees with KAISPE  <span style={{ color: "#6A3197" }}> Loan Management App </span> 
            </h3>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
          The KAISPE advance loan App offers numerous benefits for both employees 
          and businesses. Here are some of the key benefits:
          </p>
          <ul className="style-none list-item" >
            {features.map((feature, index) => (
              <li key={index} style={{ fontSize: "17px" }}>{feature}</li>
            ))}
          </ul>
          {/* <div className="d-sm-flex align-items-center  mt-55 lg-mt-30">
              {buttons.map((button, index) => (
                <a
                  href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspfiapp?tab=Overview"
                  target="_blank"
                  className={`d-flex align-items-center ${button.className}`}
                  key={index}
                  style={{marginRight:"20px"}}
                >
                  <img src={button.icon} alt="" className="lazy-img icon" style={{width:"150px", marginRight:"20px"}}/>
                
                </a>
              ))}
                
            </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppBanner;
