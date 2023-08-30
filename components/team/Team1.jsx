import Image from "next/image";
import Link from "next/link";
const teamMembers = [
  {
    id: 1,
    name: "Accurate Payroll Calculations",
    role: "The Highly Flexible Tax Engine",
    imgSrc: "/images/payroll/mobIcon.png",
    className:"pb-50 color-#145DA  ",
  },
  {
    id: 2,
    name: "Streamlined Payroll proccesses",
    role: "End-to-End Support For Payroll Processing,",
    imgSrc: "/images/payroll/docIcon.png",
  },
  {
    id: 3,
    name: "Data-Driven Management",
    role: "Provides a Range Of Reporting and Analytics Tools",
    imgSrc: "/images/payroll/graphIcon.png",
  },
  {
    id: 4,
    name: "Improved HR Management",
    role: "Provides Tools For Managing Your HR Processes",
    imgSrc: "/images/payroll/handIcon.png",
  },
  // {
  //   id: 5,
  //   name: "Zubayer Al Hasan",
  //   role: "Developer",
  //   imgSrc: "/images/team/img_12.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Jannatul Ferdaus",
  //   role: "CEO",
  //   imgSrc: "/images/team/img_13.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Rashed Kabir",
  //   role: "Designer",
  //   imgSrc: "/images/team/img_14.jpg",
  // },
  // {
  //   id: 8,
  //   name: "Angelina Shelly",
  //   role: "Analyst",
  //   imgSrc: "/images/team/img_15.jpg",
  // },
];

const Team1 = () => {
  return (
    <>

      <div className="col-lg-12 ms-auto " data-aos="fade-left">
        <h2 className="tx-dark mb-20" style={{fontWeight:"", textAlign:"center"}}>Why do you need to optimize your business using FlexPayroll?</h2>
        <p className="text-lg tx-dark opacity-75 mb-0 lg-mb-20 mainText" style={{ fontSize: "20px", fontStyle: "", textAlign:"center" }}>
           For your company to remain competitive in the current fast-paced business environment, 
           you must optimize your business processes.
              </p>
        </div>
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-md-6 col-sm-6 col-8"
          style={{margin:"auto"}}
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <div className="team-block-two mt-40 pb-20">
              <div className="info text-center" style={{padding:"35px", height:"350px"}}>
              <img
                style={{width:"20%", height:"17%", margin:"auto", marginTop:"20px"}}
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img "
              />
                <h5 className="tx-dark fs-20 mb-5 mt-50" style={{color:"#145DA0"}}>{member.name}</h5>
                <div className="tx-dark opacity-75 mt-20" style={{color:"#145DA0", paddingBottom:"20px"}}>{member.role}</div>
              </div>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default Team1;
