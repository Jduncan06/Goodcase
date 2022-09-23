import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";
import Shows from "./components/Shows";
import Vent from "./components/Vent";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Tagline />
      <Shows />
      <About />
      <Vent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
