import Link from "next/link";

const AppBanner = () => {
    const features = [
      "Streamlined Data Management",
      "Improved Visibility",
      "Enhanced Reporting",
      "Increased Efficiency",
      "Scalability",
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
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="block-style-seven wow fadeInLeft">
            <div className="title-style-one">
              {/* <div className="sc-title text-uppercase">MOBILE APP</div> */}
              <h3 className=" fw-500 tx-dark m0" style={{fontSize:"40px", fontWeight:"bold"}}>
              Get rid of lengthy waits with KAISPE Loan Management App

              </h3>
            </div>
            <p className="fs-20 pt-30 pb-30 lg-pb-20">
            The streamlined methodology used by KAISPE also benefits employers. Bid adieu to loan management's hassle. Our software makes it simple for you to keep track of and handle loans, freeing you time to concentrate on developing your company.
            </p>
            <div className="d-sm-flex align-items-center  mt-55 lg-mt-30 playAppleBtn">
              {buttons.map((button, index) => (
                // <a
                //   href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspfiapp?tab=Overview"
                //   target="_blank"
                //   className={`d-flex align-items-center ${button.className}`}
                //   key={index}
                //   style={{marginRight:"20px"}}
                // >
                  <img src={button.icon} alt="" className="lazy-img icon" style={{width:"150px", marginRight:"20px"}}/>
                
                // </a>
              ))}
                
            </div>
  
           
            {/* <div className="ms-auto text-center text-lg-start">
            <Link
              href="/Features"
              className="btn-twentyTwo fw-500 tran3s"
              style={{ backgroundColor: "#6A3197", marginTop: "40px" }}
            >
              Read More
            </Link>
          </div> */}
            {/* /.platform-button-group-three */}
          </div>
          {/* /.block-style-seven */}
        </div>
        {/* End col-6 */}
  
        <div className="col-lg-7 wow fadeInRight">
          <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80" style={{width:"100%"}}>
            <img
              src="images/loan/loanTab.png"
              alt=""
              // width={600}
              className="lazy-img main-img ms-auto"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
      </div>
    );
  };
  
  export default AppBanner;
  