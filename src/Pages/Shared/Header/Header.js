import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../../Customlink/Customlink';
import logo from '../../../images/logo-black.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='menu_area'>
<Navbar fixed="top" expand="lg">
  <Container>
    <Navbar.Brand>
    <Link to='/'>
    <img
        src={logo}
        width="auto"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
      <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink as={Link} to='home#services'>Services</CustomLink>
        <CustomLink to='/register'>Register</CustomLink>
        <CustomLink to='/login'>Login</CustomLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;