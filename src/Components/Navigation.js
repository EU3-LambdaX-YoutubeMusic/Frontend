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
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
  } else {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">YouTube Music</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={logout} href="/">Sign Out</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )

  }
}