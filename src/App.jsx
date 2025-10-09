import Footer from "./components/Footer";
import Header from "./components/header";
import HomePage from "./components/pages/HomePage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useTemplateInit from "./hooks/useTemplateInit";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    if (typeof window !== "undefined") window.AOS = AOS;
  }, []);
  // run template vendor initializers after mount (isotope, glightbox, imagesLoaded)
  useTemplateInit();
  return (
    <div className="index-page">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
