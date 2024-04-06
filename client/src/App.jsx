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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const mode = useSelector((state) => state.mode);
  const authModal = useSelector((state) => state.authModal);
  return (
    <div className={mode}>
      {/* Auth modal starts */}
      {authModal && <AuthModal />}
      {/* Auth modal ends */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode}
        transition:Bounce
      />
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