import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";
import Shows from "./components/Shows";
import Vent from "./components/Vent";
import Contact from "./components/Contact";
import About from "./components/About";
import { fetchShows } from "./features/dates/datesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);

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
