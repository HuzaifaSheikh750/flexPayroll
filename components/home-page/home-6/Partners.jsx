const   Partners = () => {
  const partnersData = [
    {
      imgSrc: "/images/field/solgari.png",
      imgAlt: "logo",
      divClass: "img-box bx-a",
      link: "#",
      colClasses: "col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "100",
    },
    {
      imgSrc: "/images/field/eemc.png",
      imgAlt: "logo",
      divClass: "img-box bx-b",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "200",
    },
    {
      imgSrc: "/images/field/microsoft.png",
      imgAlt: "logo",
      divClass: "img-box bx-c",
      className: "micro",
      link: "#",
      colClasses: "col-lg-3 col-md-4 col-6 micro",
      dataAos: "fade",
      dataAosDelay: "300",
    },
    {
      imgSrc: "/images/field/crayon.png",
      imgAlt: "logo",
      divClass: "img-box bx-d",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "300",
    },
    {
      imgSrc: "/images/field/velosio.png",
      imgAlt: "logo",
      divClass: "img-box bx-e",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "400",
    },
      // {
      //   imgSrc: "/images/logo/p-6.png",
      //   imgAlt: "logo",
      //   divClass: "img-box bx-f",
      //   link: "#",
      //   colClasses: "col-xl-4 col-lg-2 col-md-4 col-6",
      //   dataAos: "fade",
      //   dataAosDelay: "500",
      // },
      // {
      //   imgSrc: "/images/logo/p-7.png",
      //   imgAlt: "logo",
      //   divClass: "img-box bx-g",
      //   link: "#",
      //   colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      //   dataAos: "fade",
      //   dataAosDelay: "600",
      // },
      // {
      //   imgSrc: "/images/logo/p-8.png",
      //   imgAlt: "logo",
      //   divClass: "img-box bx-h",
      //   link: "#",
      //   colClasses: "col-xl-3 col-lg-3 col-md-4 col-6",
      //   dataAos: "fade",
      //   dataAosDelay: "700",
      // },
      // {
      //   imgSrc: "/images/logo/p-9.png",
      //   imgAlt: "logo",
      //   divClass: "img-box bx-i",
      //   link: "#",
      //   colClasses: "col-xl-3 col-lg-12 col-md-4 col-6 m-auto",
      //   dataAos: "fade",
      //   dataAosDelay: "800",
      // },
  ];
  // className={`img-box ${partner.className}`}
  return (
    <div className="row">
      {partnersData.map((partner, index) => (
        <div
          key={index}
          className={partner.colClasses}
          data-aos={partner.dataAos}
          data-aos-delay={partner.dataAosDelay}
        >
           <div className={`img-box ${partner.className}`}>
            {/* <a href="#"> */}
              <img src={partner.imgSrc} alt="logo" className="lazy-img"  />
            {/* </a> */}
          </div>
          {/* /.img-box */}
        </div>
      ))}
    </div>
  );
};

export default Partners;
