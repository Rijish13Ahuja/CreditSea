import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails"; // ✅ Import UserDetails

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetails />} /> {/* ✅ User Details Route */}
      </Routes>
    </>
  );
}

export default App;
