import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BookPublishing from "./pages/book-publishing-services";
import Ourbooks from "./pages/our-books";
import Ourpublishers from "./pages/our-publishers";
import Contactus from "./pages/contact-us";
import Whoweare from "./pages/who-we-are";
import LiveChat from "./components/livechat/Livechat";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Sidebar from "./components/sidebar/Sidebar";
import Popup from "./components/popup/Popup";
import Privacypolicy from "./pages/privacy-policy";
import Termsandconditions from "./pages/terms-and-conditions";
import Thankyou from "./pages/thank-you";
import Amazonbookpublishing from "./pages/amazon-book-publishing-services";
import Childrensbook from "./pages/childrens-book-services";
import Bookmarketing from "./pages/book-marketing-services";
import Ghostwriting from "./pages/ghostwriting-services";
import Bookillustration from "./pages/book-illustration-services";
import GoogleTagManager from "./components/googletagmanager/GoogleTagManager";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-publishing-services" element={<BookPublishing />} />
          <Route path="/our-books" element={<Ourbooks />} />
          <Route path="/our-publishers" element={<Ourpublishers />} />
          <Route path="/amazon-book-publishing-services" element={<Amazonbookpublishing />} />
          <Route path="/childrens-book-services" element={<Childrensbook />} />
          <Route path="/book-marketing-services" element={<Bookmarketing />} />
          <Route path="/ghostwriting-services" element={<Ghostwriting />} />
          <Route path="/book-illustration-services" element={<Bookillustration />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/who-we-are" element={<Whoweare />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/terms-and-conditions" element={<Termsandconditions />} />
          <Route path="/thank-you" element={<Thankyou />} />
        </Routes>
      </Router>






      <GoogleTagManager />
      <LiveChat />
      <ScrollToTop />
      <Sidebar />
      <Popup />
    </>
  );
}

export default App;
