import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MostVisited from './Components/MostVisited/MostVisited';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MostVisited/>
      </div>
    </Router>
  );
}

export default App;
