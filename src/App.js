import React from 'react';
import { Route } from 'react-router-dom';
import RegisterForm from './Components/SignUp';
import LoginForm from './Components/SignIn';

function App() {
  return (
    <>
    <Route path="/signup" component={RegisterForm} />
    <Route path="/login" component={LoginForm} />
    </>
  );
}

export default App;
