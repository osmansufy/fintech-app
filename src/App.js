import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/index.scss";

import Header from "./components/Header/Header";
import Activities from "./components/Activities/Activities";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
