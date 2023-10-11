import "./App.css";
import AboutUs from "./Components/AboutUs";
// import Card from "./Components/Cards";
// import ContactForm from "./Components/ContactForm";
import ContactForm from "./Components/ContactForm2";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
// import Slider from "./Components/Slider";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* <HomePage /> */}
        <Navbar />
        <Hero className="flex-1" />
      </div>
      <AboutUs />
      <ContactForm />
      {/* <Slider /> */}
    </>
  );
}

export default App;
