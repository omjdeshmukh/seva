import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Tagline/Main";
import Services from './Components/Services/Services';
import CarouselBar from './Components/OwlCarousel/CarouselBar'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Main />
        </Switch>
        <Services />
        <CarouselBar/>
      </div>
    </Router>
  );
}

export default App;
