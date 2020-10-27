import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import '../App.css';

export const NavbarComponent = props => {
    return (
        <div>
          <nav className="App-header">
          <Navbar bg="transparent" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {props.jwt ? (
                            <Nav.Link href="/user">User profile</Nav.Link>
                        ) : (
                            null
                )}
                {props.jwt ? (
                            <Nav.Link href="/search">Search stocks</Nav.Link>
                        ) : (
                            null
                )}
                {props.jwt ? (
                            <Nav.Link onClick={props.logout}>Logout</Nav.Link>
                        ) : (
                            <Nav.Link href="/login">Login</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </nav>
        </div>
    );
};

export default NavbarComponent;
