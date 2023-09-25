import "./App.css";
import AboutUs from "./Components/AboutUs";
// import Card from "./Components/Cards";
import ContactForm from "./Components/ContactForm";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
// import Slider from "./Components/Slider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <Navbar />
      <Hero />
      {/* <Slider /> */}
      <AboutUs />
      <ContactForm />
    </>
  );
}

export default App;
