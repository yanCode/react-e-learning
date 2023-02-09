import { About, Contact, Courses, Footer, Home, Teacher } from "./components";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
