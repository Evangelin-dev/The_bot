import CustomImage from "@/components/custom/Image";
import styles from "./style.module.css";
import CommonContainer from "@/components/custom/CommonContainer";
import BookYourConsultation from "@/components/custom/BookYourConsultation";
import ClientTestimonial from "@/components/ClientTestimonial";
import FaQ from "@/components/Services/FAQ";

const FAQ_DATA = [
  {
    question: "Can a website really be ready in just 3 days?",
    ans: "Yes! Once your content is submitted and the framework is approved, your fully functional 5-page website will be live in just 3 working days. We’ve delivered quick turnarounds for brands like Greenheap Foods, CashbackFarms, Step Digitals, and more.",
  },
  {
    question: "What’s included in the 5-page structure?",
    ans: "Your website will have the following pages. Home, About Us, Services, Testimonials / Our Process, Contact Us",
  },
  {
    question: "What do I need to provide to get started?",
    ans: (
      <div>
        You`ll need to share
        <ul>
          <li>Company logo and brand colors (if any)</li>
          <li>Page-wise content (text + images)</li>
          <li>Product or service details</li>
          <li>Social media handles</li>
          <li>WhatsApp number & contact info</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is the website mobile-friendly and SEO-optimized?",
    ans: "Absolutely. We build mobile-first websites using React & Next.js with basic on-page SEO, optimized images, fast load speed, and responsive layout.",
  },
  {
    question: "Will I get access to add blogs later?",
    ans: "Yes, absolutely. Your website will come with an easy-to-use admin panel where you can add, edit, or delete blog posts anytime. This helps keep your website active and improves SEO over time. No technical skills required!",
  },
  {
    question: `What if I want to add more sections in the future? Will I get support?`,
    ans: `Yes, we provide lifelong support for our clients. If you wish to add new sections or features in the future, our team is just a message away. Whether it's a new service, a gallery, or any dynamic section – we’ll help you expand your site as your business grows.`,
  },
  {
    question: `How much does it cost?`,
    ans: (
      <div>
        The total cost is ₹10,000 + GST + local taxes (as per Indian taxation
        norms).This includes:
        <ul>
          <li>5-page custom website</li>
          <li>Admin panel access</li>
          <li>WhatsApp & social media integration</li>
          <li>Basic One time SEO profiling</li>
          <li>Post-launch support for 7 days</li>
        </ul>
      </div>
    ),
  },
  {
    question: `What if I need extra pages or features?`,
    ans: `Additional pages, custom features (like payment gateway, e-commerce), or language options can be added at an extra cost. We’ll quote transparently based on your need.`,
  },
  {
    question: `Do you offer post-launch support?`,
    ans: `Yes. We offer 7 days free support post-launch for any fixes or basic assistance. Ongoing maintenance packages are available on request.`,
  },
  {
    question: `How do I make payment and start?`,
    ans: `You’ll receive a payment link after confirming. Once paid, we’ll send you a content checklist form to begin. Day 1 starts after we receive full content.`,
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "We needed a website that reflected our organic promise, and The Bot Agency delivered it in just 3 days! The process was simple, smooth, and the result was impressive. Our customers now trust us more seeing our online presence.",
    name: "Greenheap Foods",
  },
  {
    content:
      "We were unsure if a website could be done so quickly—but Bot Agency surprised us! From content sharing to final launch, everything was professionally managed. We recommend them to every agro startup looking to go digital fast.",
    name: "CashbackFarms",
  },
  {
    content:
      "Our products are technical and needed precise structuring. The team at The Bot Agency understood it all and built a clean, fast-loading website that our customers love. Delivered in just 3 days!",
    name: "Rajog Ground Screw",
  },
  {
    content: `Being a digital media company ourselves, we were very particular about design and branding. The Bot Agency exceeded our expectations with a sleek site that launched in record time.`,
    name: `Creative Head, Step Digitals`,
  },
  {
    content: `Speed without compromising on quality—that's what The Bot Agency gave us. Their 3-day delivery commitment is real and the post-launch support was also prompt and valuable.`,
    name: `Step Productions`,
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Build Website in 3 Days | The Bot Agency",
    description:
      "At The Bot Agency, we specialize in website development that not only look stunning but also drive traffic, generate leads, and enhance business growth",
    keywords: "Website, 3 Days, Build",
  };
}

const ThreeDaysWebsiteDelivery = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <CustomImage
              src={`/3-days-website/animated-geometric-background.svg`}
              wrapperClss="d-block w-100"
              imgClass={`rounded ${styles.website_dev_banner_img}`}
              alt="Three Days Deliver Banner"
            />
            <div class="carousel-caption">
              <div className="d-flex align-items-center h-100 justify-content-center row">
                <div
                  className={`col-md-8 text-center border-1 border p-5 ${styles.webite_perefect_bg} rounded`}
                >
                  <h1
                    className={`fs-1 tossing fw-bold ${styles.website_caption}`}
                  >
                    Get Your Website LIVE in Just 3 Days <br></br>For ₹10,000
                    Only!
                  </h1>
                  <h1
                    className={`${styles.right_to_left} fw-light fs-4 py-2 ${styles.website_caption}`}
                  >
                    Attention MSMEs, Professionals & Business Owners – Your
                    Digital Presence Starts Here!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.website_dev_bg_wrapper} py-4`}>
        <div className="container">
          <div className={`${styles.why_now_section_bg} rounded`}>
            <div className={`row  rounded mt-4 d-flex align-items-center`}>
              <div
                className="col-md-8 text-center text-white fadeIn"
                style={{ padding: "4.56rem" }}
              >
                <div className="fw-bold fs-2">Why Now ?</div>
                <div className={`${styles.right_to_left}`}>
                  In today’s digital-first world, your website is your business
                  card. Customers are searching for you online. If they don’t
                  find you — they find someone else. Whether you’re a lawyer or
                  a local manufacturer, your digital visibility is what makes
                  you trustworthy.
                </div>
              </div>
              <div className="col-md-4 fadeIn">
                <CustomImage
                  src={`/3-days-website/why-now.png`}
                  wrapperClss="d-block w-100"
                  imgClass={`rounded`}
                  alt="The Bot Why Now"
                />
              </div>
              <div className="col-md-12">
                {" "}
                <hr></hr>
              </div>
              <div className="col-md-12 text-white text-center pb-5 fadeIn tossing">
                <div className="fs-2 fw-bolder pb-2">Perfect For</div>
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 fs-5">
                  <div>Manufacturers & Exporters</div>{" "}
                  <div className="vr"></div>
                  <div>MSMEs & SMEs</div> <div className="vr"></div>
                  <div>Lawyers, Auditors, Company Secretaries</div>{" "}
                  <div className="vr"></div>
                  <div>Cafes, Restaurants, Salons & Gyms</div>{" "}
                  <div className="vr"></div>
                  <div>Pet Shops & Boutiques</div> <div className="vr"></div>
                  <div>Coaches, Consultants & Freelancers</div>
                </div>
              </div>
              <div className="col-md-12">
                {" "}
                <hr></hr>
              </div>
              <div className="col-md-4">
                <CustomImage
                  src={`/3-days-website/why-choose-us.png`}
                  wrapperClss="d-block w-100"
                  imgClass={`rounded`}
                  alt="The Bot Why Now"
                />
              </div>
              <div
                className="col-md-8 text-center text-white fs-3 fadeIn"
                style={{ padding: "4.56rem" }}
              >
                <div className="fw-bold fs-2"> </div>
                <div className="tossing">
                  We understand small businesses. We’ve built over 100+ websites
                  for companies like yours — and we keep it simple, affordable,
                  and powerful.
                </div>
              </div>
              <div className="col-md-12">
                {" "}
                <hr></hr>
              </div>{" "}
            </div>

            <div
              class={`row justify-content-center row-equal-height ${styles.row_equal_height} p-5`}
            >
              <div className="col-md-12 text-white text-center pb-1 fadeIn">
                <div className="fs-2 fw-bolder pb-2">
                  Our Process is Simple & Efficient
                </div>
              </div>
              <div
                class={`col-md-2 p_column text-center ${styles.p_column} p-3 d-flex align-items-center`}
              >
                <p>Make Payment</p>
              </div>
              <div
                class={`col-md-2 p_column text-center ${styles.p_column} p-3 d-flex align-items-center`}
              >
                <p>Share Content</p>
              </div>
              <div
                class={`col-md-2 p_column text-center ${styles.p_column} p-3 d-flex align-items-center`}
              >
                <p>Approve Framework</p>
              </div>
              <div
                class={`col-md-2 p_column text-center ${styles.p_column} p-3 d-flex align-items-center`}
              >
                <p>Go Live in 3 Days</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 bg-transparent p-4">
              <CustomImage
                src={`/3-days-website/6495319.jpg`}
                wrapperClss="d-block w-100"
                imgClass={`rounded ${styles.website_dev_banner_img}`}
                alt="Three Days Deliver Banner"
              />
            </div>
            <div className="col-md-6 text-white d-flex align-items-center p-4 fadeIn">
              <div>
                <h2 className="fs-bolder">What’s Included </h2>
                <div>
                  <ul className="fs-5" style={{ listStyleType: "none" }}>
                    <li
                      className={`cursor-pointer ${styles.what_included_item} py-1`}
                    >
                      <i
                        class="fa fa-check-circle text-success me-2"
                        aria-hidden="true"
                      ></i>
                      Professionally Designed Website (Responsive & Fast)
                    </li>
                    <li
                      className={`cursor-pointer ${styles.what_included_item} py-1`}
                    >
                      <i
                        class="fa fa-check-circle text-success me-2"
                        aria-hidden="true"
                      ></i>
                      SEO-Optimised with Keywords
                    </li>
                    <li
                      className={`cursor-pointer ${styles.what_included_item} py-1`}
                    >
                      <i
                        class="fa fa-check-circle text-success me-2"
                        aria-hidden="true"
                      ></i>
                      Admin Panel – Update Your Blog & Content Easily
                    </li>
                    <li
                      className={`cursor-pointer ${styles.what_included_item} py-1`}
                    >
                      <i
                        class="fa fa-check-circle text-success me-2"
                        aria-hidden="true"
                      ></i>
                      WhatsApp Chat Button – Get Instant Leads
                    </li>
                    <li
                      className={`cursor-pointer ${styles.what_included_item} py-1`}
                    >
                      <i
                        class="fa fa-check-circle text-success me-2"
                        aria-hidden="true"
                      ></i>
                      Contact Form with Auto Email Response
                    </li>
                    <li
                      className={`cursor-pointer ${styles.what_included_item} py-1`}
                    >
                      <i
                        class="fa fa-check-circle text-success me-2"
                        aria-hidden="true"
                      ></i>
                      Linked to Social Media Pages
                    </li>
                    <li
                      className={`cursor-pointer ${styles.what_included_item} py-1`}
                    >
                      <i
                        class="fa fa-check-circle text-success me-2"
                        aria-hidden="true"
                      ></i>
                      Secure Hosting Guidance & Launch Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <BookYourConsultation
              name="Limited-Time Offer: ₹10,000 Only"
              description={`No hidden charges. Just your brand — online, fast, and effective.`}
            />
          </div>
          <div className="py-4">
            <ClientTestimonial data={CLIENT_TESTIMONIAL} />
          </div>
          <div className="py-4">
            <FaQ data={FAQ_DATA} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeDaysWebsiteDelivery;
