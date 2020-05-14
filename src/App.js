import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import Login from './Components/SignIn';
import Playlist from './Components/Playlist';
import Navigation from './Components/Navigation';

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
    <div>
      <Navigation loggedIn={loggedIn} />
      <div>
    <Route path="/login" render={(props) => <Login {...props} setLoggedIn={setLoggedIn} />} />
    <Route path="/signup" render={(props) => <Signup {...props} setLoggedIn={setLoggedIn} />} />
    <Route path="/playlist" component={Playlist} />
    </div>
    </div>
  );
}

export default App;
