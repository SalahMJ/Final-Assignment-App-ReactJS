import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function MainNavigationBar () {
  const navigate = useNavigate();
  const handleLogout = () => {
    
    localStorage.removeItem('auth')
    navigate('/logout');
  };

  return (
    <Navbar bg="secondary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Final Assignment App</Navbar.Brand>
        <Nav className="ms-auto">
        <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavigationBar;
