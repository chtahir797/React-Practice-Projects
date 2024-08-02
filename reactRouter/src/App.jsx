import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Routes ,Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
