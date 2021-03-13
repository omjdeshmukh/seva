<<<<<<< HEAD
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
=======
import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Tagline/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Main />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> 9c69f03164ac2f5710cec63851394c10416ca4bd
