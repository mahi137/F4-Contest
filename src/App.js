import React from "react";
import Header from "./Components/Header";
import TypingBox from "./Components/TypingBox";
import Footer from "./Components/Footer";
import "./index.css";


const App = () => {
  return (
    <div className="app">
      <Header />
      <TypingBox />
      <Footer />
    </div>
  );
};

export default App;
