import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-5 md:px-[15%]">
        
        <Home/>
      </div>
      <About/>
      <div className="p-5 md:px-[15%]">
        <Experiences/>
        <Projets/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
