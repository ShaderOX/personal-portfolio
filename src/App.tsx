import CTA from "./components/CTA";
import Hr from "./components/Hr";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="bg-background text-mywhite">
      <Navbar />
      <Hr />
      <CTA />
    </div>
  );
}

export default App;
