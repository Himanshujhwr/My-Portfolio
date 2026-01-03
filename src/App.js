import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // 🔥 GLOBAL SCROLL LOCK (ALL SCREENS)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return <Home isOpen={isOpen} toggle={toggle} />;
}

export default App;
