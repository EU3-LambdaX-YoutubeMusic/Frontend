import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation(props) {

  const logout = () => {
    window.localStorage.clear();
    }

  if(!props.loggedIn) {
  return (
    <div>
      <Navbar bg="#6A1362" variant="#6A1362">
      <Navbar.Brand href="/">YouTube Music</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
  } else {
    return (
      <div>
        <Navbar bg="background" variant="dark">
          <Navbar.Brand href="#home">YouTube Music</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={logout} href="/">Sign Out</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )

  }
}