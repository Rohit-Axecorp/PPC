import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BookPublishing from "./pages/book-publishing-services";
import Ourbooks from "./pages/our-books";


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-publishing-services" element={<BookPublishing />} />
          <Route path="/our-books" element={<Ourbooks />} />


        </Routes>
      </Router>


    </>
  );
}

export default App;
