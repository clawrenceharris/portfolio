import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./globals.css";
import { Resume } from "./pages/Resume";
import Project from "./pages/Project";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project/:id" element={<Project />} />
    </Routes>
  );
}

export default App;
