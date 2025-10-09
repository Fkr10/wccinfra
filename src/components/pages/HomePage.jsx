import About from "../sections/About";
import AboutWithVideo from "../sections/AboutWithVideo";
import CallToAction from "../sections/CallToAction";
import Clients from "../sections/Clients";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import Teams from "../sections/Teams";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import Faq from "../sections/Faq";
import Contact from "../sections/Contact";

function HomePage() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Stats />
      <AboutWithVideo />
      <Clients />
      <Testimonials />
      <Services />
      <CallToAction />
      <Portfolio />
      <Teams />
      <Pricing />
      <Faq />
      <Contact />
    </main>
  );
}

export default HomePage;
