import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main className="bg-black text-white ">
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
}

export default App;
