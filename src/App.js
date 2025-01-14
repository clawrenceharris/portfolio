import logo from "./logo.svg";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./globals.css";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
