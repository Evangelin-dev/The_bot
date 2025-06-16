import Footer from "@/components/Footer";

const { default: ContactUs } = require("@/components/ContactUs");

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Contact Us | The Bot Agency",
    description:
      "Have questions or need help? Get in touch with The Bot Agency’s team for inquiries, consultations, or support. We're here to help you grow your business.",
    keywords: "Contact The Bot Agency",
  };
}

const ContactUsPage = () => {
  return <div></div>;
};

export default ContactUsPage;
