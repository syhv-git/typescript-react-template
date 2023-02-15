import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Landing from "./Pages/Landing/Landing";
import Products from "./Pages/Products/Products";
import FAQ from "./Pages/FAQ/FAQ";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/FAQs" element={<FAQ />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
