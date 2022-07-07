import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Hr from "./components/Hr";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-background text-mywhite">
        <Navbar className="md:mx-10 mx-2 py-6" />
        <Hr />

        <Routes>
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Hr />
        <Footer className="md:mx-10 mx-2 py-6" />
      </div>
    </Router>
  );
}

export default App;
