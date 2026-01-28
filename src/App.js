import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    window.location.replace("https://calebharris.vercel.app/")

  },[])
}
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
