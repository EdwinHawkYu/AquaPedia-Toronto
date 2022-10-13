import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

export default function NavigationBar(props) {
  
  const navigate = useNavigate();

  function userLogout(){
    console.log('Removing Token')
    localStorage.removeItem('token')
    navigate('/')
  }
  
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Icon</Navbar.Brand>
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
            {props.user ?
              <Nav.Link href=''>Logout</Nav.Link>
              :
              <Nav.Link href="">Login</Nav.Link>
            }
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <button className='btn-sm' onClick={userLogout}>LogOut</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}