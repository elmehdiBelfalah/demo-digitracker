import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Registration from "./components/Registration";

function AuthPage() {
  return (
    
      <Routes>
        <Route path="/auth/Login" element={<Login />} />
        <Route path="/auth/Registration" element={<Registration />} />
        <Route path="/auth/ForgotPassword" element={<ForgotPassword />} />
        <Route index element={<Login />} />
      </Routes>
    
  );
}

export default AuthPage;
