import Link from "next/link";
import articles from "../../../data/blog";

const FeaturesBlog = () => {
  return (
    <>
      {articles.slice(35, 42).map((article) => (
        <div
          className="col-xl-4 col-lg-4 col-md-6"
          key={article.id}
          data-aos="fade-up"
          data-aos-delay={article.delay}
    
        >
          {/* shadow-lg */}
          <article
            className="blog-meta-two mt-30 shadow-md p-3 mb-5 bg-white rounded featuresCard"
            style={{
              // border: "1px solid #eaeaea",
              borderRadius: "10px",
              minHeight: "460px",
              // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            }}
          >
            <div
              style={{
                // backgroundColor: "#ECDCF9",
                padding: "30px",
                borderRadius: "10px",
                // marginBottom: "10px",  
              
              }}
            >
              <div className="icon rounded-circle m-auto d-block align-items-center justify-content-center"  >
                <img
                  src={article.icon}
                  alt="icon"
                  className="lazy-img"
                  style={{ width: "50px", height: "50px", margin: "auto" }}
                />
                <h5 className="tran3s mt-2" style={{fontSize:"20px", textAlign:"center", paddingTop:"20px"}}>{article.title}</h5>
              </div>
            </div>
            <p
              className="fs-10 mb-35"
              style={{ textAlign:"justify", paddingTop: "10px", fontSize:"15px", marginTop:"-20px" }}
            >
              {article.description}
            </p>
          </article>
        </div>
      ))}
    </>
  );
};

export default FeaturesBlog;
