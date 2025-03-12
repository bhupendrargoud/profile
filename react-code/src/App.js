import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <ScrollToTop />
    </div>
  );
}

export default App;
