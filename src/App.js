import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BookPublishing from "./pages/book-publishing-services";
import Ourbooks from "./pages/our-books";
import Ourpublishers from "./pages/our-publishers";
import Contactus from "./pages/contact-us";


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-publishing-services" element={<BookPublishing />} />
          <Route path="/our-books" element={<Ourbooks />} />
          <Route path="/our-publishers" element={<Ourpublishers />} />
          <Route path="/contact-us" element={<Contactus />} />

        

        </Routes>
      </Router>


    </>
  );
}

export default App;
