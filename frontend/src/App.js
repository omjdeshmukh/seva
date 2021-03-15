import React, { useState, useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AfterLogin from "./Components/UsersPage/AfterLogin";
import Footer from "./Components/Footer/footer";

import Dashboard from './Components/Dashboard/Dashboard';

import AdminDashboard from "./Components/admin/AdminDashboard";


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
         

          <Route
            path="/"
            exact
            component={getToken() ? AfterLogin : Homepage}
          />
          <Route path="/admin" exact component={AdminDashboard} />

        </Switch>
      </div>
      <Footer />
      {/* <Dashboard/>  */}
    </Router>
  );
}

export default App;
