import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hearo/Hero";
import Aboutme from "./Components/About/Aboutme";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Hero/>
    <Aboutme/>
    </>
  );
}

export default App;
