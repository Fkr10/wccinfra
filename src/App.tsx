import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";
import FaqSection from "./sections/faq-section";
import FeaturesSection from "./sections/features-section";
import HeroSection from "./sections/hero-section";
import OurTeamSection from "./sections/our-team";
import StatsSection from "./sections/stats-section";
import StandardsSection from "./sections/standards-section";
import ClientsSection from "./sections/clients-section";
import CareersSection from "./sections/careers-section";
import PipelineSection from "./sections/pipeline-section";


export default function App() {
    return (
        <div>
            <LenisScroll />
            <Navbar />
            <HeroSection />
            <StatsSection />
            <ClientsSection />
            <FeaturesSection />
            <PipelineSection />

            <StandardsSection />
            <OurTeamSection />
            <CareersSection />
            <FaqSection />
            <Footer />
        </div>
    )
}