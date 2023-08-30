import Link from "next/link";
const featureData = [
  {
    id: 1,
    icon: "/images/payroll/hand.png",
    title: "Accurate Payroll Taxation",
    text: "With highly flexible tax engine, its enables you to calculate payroll tax deductions",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/payroll/setting.png",
    title: "Customizable Taxation Rules",
    text: "Dynamics 365 FlexPayroll allows you to define taxation rules and sub-rules",
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/payroll/graph.png",
    title: "Reporting and Analytics",
    text: "Dynamics 365 FlexPayroll provides a range of reporting and analytics tools.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 4,
    icon: "/images/payroll/integration.png",
    title: "Formula-Based Functionality",
    text: "By using a formula-based functionality for associating rules with formulas.",
    backgroundColor: "#F7EDFF",
  },
];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        // style={{ backgroundColor }}
      >
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-30">{text}</p>

    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
      <Link
                href="/Features"
                className="btn-four fw-500 "
                style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#145DA0", width:"200px", height:"60px", borderRadius:"10px", margin:"auto", marginTop:"20px", marginBottom:"50px"}}
              >
                View More
              </Link>
      {/* <div className="bg-wrapper tablet" style={{backgroundColor:"", marginTop:"40px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img
                src="/images/payroll/secondTablet.svg"
                alt="media"
                style={{width:"100%", height:"auto"}}
                className="lazy-img main-screen  tablet"
              />
            </div> */}
    </>
  );
};

export default Features;
