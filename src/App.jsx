import "./App.css";
import AboutUs from "./Components/AboutUs";
// import Card from "./Components/Cards";
import ContactForm from "./Components/ContactForm";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <AboutUs />
      <ContactForm />
    </>
  );
}

export default App;
