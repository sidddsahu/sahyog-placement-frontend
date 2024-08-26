import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import { isLoggedIn } from '../../utils/config';


function Headers() {
  const LoggedOut = () => {
    localStorage.clear();
  }
  return (
    <Navbar expand="lg" className=" nav pt-3 pb-3 position-sticky sticky-top bg-white">
      <Container>

        <Col xs={6} md={3}>
        <Navbar.Brand href="/" id='logo'><img  src="https://www.sahyogplacement.com/assets/img/logo.png" alt="" /></Navbar.Brand>
        </Col>
        <Col id='content' xs={6} md={9}>
        <Navbar.Toggle className='me-2' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">


          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Employer" id="basic-nav-dropdown">
              <NavDropdown.Item href="/placejob">Place job</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Candidate" id="basic-nav-dropdown">
              <NavDropdown.Item href="/edit">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/apply">My Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/job-openings">Job Opening</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>

            {/* <Form id="search" className="d-flex ms-5">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <div className='Register_btn'>
                {isLoggedIn() ? <button onClick={()=> LoggedOut()} id="radio" className='btn btn-primary text-center '  style={{ border: 'none' }}  href="/register">Logout</button> : <Nav.Link id="radio" className='btn btn-primary text-center' href="/register">Register</Nav.Link>}

                </div>
                {/* <Nav.Link id="radio" className='btn btn-primary' href="#home">Login</Nav.Link> */}

          </Nav>

        </Navbar.Collapse>
        </Col>



      </Container>
    </Navbar>
  );
}

export default Headers;