import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCloudSun } from "react-icons/fa";
const TopBar = () => {
  return (
    <Navbar expand="lg" className="text-start" style={{ backgroundColor: "#E3B448" }}>
      <Navbar.Brand className="fs-1 p-0 m-0 ms-5">
        <FaCloudSun /> Il mio Meteo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="ms-4 mt-2 nav-link fs-3">
            Home
          </Link>
          <Link to="/search" className="ms-2 mt-2 nav-link fs-3">
            Cerca la tua città
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default TopBar;
