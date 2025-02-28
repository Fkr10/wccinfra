import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import MapSection from "./components/MapSection";
import OtherSections from "./components/OtherSections";
import Service from "./components/Service";
function App() {
  return (
    <div className="App">
      <div data-spy="scroll" data-target=".navbar" data-offset="200">
        <Header />
        <HomeSection />
        <Service />
        <Features />
        <OtherSections />
        <MapSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
