import CTASection from "./components/CTASection";
import Hr from "./components/Hr";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="bg-background text-mywhite h-100%">
      <Navbar className="md:mx-10 mx-2 py-6" />
      <Hr />

      <CTASection />

      <ProjectsSection />

      <Hr />
      <Footer className="md:mx-10 mx-2 py-6" />
    </div>
  );
}

export default App;
