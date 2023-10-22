import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./App.css";

import Home from "./components/Home";
import About from "./components/other/About";
import Services from "./components/Services";
import Porfolio  from "./components/Portfolio";
import ContactUS from "./components/ContactUs";
import Careers  from "./components/Careers";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";


function App() {
  return (
   <>
      <BrowserRouter>
<Navbar/>
       
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/portfolio" element={<Porfolio />}></Route>
            <Route exact path="/careers" element={<Careers />}></Route>
            <Route exact path="/contactus" element={<ContactUS />}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
