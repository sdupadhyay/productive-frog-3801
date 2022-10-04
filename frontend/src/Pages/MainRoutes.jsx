import React from "react";
import { Routes, Route } from "react-router-dom";
import Clients from "../Components/Clients";
import Automation from "../Components/Automation";
import Reviews from "./Reviews";
import Settings from "../Components/Settings";
import HomePage from "./HomPage";
import SignUp from "./SignUp";
import Pricing from "./Pricing";
import Projects from "./Projects";
import Dashboard from "../Components/Dashboard";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/sign_up" element={<SignUp />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
