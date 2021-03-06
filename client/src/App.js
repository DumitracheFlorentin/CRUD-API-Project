import { Nav, Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand
            style={{ color: "#646464", fontWeight: "500" }}
            href="#home"
          >
            MERN App
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              style={{ color: "#646464" }}
              className="mr-2"
              href="#home"
            >
              Posts
            </Nav.Link>
            <Nav.Link
              style={{ color: "#646464" }}
              className="mr-2"
              href="#707070tures"
            >
              Submit Post
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
