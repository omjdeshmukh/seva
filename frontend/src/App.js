import React, { useState, useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Homepage from "./Components/HomePage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AfterLogin from "./Components/UsersPage/AfterLogin";
import Footer from "./Components/Footer/footer";
import ProviderDashboard from "./Components/ProviderDashboard/Dashboard";
import AdminDashboard from "./Components/admin/AdminDashboard";
<<<<<<< HEAD
import UserDashboard from "./Components/UserDashboard/UserDashboard"

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
=======
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
>>>>>>> main

//Main App
function App() {
  const [token, setToken] = useState();

  // Rerender based on session Token
  useEffect(() => {
    // setUserToken(token ? token.data.token : "");
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setToken={setToken} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/admin" exact component={AdminDashboard} />
<<<<<<< HEAD
          
=======
          <Route path="/provider" exact component={ProviderDashboard} />
>>>>>>> main
        </Switch>
      </div>
      <Footer />
      {/* <Dashboard/>  */}
    </Router>
  );
}

export default App;
