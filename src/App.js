import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./globals.css";
import Project from "./pages/Project";
import Resume from "./pages/Resume";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project/:index" element={<Project />} />
    </Routes>
  );
}

export default App;
