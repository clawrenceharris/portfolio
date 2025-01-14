import logo from "./logo.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./globals.css";
import { Resume } from "./pages/Resume";
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
