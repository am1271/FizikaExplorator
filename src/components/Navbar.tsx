import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <NavbarBs.Toggle aria-controls="navbar-nav" />
        <NavbarBs.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Početna
            </Nav.Link>
            <Nav.Link to="/lessons" as={NavLink}>
              Lekcije
            </Nav.Link>
            <Nav.Link to="/calculators" as={NavLink}>
              Pomoć
            </Nav.Link>
            <Nav.Link to="/quiz" as={NavLink}>
              Kvizovi
            </Nav.Link>
          </Nav>
          <div className="fs-4 d-none d-lg-block">FizikaExplorator</div>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
