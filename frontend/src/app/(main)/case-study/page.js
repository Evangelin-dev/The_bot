import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import CommonBanner from "@/components/CommonBanner";
import TitleBanner from "@/components/TitleBanner";
import Link from "next/link";

const CASE_STUDY_LIST = [
  {
    name: "Turning Challenges into Opportunities: Rajog GroundScrew’s International Growth Story",
    date: new Date(),
    time_to_read: "12 mins",
    written_by: "The Bot",
    slug: "turning-challenges-into-opportunities-rajog-groundscrews-international-growth-story",
    img: "/blog/start up blog.jpg",
    description:
      "We identified an untapped opportunity in the international market where demand for ground screw products was significantly higher. Instead of targeting Indian customers, we repositioned their business to cater to international clients..",
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Case Study | The Bot Agency",
    description:
      "Explore SEO, branding, automation, LinkedIn outreach, paid advertising, and industry-specific trends to scale your business globally.",
    keywords:
      "B2B marketing blogs, Export business growth strategies blogs, SaaS lead generation insights, Global branding for B2B company case studies",
  };
}

const CaseStudyListPage = async () => {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/?type=CaseStudy&access_key=${process.env.NEXT_PUBLIC_CLIENT_ID}`
  );
  let blogsData = await data.json();

  return (
    <>
      <TitleBanner
        title={`The Bot Case Studies`}
        bgColor="linear-gradient(90deg, #04041e 5%,rgb(35, 35, 89) 24%, #000000 100%)"
        showContactUs={false}
      />
      <div className={`container ${style.blog_page_bg} py-5`}>
        <div className={`container`}>
          <div className="row g-0 justify-content-start">
            {blogsData?.results?.map((case_study, caseStudyIdx) => {
              return (
                <div className="" key={`case-study-${caseStudyIdx}`}>
                  <div
                    className={`${style.blog_container} d-flex flex-wrap fadeIn`}
                  >
                    <CustomImage
                      src={case_study.image}
                      imgClass={style.blog_img}
                      wrapperClss={style.img_wrapper}
                    />
                    <div
                      className={`px-3 d-flex align-items-center ${style.blog_short_desc}`}
                    >
                      <div>
                        <div className={`${style.blog_item__info} pb-2`}>
                          <span className="pe-2">
                            {new Date(case_study?.date).toLocaleString(
                              "lookup"
                            )}
                          </span>
                          <span>
                            <i
                              className={`fa fa-circle ${style.dot_icon} pe-2`}
                              aria-hidden="true"
                            ></i>
                            {case_study.time_to_read}
                          </span>
                        </div>
                        <div className={`${style.blog_title}`}>
                          <Link href={`/case-study/${case_study.slug}`}>
                            {case_study.title}
                          </Link>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: case_study.description,
                          }}
                        ></div>
                        <Link href={`/case-study/${case_study.slug}`}>
                          <span href="#"> Read more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom border-2 py-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyListPage;
