import Link from "next/link";

const Property = () => {
  const properties = [
    {
      image: "/images/loan/mobileLeft.png",
      title: "Loan Request Management",
      text: "One of the key features of this loan app is Loan Request Management. This feature allows employees to submit loan...",
      delay: "100",
    },
    {
      image: "/images/loan/mobileMid.png",
      title: "Cash vs. Non Cash Loans",
      text: "The app also includes Cash vs. Non-Cash Loans, a feature that differentiates between different types of loans...",
      delay: "200",
    },
    {
      image: "/images/loan/mobileRight.png",
      title: "Automated Notifications",
      text: "Another important feature of the app is Automated Notifications. The app automatically sends notifications...",
      delay: "300",
    },
  ];

  return (
    <>
      {properties.map((property, index) => (
        <div
          className="col-lg-4 col-md-5 col-sm-6 col-7"
          key={index}
          data-aos="fade-up"
          data-aos-delay={property.delay}
        >
          <div className="card-style-twentyOne position-relative mt-35 features-mobile" style={{backgroundColor:"#F0DEFF", borderTopRightRadius:"20px", borderTopLeftRadius:"20px"}}>
            <img
            
              src={property.image}
              alt={property.title}
              className="lazy-img w-100 features-image"
            />
            <div className="hover-overlay d-flex flex-column align-items-center position-absolute tran3s">
              <h3 className="tx-dark features-heading" style={{fontSize:"22px", color: "#6A3197", fontWeight:"bold", textAlign:"center"}}>{property.title}</h3>
              <p className="tx-dark features-text" style={{padding:"20px"}}>{property.text}</p>
              {/* <Link
                href="/pages-menu/service-details"
                className="btn-four fw-500 mt-auto"
              >
                View Details
              </Link> */}
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default Property;
