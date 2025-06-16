import TitleBanner from "@/components/TitleBanner";
import styles from "./styles.module.css";

const content = `<p><span style="font-weight: 400;">Welcome to https://thebot.agency! These terms of use outline the terms and conditions governing your use of our website and the purchase of online courses and webinars offered on the platform. By accessing or using our website and making a purchase, you agree to comply with these terms. Please read them carefully.</span></p>
<ol>
<li><strong> Intellectual Property:</strong></li>
</ol>
<p><span style="font-weight: 400;">All content, materials, and resources available on https://thebot.agency , including but not limited to text, graphics, logos, images, videos, audio, and downloadable files, are the intellectual property of The Bot Agency or its content providers. You agree not to reproduce, distribute, modify, or create derivative works from any of the website's content without prior written consent from the respective owners.</span></p>
<p>&nbsp;</p>
<ol start="2">
<li><strong> User Account:</strong></li>
</ol>
<p><span style="font-weight: 400;">In order to access certain features of our website, you may need to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information during the registration process and to promptly update any changes to your account information.</span></p>
<p>&nbsp;</p>
<ol start="3">
<li><strong> Purchases and Payments:</strong></li>
</ol>
<p>Online Courses and Webinars: By purchasing an online course or webinar on our website, you gain access to the specified digital content for your personal, non-commercial use. All purchases are subject to the specified fees, which you agree to pay in full. b. Refund Policy: Please refer to our Refund Policy for information regarding refunds for digital materials and physical goods. (Refund policy hyerlink)</p>
<p>&nbsp;</p>
<ol start="4">
<li><strong> Prohibited Conduct:</strong></li>
</ol>
<p><span style="font-weight: 400;">While using our website, you agree not to: a. Violate any applicable laws, regulations, or third-party rights. b. Engage in any fraudulent, deceptive, or misleading activities. c. Interfere with the proper functioning of the website or its services. d. Upload, transmit, or distribute any malicious software, viruses, or harmful content. e. Attempt to gain unauthorized access to any part of the website or other users' accounts.</span></p>
<p>&nbsp;</p>
<ol start="5">
<li><strong> Limitation of Liability:</strong></li>
</ol>
<p><span style="font-weight: 400;">To the extent permitted by law, The Bot Agency and its affiliates, directors, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the website or the purchase of products and services through the website.</span></p>
<p>&nbsp;</p>
<ol start="6">
<li><strong> Modification of Terms:</strong></li>
</ol>
<p><span style="font-weight: 400;">Threadality.com reserves the right to modify or update these Terms of Use at any time without prior notice. Any changes made will be effective immediately upon posting the revised terms on our website. It is your responsibility to review these terms periodically for any updates.</span></p>
<p>&nbsp;</p>
<ol start="7">
<li><strong> Governing Law and Jurisdiction:</strong></li>
</ol>
<p><span style="font-weight: 400;">These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in India. If you have any questions or concerns regarding these Terms of Use, please contact us using the provided contact information on our website. </span></p>
<p><strong>Last Updated: 4-09-2023</strong></p>`;

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Terms & Conditions | The Bot Agency",
    description:
      "Review the terms and conditions of using The Bot Agency’s services. Understand your rights, responsibilities, and our policies to ensure a clear and smooth experience.",
    keywords: "Terms & Conditions",
  };
}

const PrivacyPlicyPage = () => {
  return (
    <div className={styles.terms_condition_bg}>
      <TitleBanner
        title={"The Bot`s Terms And Condition"}
        fontSize="4rem"
        bgColor="linear-gradient(to top, #09203f 0%, #537895 100%)"
        height="30vh"
        showContactUs={false}
      />
      <div className={`container py-2 text-white`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default PrivacyPlicyPage;
