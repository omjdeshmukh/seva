import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
