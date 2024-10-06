import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection style={{ margin: "20px;" }} />
    </>
  );
}

export default App;
