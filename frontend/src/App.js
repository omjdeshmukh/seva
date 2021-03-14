<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Tagline/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AfterLogin from "./Components/UsersPage/AfterLogin";
import Footer from "./Components/Footer/footer";

//Set the Token from backend to sessionStorage of a browser
function setUserToken(userToken) {
  if (userToken === "") {
    return;
  }
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

//Check is there is any session token available in sessionStorage
function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken ? true : false;
}

//Main App
function App() {
  const [token, setToken] = useState();

  // Rerender based on session Token
  useEffect(() => {
    setUserToken(token ? token.data.token : "");
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Navbar setToken={setToken} />
        <Switch>
          <Route path="/" exact component={getToken() ? AfterLogin : Main} />
        </Switch>
      </div>
      <Footer />
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
import Services from './Components/Services/Services';
import CarouselBar from './Components/OwlCarousel/CarouselBar'
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
        <CarouselBar/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
>>>>>>> c660e695547959fe505f2b7ba581d2dd8fe10819
