import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BookPublishing from "./pages/book-publishing-services";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-publishing-services" element={<BookPublishing />} />

        </Routes>
      </Router>


    </>
  );
}

export default App;
