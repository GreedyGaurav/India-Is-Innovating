import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import Home from "./pages/Home";
import Events from "./pages/Events";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* Wrapping content for proper layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar at the top */}
        <main className="flex-grow">
          {" "}
          {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
};

export default App;
