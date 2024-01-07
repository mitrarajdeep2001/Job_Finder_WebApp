import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Auth from "./Pages/Auth";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/user-auth" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
