import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";
import Shows from "./components/Shows";
import Contact from "./components/Contact";
import About from "./components/About";
import YoutubeEmbed from "./components/Video";



function App() {
    
  return (
    <div className="App">
      <Header />
      <Tagline />
      <Shows />
      <About />
      <Contact />
      <YoutubeEmbed embedId="_3KJhf5RaUY" />
      <Footer />
    </div>
  );
}


export default App;
