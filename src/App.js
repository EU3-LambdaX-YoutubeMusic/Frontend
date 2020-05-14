import React from 'react';
import { Route } from 'react-router-dom';
import RegisterForm from './Components/SignUp';
import LoginForm from './Components/SignIn';
import Playlist from './Components/Playlist';

function App() {
  return (
    <>
    <Route path="/signup" component={RegisterForm} />
    <Route path="/login" component={LoginForm} />
    <Route path="/playlist" component={Playlist} />
    </>
  );
}

export default App;
