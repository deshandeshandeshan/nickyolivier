import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
