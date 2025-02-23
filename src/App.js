import "./App.css";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import OtherSections from "./components/OtherSections";
import Service from "./components/Service";
import VideoSection from "./components/VideoSection";
function App() {
  return (
    <div className="App">
      <div data-spy="scroll" data-target=".navbar" data-offset="200">
        <div class="preloader">
          <div class="loaded">&nbsp;</div>
        </div>
        <div class="culmn">
          <Header />
          <HomeSection />
          <Service />
          <Features />
          <VideoSection />
          <AboutUs />
          <OtherSections />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
