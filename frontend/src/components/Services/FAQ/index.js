const DATA = [
  {
    question: "How does predictive analysis work for marketing and sales?",
    ans: "We use data analytics and industry insights to predict market trends, customer behaviors, and potential outcomes. This allows us to craft strategies that are fail-proof and results-driven.",
  },
  {
    question: "Is this service only for startups?",
    ans: "While it’s ideal for startups, businesses of all sizes can benefit from predictive analysis to refine their strategies and boost performance.",
  },
  {
    question: "Can you help us implement the strategy?",
    ans: "Absolutely! We provide hands-on guidance to execute the strategies we craft, ensuring your team has everything they need to succeed.",
  },
  {
    question: "How soon can we see results?",
    ans: "While results vary depending on the business and industry, our data-driven approach ensures you start seeing measurable outcomes within a few months.",
  },
  {
    question: "What data do you analyze?",
    ans: "We analyze market trends, customer demographics, competitor performance, and industry benchmarks to deliver comprehensive insights.",
  },
];

const FaQ = ({ data = DATA }) => {
  return (
    <div className="row g-0 py-5">
      <div className="col-md-4">
        <h1 className="text-white">FAQ’s</h1>
      </div>
      <div className="col-md-8">
        <div className="accordion accordion-flush" id="faqAccordian">
          {data.map((faq, faqIdx) => {
            return (
              <div className="accordion-item" key={`key-faq-${faqIdx}`}>
                <h2 className="accordion-header" id={`flush-${faqIdx}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${faqIdx}`}
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse-${faqIdx}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-${faqIdx}`}
                  data-bs-parent="#faqAccordian"
                >
                  <div className="accordion-body">{faq.ans}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaQ;
