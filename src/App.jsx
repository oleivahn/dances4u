import "./App.css";
import AboutUs from "./Components/AboutUs";
// import Card from "./Components/Cards";
import ContactForm from "./Components/Form2";
import Hero from "./Components/Hero2";
import Navbar from "./Components/Navbar";
// import Slider from "./Components/Slider";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Navbar />
      <Hero />
      {/* <Slider /> */}
      <AboutUs />
      <ContactForm />
    </>
  );
}

export default App;
