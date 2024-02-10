import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Company from "./Pages/Company";
import About from "./Pages/About";
import UploadJob from "./Pages/UploadJob";
import AuthModal from "./Components/AuthModal";

function App() {
  const mode = useSelector((state) => state.mode);
  const authModal = useSelector((state) => state.authModal);
  console.log(import.meta.env.VITE_REACT_APP_APPWRITE_PROJECT_ID);
  return (
    <div className={mode}>
      {/* Auth modal starts */}
        {authModal && <AuthModal />}
      {/* Auth modal ends */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Company />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/upload-job" element={<UploadJob />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
