import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Aboutme from "./Components/About/Aboutme";
import Services from "./Components/Services/Services";
import Contact1 from "./Components/Contact/Contact1";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Services />
      <Contact1 />
      <Footer />
    </>
  );
}

export default App;
