import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return ( 
    
    <Navbar expand="lg" className="bg-transparent navbar-dark">
      <Container>
        <Navbar.Brand href="#home">NETFILMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <Nav.Link href="TV">TV</Nav.Link>
            
          </Nav> 
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;