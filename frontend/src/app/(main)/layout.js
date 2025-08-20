import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import LaunchingModal from "@/components/LaunchingModal";
import PhonePopUp from "@/components/PhonePopup";
import OfferPopUp from "@/components/OfferPopup";
import ChatbotEmbed from "../../components/ChatBotEmb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Bot",
  description: "The Bot is social marketing agency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        ></link>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TCECG1HYD7"
        ></Script>

        <Script
          id="gtm-script-1"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\'js\', new Date());

  gtag(\'config\', \'G-TCECG1HYD7\');`,
          }}
        ></Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CYJCJRVZJ3"
        ></Script>
        <Script
          id="gtm-script-2"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\'js\', new Date());

  gtag(\'config\', \'G-CYJCJRVZJ3\');`,
          }}
        ></Script>
        <Script
          id="gtm-script-3"
          async
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MPLKW36T');`,
          }}
        ></Script>
      </head>

      <Script id="fb-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1800817707148799');
fbq('track', 'PageView');
            `}
      </Script>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPLKW36T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none", visibility: "hidden" }}
            src="https://www.facebook.com/tr?id=1800817707148799&ev=PageView&noscript=1"
          />
        </noscript>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11348318254"
        ></Script>

        <Script
          id="google-tag-manager-aw"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(\'js\', new Date());

  gtag(\'config\', \'AW-11348318254\');`,
          }}
        ></Script>
        <NavBar />
        <div className="body-black-bg">
          {children}
          <ContactUs />
          <PhonePopUp />
          <Footer />
          <ChatbotEmbed/>
        </div>
        <LaunchingModal />
        <Script src="https://code.jquery.com/jquery-2.1.3.min.js"></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
