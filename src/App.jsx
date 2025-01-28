import Footer from "./components/Footer";
import "./App.css"; // For custom CSS
import HeroSection from "./components/Herosection";
import ThreeColumnSection from "./components/AfterHe";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ThreeColumnSection />
      <Footer />
    </div>
  );
};

export default App;
