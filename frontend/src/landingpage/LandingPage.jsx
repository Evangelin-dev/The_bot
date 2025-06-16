import Navbar from "../landingpage/components/hero";
import TestimonialSection from '../landingpage/components/test'
import { FeaturesSectionDemo } from "../landingpage/components/you";
import IsThisYou from "../landingpage/components/isit";
import PromoSection from "../landingpage/components/aork";
import InvestmentOutcome from "../landingpage/components/InvestmentOutcome";
import Footer from '../landingpage/components/Footer';
import LogoCloudSection from "../landingpage/components/logo";
import WhatAppTest from "../landingpage/components/whatAppTest";
import PopupApplicationForm from "../landingpage/components/ApplicationForm";
import LiveNotifications from "../landingpage/components/NotificationPopup";
import IndustriesWeServe from "../landingpage/components/Indrustries";
import AnimatedClientsShowcase from "../landingpage/components/OurClients";
import { BackgroundBeams } from "../landingpage/components/ui/background-beams";

function BotLandingPage() {
    return (
        <>
            <div className="bot-wrapper">
                <div className="fixed inset-0 -z-10 pointer-events-none">
                    <BackgroundBeams />
                </div>
                <Navbar />
                <LogoCloudSection />
                <IsThisYou />
                <FeaturesSectionDemo />
                <InvestmentOutcome />
                <PromoSection />
                <TestimonialSection />
                <PopupApplicationForm />
                <LiveNotifications />
                <WhatAppTest />
                <AnimatedClientsShowcase />
                <IndustriesWeServe />
                <Footer />
            </div>
        </>
    )
}

export default BotLandingPage