import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Plan 1",
    details: "10-49 Users",
    price: "7.00",
    billing: "",
    limit: "/user/month",
    btnClass: "trial-button",
    heading: "Field Inspection App functionality includes:",	
    features: [
      "A light weight field inspection app that provides a collaborative platform between back office, customers and field service staff",
      "Back office can create Customer record with multiple field service sites",
      "Projects and jobs can be created and assign to relevant field service supervisor and crew members",
      "Field service staff can locate customer site, get best possible route and other customers location using Bing map right from the app ",
      "Multi language support",
      "Notifications at various project/job stages",
      "Field service staff can generate a comprehensive report with customer asset pictures using different report layout templates", 
      "Reports can be distributed out via email", 
    ],
    bgColor: "#FFF7EB",
    animDelay: "0",
  },
  {
    id: 2,
    name: "Plan 2",
    details: "50-100 Users",
    price: "6.00",
    billing: "",
    limit: "/user/month",
    btnClass: "btn-fourteen fw-500 tran3s w-100 ",
    heading: "Field Inspection App functionality includes:",	
    features: [
      "A light weight field inspection app that provides a collaborative platform between back office, customers and field service staff",
      "Back office can create Customer record with multiple field service sites",
      "Projects and jobs can be created and assign to relevant field service supervisor and crew members",
      "Field service staff can locate customer site, get best possible route and other customers location using Bing map right from the app ",
      "Multi language support",
      "Notifications at various project/job stages",
      "Field service staff can generate a comprehensive report with customer asset pictures using different report layout templates", 
      "Reports can be distributed out via email", 
    ],
    bgColor: "#E2F2FD",
    animDelay: "100",
  },
  {
    id: 3,
    name: "Plan 3",
    details: "Above 100 Users",
    price: "4.50",
    billing: "",
    limit: "/user/month",
    btnClass: "trial-button ",
    heading: "Field Inspection App functionality includes:",	
    features: [
      "A light weight field inspection app that provides a collaborative platform between back office, customers and field service staff",
      "Back office can create Customer record with multiple field service sites",
      "Projects and jobs can be created and assign to relevant field service supervisor and crew members",
      "Field service staff can locate customer site, get best possible route and other customers location using Bing map right from the app ",
      "Multi language support",
      "Notifications at various project/job stages",
      "Field service staff can generate a comprehensive report with customer asset pictures using different report layout templates", 
      "Reports can be distributed out via email", 
    ],
    bgColor: "#FFEBEB",
    animDelay: "200",
  },
  // {
  //   id: 4,
  //   name: "Interprise",
  //   details: "Above 10 Users",
  //   price: "10.00",
  //   billing: "",
  //   limit: "/user/month",
  //   btnClass: "trial-button btn3",
  //   heading: "All of Basic plan plus:",	
  //   features: [
   
  //     "Multi site",
  //     "Multi language",
  //     "Delegation of Authority (Role based approval workflow)",
  //     "My Approvals workspace",
  //     "Approval history", 
  //   ],
  //   bgColor: "#E4F4F1",
  //   animDelay: "300",
  // },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  return (
    <>
    
      {plans.map((plan) => (
        <div
          className="col-xl-4  col-sm-6"
          key={plan.id}
          data-aos="fade-up"
        //  style={{height:"100px"}}
          data-aos-delay={plan.animDelay}
        >
          <div
        
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "active" : ""
            }`}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {plan.details}
            </div>
            <div
              className="top-banner align-items-center "
              style={{ background: plan.bgColor }}
            >
              <div className="price fw-500" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <sup>$</sup>
                {plan.price}
              </div>
              <div>
                <span>{plan.billing}</span>
                <em className="d-block" style={{textAlign:"center"}}>{plan.limit}</em>
              </div>
            </div>

            <p style={{marginTop:"30px", marginBottom:"-30px", textAlign:"start", fontWeight:"500"}}>{plan.heading}</p> 
            {/* /.top-banner */}
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                <li key={i} style={{fontSize:"15px"}}>{feature}</li>
              ))}
            </ul>
            <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspfiapp?tab=PlansAndPrice" target="_blank" className={plan.btnClass}>
            Get it now
            </a>
            {/* <div className="trial-text pt-25 tx-dark">
              No card required, cancel any time
            </div> */}
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </>
  );
};

export default Pricing;
