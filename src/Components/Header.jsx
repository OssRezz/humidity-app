import { useState } from "react";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Thermometer } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HeaderApp = () => {
  const [urlPath, setUrlPath] = useState("");

  const setPatchFunction = (value) => {
    setUrlPath(value);
  };
  useEffect(() => {
    setPatchFunction(window.location.pathname);
  }, []);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex justify-content-start align-items-center"
        >
          <Thermometer className="text-primary border-0" fontSize={25} />{" "}
          <b>Humidity App</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-lg-flex justify-content-end"
        >
          <Nav>
            <Nav.Link
              className={
                urlPath === "/"
                  ? "btn btn-link btn-sm active"
                  : "btn btn-link btn-sm"
              }
              onClick={() => setPatchFunction("/")}
              to="/"
              as={Link}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              className={
                urlPath === "/history"
                  ? "btn btn-link btn-sm active"
                  : "btn btn-link btn-sm"
              }
              onClick={() => setPatchFunction("/history")}
              to="/history"
              as={Link}
            >
              Historial
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderApp;
