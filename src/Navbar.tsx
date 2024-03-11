import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast, ToastContainer } from 'react-toastify';
import { useCookies } from 'react-cookie';

function NavbarCreate() {

  const [cookies, setCookie, removeCookie] = useCookies(['jwt']); 

  const handleLogout = () => {
    const jwtCookie = cookies.jwt; 

    if (jwtCookie) {
      
      removeCookie('jwt', { path: '/' });
      toast.success('Logout successful!')

    } else {
      toast.error('Logout failed. User not logged in.')
    }
  };

 

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      
      <Container>
      <ToastContainer
      position="bottom-center"
    />
        <Navbar.Brand href="#home" className="h1">System biblioteki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogout}>Loguout</NavDropdown.Item>
              <NavDropdown.Item href="/registration">
                Register
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCreate;