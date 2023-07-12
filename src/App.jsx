import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

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
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
