import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Tagline/Main";
import Services from './Components/Services/Services';
import CarouselBar from './Components/Carousel/CarouselBar'
import Footer from './Components/Footer/footer'

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
        <br />
        <CarouselBar />
        <hr />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
