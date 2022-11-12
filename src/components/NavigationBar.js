import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavigationBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">Movie CinemaIndo</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-3" style={{ maxHeight: "100px" }} navbarScroll></Nav>

            <Form className="d-flex" onSubmit={props.handleOnSubmit} autoComplete="off">
              <FormControl type="search" placeholder="Movie Search" className="me-2" aria-label="search" value={props.searchTerm} onChange={props.handleOnChange}></FormControl>
              <Button variant="secondary" onClick={props.handleOnSubmit}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
