import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from '@inertiajs/react';

export default function Navbarcomponents(props) {
  return (
    <>
      <Navbar className='mb-5' style={{ backgroundColor: 'white' }}>
        <Container>
          <Navbar.Brand href="#home"><img className="top-logo" src="/logo3.png" alt="bye" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link href="/homepage" className="nav-link">Home</Link>
              <Link className="nav-link" href={`/alluser/${props.auth.user.id}`}>Il mio Profilo</Link>
            </Nav>
            <NavDropdown title={props.auth.user.name} id="navbarScrollingDropdown">
              <Link className="nav-link" href={`/profile/`}>Il mio Profilo</Link>
              <Link className="nav-link" href={route('logout')} method="post">Logout</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
