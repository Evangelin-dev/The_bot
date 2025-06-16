import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import HowItWorks from "@/components/Services/HowItWorks";
import BookYourConsultation from '@/components/custom/BookYourConsultation';

// ...existing code...


const howItWorksData = [
  {
    name: "Sign Up for Free",
    content: "No credit card required!",
    icon: (
      <CustomImage
        src={"/emailer/Sign-Up-for-Free.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Upload Your Email List",
    content: "Fully secure & compliant",
    icon: (
      <CustomImage
        src={"/emailer/Upload-Your-Email-List.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Start Sending Emails",
    content: "Watch your campaigns perform!",
    icon: (
      <CustomImage
        src={"/emailer/Start-Sending-Emails.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
];

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Bot Outreach | The Bot Agency",
    description:
      "BOT OUTREACH is India's leading bulk email service, helping startups, D2C brands, and businesses send high-deliverability emails at scale. Get AI-powered email automation, affordable pricing, and inbox placement optimization.",
    keywords:
      "bulk email service India, mass emailing for startups, best email marketing tool India, email automation for D2C brands, high-volume email sender, affordable bulk email marketing, AI-powered email deliverability, best email platform for businesses, email outreach tool India, SMTP email service for marketing",
  };
}

const Emailer = () => {
  return (
    <div className={`container common-bg`}>
      <div
        className={`row d-flex align-items-center ${style.product_title_container}`}
      >
        <div className="col-md-6">
          <h1 className={`pink_text py-3 ${style.product_title}`}>
            BOT OUTREACH – The Ultimate Mass Emailing Solution for Startups &
            D2C Brands
          </h1>
        </div>
        <div className="col-md-6">
          <div className={`${style.product_title_img} m-auto`}>
            <CustomImage src={"/about-us/Our-vision.png"} />
          </div>
        </div>
      </div>
      <div
        className={`py-2 text-center ${style.product_sub_head} text-white fw-bolder fs-3`}
      >
        Send High-Deliverability Emails at Scale – No Spam, Just Results!
      </div>
      <div className={`row d-flex align-items-center py-5`}>
        <div className="col-md-12">
          <div className="text-white fs-6">
            <div className="fs-3 fw-bolder">
              Looking to boost your email outreach effortlessly?
            </div>
            Whether you&apos;re a startup, D2C brand, or business owner, our mass
            emailing service ensures your emails land in the inbox, not spam!
          </div>

          <div>
            Choose a plan that fits your needs – with or without BOT Branding!
          </div>
        </div>
        <div className="col-md-12 fs-5">
          <ul class="list-group">
            <li class="list-group-item list-group-item-primary">
              Ideal for Startups & Small Businesses looking for cost-effective
              outreach
            </li>
            <li class="list-group-item list-group-item-primary">
              Best Emailing Solution for D2C Brands to maximize conversions
            </li>
            <li class="list-group-item list-group-item-primary">
              Bulk Emailing for Marketers & Growth Hackers
            </li>
            <li class="list-group-item list-group-item-primary">
              Automated & AI-Powered Email Blasts for Lead Generation
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center fs-2 text-white  fw-bolder py-4">
          <div className="pink_text">
            Plans & Pricing – Pick Your Perfect Fit!
          </div>
          <div className="fs-5 fw-lighter">
            Choose your plan & start sending today!
          </div>
        </div>
      </div>
      <div className="row d-flex flex-wrap">
        <div className="col-md-4">
          <div
            className={`py-4 text-center ${style.product_pricing} h-100 w-100`}
          >
            <div class="list-group px-3 h-100">
              <a
                href="#"
                class="list-group-item  list-group-item-success pt-2 pb-4 h-100"
              >
                <div className="text-center fs-5 fw-bolder py-4">
                  <div>FREE PLAN – ₹0/month</div>
                  <div className="fs-6 fw-light">(Perfect for Testing!)</div>
                </div>
                <div class="list-group px-3">
                  <a href="#" class="list-group-item  list-group-item-success">
                    Send up to 300 emails daily
                  </a>
                  <a href="#" class="list-group-item  list-group-item-success">
                    BOT Branding Logo at the Bottom of Every Email ?
                  </a>
                  <a href="#" class="list-group-item  list-group-item-success">
                    Great for startups, solopreneurs, and first-time users
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`py-4 text-center ${style.product_pricing} h-100 w-100`}
          >
            <div class="list-group px-3 h-100">
              <a
                href="#"
                class="list-group-item  list-group-item-info pt-2 pb-4 h-100"
              >
                <div className="text-center fs-5 fw-bolder py-4">
                  <div>BASIC PLAN – ₹2,000/month</div>
                </div>
                <div class="list-group px-3">
                  <a href="#" class="list-group-item  list-group-item-info">
                    Send up to 2,000 emails daily
                  </a>
                  <a href="#" class="list-group-item  list-group-item-info">
                    No BOT Branding – Your Emails Stay Clean!
                  </a>
                  <a href="#" class="list-group-item  list-group-item-info">
                    Email analytics & reporting
                  </a>
                  <a href="#" class="list-group-item  list-group-item-info">
                    Ideal for startups, marketers, and growing brands
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`py-4 text-center ${style.product_pricing} w-100`}>
            <div class="list-group">
              <a
                href="#"
                class="list-group-item  list-group-item-warning pt-2 pb-4"
              >
                <div className="text-center fs-5 fw-bolder py-3">
                  <div>ADVANCED PLAN – Custom Pricing</div>
                  <div className="fs-6 fw-light">(Call Us)</div>
                </div>

                <div class="list-group px-3">
                  <a href="#" class="list-group-item  list-group-item-warning">
                    Send 10,000 - 50,000+ emails daily
                  </a>
                  <a href="#" class="list-group-item  list-group-item-warning">
                    Full Branding Customization (Your Own Logo, Design, and
                    Domain!)
                  </a>
                  <a href="#" class="list-group-item  list-group-item-warning">
                    AI-Powered Deliverability Optimization for Maximum Inbox
                    Placement
                  </a>
                  <a href="#" class="list-group-item  list-group-item-warning">
                    Full-scale analytics & dedicated account manager
                  </a>
                  <a href="#" class="list-group-item  list-group-item-warning">
                    Best for agencies, enterprises, and large-scale D2C
                    campaigns
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center fs-2 text-white  fw-bolder py-4">
          Why Choose BOT OUTREACH Over Zoho Mail & Mailchimp?
        </div>
        <div className="col-md-12">
          <table class={`table table-bordered border-primary `}>
            <thead>
              <tr>
                <th className="bg-transparent text-white fw-normal" scope="col">
                  Features
                </th>
                <th className="bg-transparent text-white fw-normal" scope="col">
                  BOT OUTREACH
                </th>
                <th className="bg-transparent text-white fw-normal" scope="col">
                  Zoho Mail{" "}
                </th>
                <th className="bg-transparent text-white fw-normal" scope="col">
                  Mailchimp
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Free Plan</td>
                <td>Yes (300/day, No Branding)</td>
                <td>No Free Bulk Emails</td>
                <td>Yes (Limited)</td>
              </tr>
              <tr>
                <td>Daily Email Limit</td>
                <td>🚀 50,000+ in Advanced Plan</td>
                <td>⌛ Limited</td>
                <td>⌛ Limited (Depends on credits)</td>
              </tr>
              <tr>
                <td>No Branding in Basic Plan</td>
                <td>✅ Yes</td>
                <td>❌ Includes Zoho Branding</td>
                <td>❌ Includes Mailchimp Branding</td>
              </tr>
              <tr>
                <td>Custom Domain & SMTP</td>
                <td>✅ Yes (Advanced Plan)</td>
                <td>✅ Yes</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>AI-Powered Deliverability</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td>Bulk Emailing for Marketing & Sales</td>
                <td>✅ Yes</td>
                <td>❌ Focuses on business emails</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>Best for Startups & D2C Brands</td>
                <td>✅ Yes</td>
                <td>❌ Not ideal for bulk emailing</td>
                <td>⌛ High pricing for D2C</td>
              </tr>
              <tr>
                <td>Affordable Pricing</td>
                <td>✅ ₹2,000/month for 2,000 emails/day</td>
                <td>❌ Expensive for bulk use</td>
                <td>❌ Expensive (Credit-based)</td>
              </tr>
              <tr>
                <td>Personalized Support</td>
                <td>✅ Yes</td>
                <td>❌ No</td>
                <td>❌ No</td>
              </tr>
              <tr>
                <td>Advanced Analytics & AI Reporting</td>
                <td>✅ Yes</td>
                <td>❌ Basic analytics</td>
                <td>✅ Yes, but only in premium plans</td>
              </tr>
              <tr>
                <td colSpan={4}>
                  🔍 BOT OUTREACH is the best choice for startups & D2C brands
                  looking for scalable, cost-effective, and high-deliverability
                  email solutions.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <HowItWorks
        data={howItWorksData}
        col={` bot-col-12 ${
          howItWorksData?.length > 3 ? "bot-col-4" : "bot-col-3"
        }`}
      />

      <BookYourConsultation
        name={"Start for FREE today"}
        description={"Have questions? Call us now at +91 9892969648"}
      />
      <div className="row py-5">
        <div className="col-md-6 py-1">
          <div class="card bg-b-blue text-white">
            <div class="card-header">
              <h5 className="card-title d-flex align-items-center">
                Upgrade to Full Branding & Custom Email Design!
              </h5>
            </div>
            <div class="card-body">
              <div className="card-text">
                Your branding, your domain, your email templates
              </div>
              <div className="card-text">
                AI-powered email marketing for better deliverability
              </div>
              <div className="card-text">
                Advanced reporting & customer segmentation for higher
                conversions
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 py-1">
          <div class="card bg-b-blue text-white">
            <div class="card-header">
              <h5 className="card-title d-flex align-items-center">
                Why This Works for Startups & D2C Businesses?
              </h5>
            </div>
            <div class="card-body">
              <div className="card-text">
                Startups – Affordable bulk email marketing to build your
                customer base
              </div>
              <div className="card-text">
                D2C Brands – Targeted email outreach to boost conversions
              </div>
              <div className="card-text">
                Marketers – Run high-volume email campaigns without expensive
                tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emailer;
