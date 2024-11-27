import React from "react";
import Header from "./pages/Header";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
