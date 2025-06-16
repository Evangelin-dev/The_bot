import Link from "next/link";
import CustomImage from "../custom/Image";
import style from "./styles.module.css";

const OurExpertArticle = ({ data = [] }) => {
  return (
    <div className={`container pt-5`}>
      <h1 className={`${style.article_heading} pink_text pt-2 fadeIn`}>
        What We Offer
      </h1>
      <div className="row g-4">
        {data.map((what_we_offer, blogIdx) => {
          return (
            <div key={`blog-${blogIdx}`} className={`col-sm-6 col-md-3 fadeIn`}>
              <div
                className={`${style.article_bg} h-100 border border-1 rounded-3 d-flex align-items-center`}
              >
                <div className="p-3 ">
                  {/* <div className="px-3">
                    <span className="badge bg-primary">Primary</span>
                  </div> */}
                  {/* <div className="p-3 border-1 rounded-1">
                    <CustomImage src={`/blog/image.png`} />
                  </div> */}
                  <div>
                    <div
                      className={`px-3 ${style.article_title} pb-2 text-center`}
                    >
                      {what_we_offer.name}
                    </div>
                    <div
                      className="px-3 py-2 text-center"
                      style={{ color: "#a1a1a9" }}
                    >
                      {what_we_offer.description}
                    </div>
                  </div>
                  <div className="px-3">
                        <Link
                        href={what_we_offer.link}
                        className="d-flex pink_text align-items-center justify-content-between py-3"
                         >
                        <span>Read more</span>
                        <span>
                          <CustomImage src="/rightArrowPink.svg" />
                        </span>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurExpertArticle;
