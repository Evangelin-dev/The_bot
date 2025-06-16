import CommonBanner from "@/components/CommonBanner";
import PredectiveAnalysis from "@/components/Services/PredectiveAnalysis";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Predictive Analysis for Businesses & Startups | The Bot Agency",
    description:
      "Predictive Analysis for business: Leverage data-driven predictive analysis to craft fail-proof strategies for your startup or business.",
    keywords: "Predictive analytics for business",
  };
}

const ServicesPage = () => {
  return (
    <>
      <CommonBanner />
      <PredectiveAnalysis />
    </>
  );
};

export default ServicesPage;
