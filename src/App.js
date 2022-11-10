import { Routes, Route } from "react-router-dom";
//component imports
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="mau-portfolio/" element={<Home />}></Route>
        <Route path="mau-portfolio/about" element={<About />}></Route>
        <Route path="mau-portfolio/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
