import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast, ToastContainer } from 'react-toastify';
import { useCookies } from 'react-cookie';

function NavbarCreate() {

  const [cookies1, setCookie1, removeCookie1] = useCookies(['jwt']); 
  const [cookies2, setCookie2, removeCookie2] = useCookies(['email']); 
  const handleLogout = () => {
    const jwtCookie = cookies1.jwt; 
    
    if (jwtCookie) {
      
      removeCookie1('jwt', { path: '/' });
      removeCookie2('email', { path: '/' });
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
        <Navbar.Brand href="/" className="h1">System biblioteki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            

             {cookies2.email ? (
              <NavDropdown title={cookies2.email} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCreate;