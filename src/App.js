import { Route, Routes } from "react-router-dom";
import {Main,Project,Resume} from "./pages";
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project/:index" element={<Project />} />
    </Routes>
  );
}

export default App;
