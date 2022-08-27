import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Hr from "./components/Hr";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoadingPage(false), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isLoadingPage ? (
    <div className="w-screen h-screen bg-background">
      <div className="flex items-center justify-center h-full">
        <img src="/loading.gif" />
      </div>
    </div>
  ) : (
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
