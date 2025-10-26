import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#333D29]">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
