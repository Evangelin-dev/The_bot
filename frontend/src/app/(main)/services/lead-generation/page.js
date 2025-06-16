import CommonBanner from "@/components/CommonBanner";
import LeadGeneration from "@/components/Services/LeadGeneration";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Lead Generation Services for Businesses | The Bot Agency",
    description:
      "Lead generation campaigns: Using data-driven strategies and customized plans, we help you attract and convert the right customers.",
    keywords: "Lead generation campaigns",
  };
}

const LeadGenerationPage = () => {
  return (
    <>
      <CommonBanner
        title={`Struggling to Generate High-Quality Leads?`}
        subTitle={`You’ve tried every method under the sun – yet the leads aren’t
              flowing in, or worse, they’re just not the right ones.`}
      />
      <LeadGeneration />
    </>
  );
};

export default LeadGenerationPage;
