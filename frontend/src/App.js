<<<<<<< HEAD
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
=======
import React from "react";
import Navbar from "./Components/Header/Navbar";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Tagline/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer/footer'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
        <Switch>
          <Main />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 2d173959dd58819b087d43198a4cb53431015f92
