import React from 'react';
import { Route } from 'react-router-dom';
import RegisterForm from './Components/SignUp';

function App() {
  return (
    <>
    <Route path="/signup" component={RegisterForm} />
    </>
  );
}

export default App;
