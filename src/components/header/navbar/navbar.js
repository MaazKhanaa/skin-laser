import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../images/logo.png';
import './navbar.css';
import { Fragment } from 'react';
import TopNavbar from './topnavbar';
function MainNavbar() {
  return (
    <Fragment>
      <TopNavbar />
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container className='justify-content-between'>
          <Navbar.Brand href='#home'>
            <img src={logo} width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='px-3 py-2' href='#home'>
                Home
              </Nav.Link>
              <Nav.Link className='px-3 py-2' href='#services'>
                Services
              </Nav.Link>
              <Nav.Link className='px-3 py-2' href='#gallery'>
                Gallery
              </Nav.Link>
              <Nav.Link className='px-3 py-2' href='#about'>
                About
              </Nav.Link>
              <Nav.Link className='px-3 py-2' href='#contact'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default MainNavbar;
