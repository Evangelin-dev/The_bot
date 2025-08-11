import CommonBanner from "@/components/CommonBanner";
import styles from "./styles.module.css";
import PrCard from "@/components/Pricing/PrPeople/PrCard";
import CustomImage from "@/components/custom/Image";
import Clients from "@/components/Clients";
import BookYourConsultation from "@/components/custom/BookYourConsultation";
import WhyChooseUsCarousel from "@/components/About-carousel";


export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "About Us | The Bot Agency",
    description:
      "Have questions or need help? Get in touch with The Bot Agency’s team for inquiries, consultations, or support. We're here to help you grow your business.",
    keywords: "About The Bot Agency",
  };
}

const AboutUsPage = () => {
  return (
    <div>
      <CommonBanner
        title={
          <span className="fw-normal">
            Your Brand. Our Strategy. Global Impact.
          </span>
        }
        subTitle={
          <div>
            At The Bot Agency, we don’t just create marketing strategies—we
            engineer business growth. We specialize in global branding, B2B lead
            generation, and digital marketing for exporters, SaaS companies, and
            agency owners who want to scale internationally and dominate their
            industries.
            <br />
            Our story began with a vision—one that grew from real-world
            experience.
          </div>
        }
      />
      <div className="container">
        <div className="d-flex">
          <div className="w-100">
            <div className={`${styles.how_it_started_cotainer} p-5 text-white`}>
              <h1 className="pink_text">How It Started ? </h1>

              <hr className="mt-4 mb-4" />

              <div className="py-2">
                Our founder,{" "}
                <span className="fw-bolder pink_text">Evangelin Gladin,</span>{" "}
                has over 19 years of experience in international sales &
                marketing. Over the years, she worked with businesses across
                India, the Gulf region, and African markets, helping them scale
                through strategic marketing, brand positioning, and business
                expansion strategies.
              </div>
              <div className="py-2">
                As she consulted companies across multiple industries, she saw a
                major gap—businesses with incredible products and services often
                struggled to position themselves globally, generate quality
                leads, and establish a strong brand presence.
              </div>
              <div className="py-2">
                This realization led to a powerful idea: What if we could build
                a system that helps businesses scale beyond borders with a
                proven digital-first approach?
              </div>
              <div className="py-2">
                The Bot Agency was born—built to help businesses like yours grow
                with cutting-edge digital marketing strategies, branding, and
                sales automation.
              </div>
              <div className="py-2">
                We didn’t start as an agency—we started as a mission. A mission
                to help businesses break barriers, create impactful brands, and
                generate high-value clients globally
              </div>
            </div>
          </div>
        </div>

        <WhyChooseUsCarousel />
        <div className="d-flex flex-wrap">
          <div className={`${styles.our_mission_section} `}>
            <div className="text-center fw-bolder fs-1 pink_text">
              <CustomImage src={"/about-us/Our-vision.png"} />
            </div>
          </div>
          <div
            className={`${styles.our_mission_content_section} lh-sm fs-3 text-white d-flex align-items-center`}
          >
            <div>
              <div className="fw-bolder fs-1 pink_text">Our Vision</div>
              <div className="fw-normal py-4">
                To empower exporters, SaaS companies, and agencies with B2B
                digital marketing strategies that scale revenue, generate
                high-value leads, and build global brands.
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div
            className={`${styles.our_mission_content_section} lh-sm fs-3 text-white d-flex align-items-center`}
          >
            <div>
              <div className="fw-bolder fs-1 pink_text">Our Mission</div>
              <div className="fw-normal py-4">
                To help Indian businesses increase their online visibility,
                generate global buyers, and expand internationally through
                intelligent digital marketing, automation, and branding
                solutions.
              </div>
            </div>
          </div>
          <div className={`${styles.our_mission_section} p-5`}>
            <div className="text-center fw-bolder fs-1 pink_text">
              <CustomImage src={"/about-us/Our-mission.png"} />
            </div>
          </div>
        </div>
        <div className={`${styles.founder_bg} text-white fs-6 mt-5`}>
          <div className="fw-bolder fs-1">
            Meet the Founder –{" "}
            <span className="text-black"> Evangelin Gladin</span>
          </div>
          <hr />

          <div className="d-flex flex-wrap">
            <div className={`${styles.about_us_founder_content_wrapper}`}>
              <div className="py-2">
                <span className="text-black fw-bolder"> Evangelin Gladin</span>,
                a seasoned international sales & marketing strategist, has spent
                the last 19 years working with businesses in India, the Gulf,
                and Africa, helping them expand their brands and scale
                internationally.
              </div>
              <div className="py-2">
                Through deep experience in export branding, SaaS marketing, and
                B2B sales strategies, she realized that most businesses struggle
                with digital transformation, lead generation, and positioning
                themselves globally.
              </div>
              <div className="py-2">
                This led to the creation of The Bot Agency—a high-impact digital
                growth partner for businesses ready to scale beyond borders.
              </div>
              <div className="py-2">
                Under her leadership, The Bot Agency has successfully
                <ul>
                  <li>
                    Helped 50+ businesses grow with digital marketing &
                    branding.
                  </li>
                  <li>Developed marketing frameworks for global expansion.</li>
                  <li>
                    Generated consistent revenue growth for exporters, SaaS
                    founders, and agencies.
                  </li>
                </ul>
              </div>
              <div className="py-2">
                Today, she and her expert team of strategists, content creators,
                and digital growth specialists are on a mission to help
                businesses scale, automate, and dominate their industries.
              </div>
            </div>

            <hr />

            <div
              className={`d-flex justify-content-center align-items-center ${styles.about_us_founder_img}`}
            >
              <CustomImage
                src={"/profile/Evangelin-Gladin.jpeg"}
                wrapperClss={styles.about_us_founder_img_container}
                alt="Evangelin Gladin"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <Clients />
      </div>

      <BookYourConsultation
        name={"Let’s Scale Your Business to the Next Level!"}
        description={
          "Ready to expand globally? Let’s build your brand & 10X your growth!"
        }
      />
    </div>
  );
};

export default AboutUsPage;
