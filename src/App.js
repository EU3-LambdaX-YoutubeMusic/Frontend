<<<<<<< HEAD
import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
=======
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import Login from './Components/SignIn';
import Playlist from './Components/Playlist';
import Navigation from './Components/Navigation';
import LandingPage from './Components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> dbcbc34753fd33f6cb1c49f8ceb7b0a0647fdfea

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('user')) {
      setLoggedIn(true);
    }
    else {
      setLoggedIn(false);
    }
  }, []);
  return (
<<<<<<< HEAD
    <div className="App">
      <Dashboard />
=======
    <div>
      <Navigation loggedIn={loggedIn} />
      <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />} />
      <Route path="/signup" render={(props) => <Signup {...props} setLoggedIn={setLoggedIn} />} />
      <Route path="/playlist" component={Playlist} />
    </div>
>>>>>>> dbcbc34753fd33f6cb1c49f8ceb7b0a0647fdfea
    </div>
  );
}

export default App;
