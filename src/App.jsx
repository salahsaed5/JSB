import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import TestimonialCard from "./Components/TestimonialCard/TestimonialCard";

function App() {
  return (
    <div className="bg-[#ffffff] h-auto w-full overflow-hidden">
      <Home />
      <About />
      <Services />
      <TestimonialCard/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
