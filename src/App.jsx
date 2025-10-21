import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./components/Education";

function App() {
  return (
    <div className="dark bg-bgPrimary text-textPrimary min-h-screen">
      <Navbar />
      <Hero />
      <Projects /> 
       <Education />
      <About />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
