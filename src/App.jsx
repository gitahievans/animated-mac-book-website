import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import "./index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Features from "./components/Features";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main className="bg-black text-white ">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
