import React from "react";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer/footer'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
