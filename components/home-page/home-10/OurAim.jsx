import Link from "next/link";

const OurAim = () => {
  const aimItems = [
    {
      title: "About us",
      heading: "Boost Your Business and Empower Your Employees with KAISPE Loan Management App",
      text: "The KAISPE advance loan App offers numerous benefits for both employees and businesses. Here are some of the key benefits:",
      list: [
        "Improved Access to Funds",
        "Increased Employee Productivity",
        "Customizable Workflow",
        "Multi-Language Support",
        "Enhanced Security",
        "Improved Employee Satisfaction",
      ],
      link: "/pages-menu/about-us-v1",
    },
  ];

  const imageItems = [
    { src: "/images/loan/tabDashboard.png", alt: "shape" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 ms-auto order-lg-last">
        {aimItems.map((item, index) => (
          <div
            className="block-style-one pt-35"
            data-aos="fade-left"
            key={index}
          >
            <div className="title-style-one">
              {/* <div className="sc-title text-uppercase">{item.title}</div> */}
              {/* <h3 className="main-title fw-bold tx-dark m0"><span style={{ color: "#6A3197" }}></span></h3> */}
            <h3 className="  fw-bold tx-dark m0 appBannerHeading" style={{ fontSize: "38px", fontWeight:"bold" }}>
                 Boost Your Business and Empower Your Employees with KAISPE <span style={{ color: "#6A3197" }}> Loan Management App </span> 
            </h3>
            </div>
            <p className="text-md tx-dark pt-35 pb-40 lg-pb-20">{item.text}</p>
            <ul className="style-none list-item fs-18">
              {item.list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-md-12 order-lg-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80" style={{marginTop:"50px"}}>
          {imageItems.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={item.className}
              style={{ width: "100%", height: "100%"}}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default OurAim;
