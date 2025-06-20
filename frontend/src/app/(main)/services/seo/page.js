import CustomImage from "@/components/custom/Image";
import Branding from "@/components/Services/Branding";
import TitleBanner from "@/components/TitleBanner";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "SEO Services for Leads | The Bot Agency",
    description:
      "SEO Services for Leads: Our tailored strategies help you rank higher, attract more traffic, and generate qualified leads with on-page, off-page, and local SEO techniques",
    keywords: "Affordable SEO services",
  };
}

const HOW_IT_WORKS = [
  {
    name: "Book a Free Appointment",
    content: "Click the button and pick a time that works for you.",
    icon: "/Services/SEO/How It Works/Book-a-Free-Appointment.png"

       
  },
  {
    name: "Get a Free Website Audit",
    content: "We’ll analyze your website and identify areas for improvement.",
    icon:"/Services/SEO/How It Works/Get a Free Website Audit.png"

  },
  {
    name: "Receive a Custom SEO Plan",
    content:
      "Our team will create a strategy designed to achieve your business goals.",
      icon: "/Services/SEO/How It Works/Receive-a-Custom-SEO-Plan.png"
  
  },
  {
    name: "Watch Your Traffic and Leads Grow",
    content: "Enjoy consistent updates and measurable results.",
    icon:"/Services/SEO/How It Works/Watch-Your-Traffic-and-Leads-Grow.png"

  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "Within 3 months, our website traffic doubled, and we started getting inquiries from new clients every day. Their SEO strategy works!",
    name: "Rajog Enterprises, Manufacturer",
  },
  {
    content:
      "As an IT services company, it’s critical to rank high in competitive keywords. This team delivered beyond our expectations.",
    name: "Step Tech, IT Solutions Provider",
  },
  {
    content:
      "I was struggling to get international leads, it became with them onboard.",
    name: "Chemiplant Engineering Company, Manufacturer",
  },
];

const FAQ_DATA = [
  {
    question: "How long does it take to see results?",
    ans: "SEO is a long-term strategy, but you’ll start noticing improvements within 1-3 months.",
  },
  {
    question: "What industries do you specialize in?",
    ans: "We specialize in SEO for manufacturers, IT companies, and other service providers in India.",
  },
  {
    question: "Can you optimize my website if it’s built on [Platform]?",
    ans: "Yes, we can work with platforms like WordPress, Shopify, Wix, and cs language like java, react, Node JS, Angular.",
  },
  {
    question: "Is there a consultation fee?",
    ans: "No, the consultation and website audit are completely free of charge!",
  },
];

const WHAT_WE_OFFER = [];

const WHY_CHOOSE_US = [
  {
    name: "Industry Expertise: Years of experience working with Indian manufacturers and IT firms.",
  },
  {
    name: "Proven Results: Websites optimized by us see a 30%-50% boost in organic traffic within the first few months.",
  },
  {
    name: "Custom Strategies: No cookie-cutter solutions—every plan is tailored to your industry and goals.",
  },
  {
    name: "Affordable Pricing: Get expert SEO services without breaking your budget.",
  },
  {
    name: "End-to-End Service: From auditing to implementation, we handle it all.",
  },
];

const OUR_RESULTS = [];

const SocialMediaMgmtPage = () => {
  return (
    <>
      <TitleBanner
        title={"Dominate Search Results with Expert SEO Services"}
        fontSize="3rem"
        subTitle="Helping Indian Manufacturers and IT Companies Rank Higher, Convert More, and Grow Faster"
        introduction={
          <>
            <div>
              Boost Your Online Visibility and Attract High-Quality Leads!
            </div>
            <div>
              Schedule a free consultation to unlock your growth potential.
            </div>
          </>
        }
        bgColor="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
      />
      <div className="">
  <div className="container py-5">
    <div className="card mb-3 border-0 bg-transparent">
      <div className="row g-0 align-items-center justify-content-center text-center text-white">
        <div className="col-md-4">
          <CustomImage
            src={"/Services/SEO/Are-You-Struggling.png"}
            className="img-fluid rounded-start"
            alt="SEO Struggles"
          />
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div className="card-body">
          <h3
  className="card-title fw-bold"
  style={{
    background: "linear-gradient(90deg, rgba(110,64,231,1) 0%, rgba(137,158,216,1) 28%, rgba(89,133,184,1) 50%, rgba(83,197,166,1) 68%, rgba(19,107,126,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Are You Struggling with These SEO Challenges?
</h3>

            <ul className="list-unstyled mt-3">
              <li className="py-1">Your website isn’t appearing on the first page of search results.</li>
              <li className="py-1">Potential customers are finding your competitors instead of you.</li>
              <li className="py-1">You’re getting traffic, but no leads or conversions.</li>
              <li className="py-1">You’re unsure how to optimize your website for better rankings.</li>
              <li className="py-1 fw-bold text-white">If this sounds familiar, you’re losing valuable business every day!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      <Branding
        howItWorks={HOW_IT_WORKS}
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whyChooseUs={WHY_CHOOSE_US}
        OurResults={OUR_RESULTS}
        whatWeOffer={WHAT_WE_OFFER}
        bookConsultTitle="Your Competitors Are Ranking Higher—Why Aren’t You?"
        bookConsultDescription="Let’s change that. Our team is ready to help your business dominate search results."
      />
    </>
  );
};

export default SocialMediaMgmtPage;
