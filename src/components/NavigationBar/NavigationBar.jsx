import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css'

export default function NavigationBar(props) {
  
  const navigate = useNavigate();

  function userLogout(){
    console.log('Removing Token')
    localStorage.removeItem('token')
    props.setUserInState(null)
    navigate('/')
  }
  
  return (
    <Navbar bg="primary" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          ΛQЦΛPΣDIΛ
          {/* <img src='./AquaIcon.png'/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="">Home</Nav.Link>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/coursemenu">Show All Courses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/addpost">Add Course</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} disabled>Coming Soon!</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>Checkout</Nav.Link>
          </Nav>
            {props.user ?
              <Button variant="outline-light" onClick={userLogout}>Logout</Button>
              :
              <Navbar.Brand as={Link}>ΛQЦΛPΣDIΛ</Navbar.Brand>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}