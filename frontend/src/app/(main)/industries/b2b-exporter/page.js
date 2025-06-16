import B2BExporterVideo from "@/components/B2b-Exporter-Video";
import CustomImage from "@/components/custom/Image";
import Industries from "@/components/Industries";
import OfferPopUp from "@/components/OfferPopup";
// import OfferPopUp from "@/components/OfferPopup";
// import Branding from "@/components/Services/Branding";
import TitleBanner from "@/components/TitleBanner";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Data-Driven Export Solutions | The Bot Agency",
    description:
      "Our data-backed export solutions help manufacturers in petrochemical, construction, and pharmaceutical industries secure exclusive B2B leads in 3 global markets. Guaranteed enquiries or We guarantee results within 6 months.",
    keywords:
      "Data-driven B2B export solutions, Custom machinery export services",
  };
}

const HOW_IT_WORKS = [
  {
    name: "Detailed Data Analysis",
    content:
    
      "Stop relying on guesswork. We analyze exporter data to identify the most profitable markets and ideal buyers for your product..",
      icon:"/Industries/B2B Exporter/How It Works/Detailed Data Analysis.png"
  
         
  },
  {
    name: "Product Profiling & Detailing",
    content:
      "Present your products professionally to attract serious buyers who value customization.",
      icon:"/Industries/B2B Exporter/How It Works/Product-Profiling-&-Detailing.png"
  
        
  },
  {
    name: "Performance Marketing for Exporters",
    content:
      "Targeted, data-backed campaigns to generate unique leads exclusively for your business.",

      icon: "/Industries/B2B Exporter/How It Works/Performance-Marketing-for-Exporters.png"
  
       
  },
  {
    name: "Risk-Free Guarantee",
    content:
      "No export enquiries within 6 months? We refund your entire investment—no questions asked.",

      icon: "/Industries/B2B Exporter/How It Works/Risk-Free Guarantee.png"
  
         
  },
];

const CLIENT_TESTIMONIAL = [
  {
    content:
      "We used to rely on exhibitions, but this service changed the game. Within 3 months, we expanded into 2 countries with exclusive leads. It’s efficient and reliable.",
    name: "Rajog Machinery",
  },
  {
    content:
      "Their data-driven approach replaced our outdated methods. Now we have consistent enquiries in the petrochemical sector, and our exports have grown tremendously.",
    name: "Chemiplant",
  },
  {
    content:
      "Trade shows weren’t working for us anymore. Their marketing campaigns helped us secure deals internationally while saving time and effort. Truly modern and effective!",
    name: "Groundscrew",
  },
];

const FAQ_DATA = [
  {
    question: "What does the ₹3 Lakh investment include?",
    ans: "It includes detailed export market research, product profiling, targeted performance marketing campaigns, and exclusive B2B lead generation.",
  },
  {
    question: "How does the money-back guarantee work?",
    ans: "If we fail to generate export enquiries for your business within 6 months, we’ll refund your entire investment.",
  },
  {
    question: "How are leads generated?",
    ans: "We use advanced performance marketing and data-driven strategies to connect you with buyers seeking your customized machinery.",
  },
  {
    question: "Who is this service best suited for?",
    ans: "Manufacturers and exporters of customized machinery or equipment in the petrochemical, construction, and pharmaceutical industries.",
  },
  {
    question: "  Why should I stop relying on trade shows and exhibitions?",
    ans: "Traditional methods are costly and time-consuming, with unpredictable outcomes. Our data-backed process guarantees faster, more effective results with less effort.",
  },
];

const OUR_RESULTS = [];

const INDUSTRIES_WE_SERVE = [
  {
    name: "Petrochemical",
    description: (
      <div>
        <div>Specialized equipment for refining and chemical processing</div>
      </div>
    ),
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Petrochemical.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  // {
  //   name: "Construction",
  //   description: (
  //     <div>
  //       <div>Advanced machines for infrastructure and building projects.</div>
  //     </div>
  //   ),
  //   icon: (
  //     <CustomImage
  //       src={"/industries-we-serve-icons/Construction.png"}
  //       wrapperClss="icon_size_png m-auto"
  //     />
  //   ),
  // },
  // {
  //   name: "Pharmaceutical Machinery",
  //   description: (
  //     <div>
  //       <div>Tailored solutions for pharma production needs.</div>
  //     </div>
  //   ),
  //   icon: (
  //     <CustomImage
  //       src={"/industries-we-serve-icons/Packaging-Machinery-white.png"}
  //       wrapperClss="icon_size_png m-auto"
  //     />
  //   ),
  // },
  {
    name: "Pharmaceutical Industry",
    description:
      "Implementing data-driven marketing strategies to enhance brand visibility and drive sales in the competitive pharma market.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Pharma Machinery & Packaging white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Construction Industry",
    description:
      "Developing targeted campaigns to showcase construction services and projects, attracting potential clients and investors.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Construction-Industry.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  // {
  //   name: "Petrochemical Industry",
  //   description:
  //     "Crafting specialized marketing approaches to highlight petrochemical products and innovations, connecting with industry stakeholders.",
  //   icon: (
  //     <CustomImage
  //       src={
  //         "/industries-we-serve-icons/Pharma Machinery & Packaging white.png"
  //       }
  //       wrapperClss="icon_size_png m-auto"
  //     />
  //   ),
  // },
  {
    name: "Heavy Industrial Equipment",
    description:
      "Creating comprehensive marketing plans to promote heavy machinery, reaching key decision-makers in the industry.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Heavy-Industrial-Equipment.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Chemical Industry",
    description:
      "Designing strategic marketing initiatives to position chemical products effectively in the market, ensuring compliance and safety emphasis.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Chemical-Industry.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Heavy Metal Fabrication",
    description:
      "Showcasing fabrication capabilities through targeted marketing efforts, appealing to industries requiring custom metalwork solutions.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Heavy-Metal-Fabrication.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Solar Structuring",
    description:
      "Promoting solar structuring services and products, emphasizing sustainability and innovation to attract eco-conscious clients.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Solar-Structuring.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Tech Companies",
    description:
      "Implementing advanced digital marketing strategies to enhance online presence, user engagement, and lead generation for technology firms.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Tech-Companies.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Digital Agencies",
    description:
      "Providing tailored marketing solutions to help agencies expand their client base and showcase their unique services effectively.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Digital-Agencies.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Consultancies",
    description:
      "Developing personalized marketing strategies to highlight consultancy expertise, attracting clients seeking specialized advisory services.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Consultancies.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Automotive Components",
    description: "Exporting auto parts, batteries, and EV components.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Automotive-Components-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Industrial Machinery",
    description:
      "Heavy machinery, CNC machines, and robotics for manufacturing units.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Industrial-Machinery-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Aerospace & Defense Equipment",
    description:
      "Aircraft components, surveillance systems, and defense technology.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Aerospace-&-Defense-Equipment-white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Packaging Machinery",
    description: "Flexible, rigid, and automated packaging solutions.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Packaging-Machinery-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Mining & Construction Equipment",
    description: "Crushers, excavators, and material handling systems.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Mining-&-Construction-Equipment-white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Renewable Energy Solutions",
    description: "Solar panels, wind turbines, and battery storage solutions.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Renewable-Energy-Solutions-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Oil & Gas Equipment",
    description: "Pipeline systems, refinery machinery, and drilling tools.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Oil-&-Gas-Equipment-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Water Treatment & Filtration",
    description: "Industrial water purification, desalination systems.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Water-Treatment-&-Filtration-white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Smart City Solutions",
    description:
      "IoT-based urban planning, street lighting, and traffic management systems.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Smart-City-Solutions-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Industrial Automation & IoT",
    description: "Smart factory automation, sensors, and AI-driven solutions.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Industrial-Automation-&-IoT-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Electronic Components",
    description: "PCB boards, semiconductors, and power supply units.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Electronic-Components-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Medical Devices & Equipment",
    description: "Diagnostic tools, hospital machinery, and biotech solutions.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Medical-Devices-&-Equipment-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Pharma Machinery & Packaging",
    description:
      "Tablet press machines, capsule fillers, and injectables packaging.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Pharma Machinery & Packaging white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Specialty Chemicals & Coatings",
    description: "Paints, adhesives, and polymer-based chemicals.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Specialty-Chemicals-&-Coatings-white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Laboratory Equipment",
    description:
      "Analytical instruments, biotech research tools, and lab automation.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Laboratory-Equipment-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Agri-Tech & Irrigation Solutions",
    description:
      "Drip irrigation, greenhouse automation, and precision farming.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Agri-Tech-&-Irrigation-Solutions-white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Food Processing Machinery",
    description: "Dairy, bakery, meat processing, and beverage production.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Food-Processing-Machinery-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Cold Chain Logistics & Storage",
    description: "Refrigeration units, temperature-controlled storage.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Cold-Chain-Logistics-&-Storage-white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Technical Textiles",
    description: "Fire-resistant fabrics, industrial filters, and geotextiles.",
    icon: (
      <CustomImage
        src={"/industries-we-serve-icons/Technical-Textiles-white.png"}
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
  {
    name: "Furniture & Interior Solutions",
    description: "Modular office furniture, industrial shelving.",
    icon: (
      <CustomImage
        src={
          "/industries-we-serve-icons/Furniture-&-Interior-Solutions-white.png"
        }
        wrapperClss="icon_size_png m-auto"
      />
    ),
  },
];

const B2BExporterPage = () => {
  return (
    <>
      <TitleBanner
        title={
          "Export Your Custom Machinery to 3 Countries with Just ₹3 Lakhs!"
        }
        fontSize="3rem"
        subTitle="Guaranteed Export Enquiries or We guarantee results in 6 Months"
        introduction={
          "It’s time to leave behind outdated methods and adopt a smarter, data-driven approach to take your export business global."
        }
        bgColor="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
      />

      <B2BExporterVideo />

      <Industries
        howItWorks={HOW_IT_WORKS}
        clienTestimonialData={CLIENT_TESTIMONIAL}
        faqData={FAQ_DATA}
        whyChooseUs={[]}
        OurResults={[]}
        whatWeOffer={[]}
        bookConsultTitle="Take Your Export Business Global Today"
        bookConsultDescription=""
        whyChooseUsSubTitle={`We specialize in helping B2B exporters like you achieve
              international success with cutting-edge strategies tailored to
              modern markets. With our proven process, you’ll`}
        industriesWeServe={INDUSTRIES_WE_SERVE}
        exporterGuarantee={true}
      />
      <OfferPopUp />
    </>
  );
};

export default B2BExporterPage;
