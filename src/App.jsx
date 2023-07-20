import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Followmytrip from "./pages/PortfolioPages/Followmytrip";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="competences" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="followmytrip" element={<Followmytrip />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
