import AppDevelopmentPageContent from '@/components/Services/AppDevelopment';

export async function generateMetadata() {
  return {
    title: "15-Day MVP Delivery | The Bot Agency",
    description: "Build, test, and launch a production-ready MVP in 15 days. We deliver apps, automations, and migrations—fast, business-focused, and ready for customers.",
  };
}

const AppDevelopmentPage = () => {
  return <AppDevelopmentPageContent />;
};

export default AppDevelopmentPage;