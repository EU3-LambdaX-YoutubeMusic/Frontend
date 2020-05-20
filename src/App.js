import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Signup from "./Components/SignUp";
import Login from "./Components/SignIn";
import Playlist from "./Components/Playlist";
import Navigation from "./Components/Navigation";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <div>
      <Navigation loggedIn={loggedIn} />
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/login"
          render={props => <Login {...props} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/signup"
          render={props => <Signup {...props} setLoggedIn={setLoggedIn} />}
        />
        <GlobalProvider>
          <Route path="/playlist" component={Playlist} />
        </GlobalProvider>

        <Route path="/dashboard" component={Dashboard} />
      </div>
    </div>
  );
}

export default App;
