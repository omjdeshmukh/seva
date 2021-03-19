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
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
import Services from "./Components/Services/Services";
import ServicesPerPincode from "./Components/Services/ServicesPerPincode/ServicesPerPincode";
import Protected from "./Components/ProtectedRoute/Protected";

//Main App
function App() {
  const [token, setToken] = useState();
  const [logStatus, setLogStatus] = useState(false);

  // Rerender based on session Token
  useEffect(() => {
    if (token) {
      setLogStatus(true);
    }
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact render={(props) => <Homepage {...props} />} />
          <Protected path="/provider/:id" exact component={ProviderDashboard} />
          <Protected path="/user/:id" exact component={UserDashboard} />
          <Route
            path="/login"
            exact
            render={(props) => <Login {...props} setToken={setToken} />}
          />
          <Route path="/signup" exact component={Signup} />
          <Route path="/admin" exact component={AdminDashboard} />
          <Route path="/services" exact component={Services} />
          <Route
            path="/services/:_id/:pincode"
            exact
            render={(props) => <ServicesPerPincode {...props} />}
          />
        </Switch>
      </div>
      <Footer />
      {/* <Dashboard/>  */}
    </Router>
  );
}

export default App;
