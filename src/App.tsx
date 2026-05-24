import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";
// import { BeamsBackground } from "./components/ui/beams-background";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-grid md:px-[15%] md:h-screen flex items-center justify-center">
      <Home />
      </div>
      {/* <BeamsBackground className="relative z-0" intensity="medium">
        </BeamsBackground> */}

      <About />
      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projets />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
