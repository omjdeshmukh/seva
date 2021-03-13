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
