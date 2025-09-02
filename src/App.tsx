import RetroPortfolioFooter from "./components/Footer";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/Projects";
import TechSet from "./components/TechSet";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-900 flex-1 pt-4">
      <Hero />
      <TechSet />
      <ProjectShowcase />
      <RetroPortfolioFooter />
    </div>
  );
}

export default App;
