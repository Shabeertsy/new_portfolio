import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="dark-bg  font-family">
      <Container>
        <Navbar.Brand className='text-light links' href="#home">PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='bg-light'/>
        <Navbar.Collapse id="responsive-navbar-nav " >
          <Nav className="me-auto">
            <Nav.Link className='text-light links'  as={Link} to='/about'>About Me</Nav.Link>
            <Nav.Link className='text-light links' as={Link}  to="#pricing">Projects</Nav.Link>
            <Nav.Link className='text-light links' as={Link}  to="#pricing">Contact</Nav.Link>
    
          </Nav>
          <Nav>
            <Nav.Link className='text-light links' as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link className='text-light links' eventKey={2} href="#memes">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;