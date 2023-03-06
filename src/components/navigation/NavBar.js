import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom"; 
import Modal from '../modal/Modal';
import './navbar.css'


function NavBar({searchMovie,movie,setMovie}) {
  const [modalOpen, setModalOpen] = useState(false);
  const addNewMovie = (newMovie) => {
    setMovie([...movie,newMovie])
  }
 
  return (
    <>
      <Navbar className="Navbar-bg" >
        <Container fluid>
          <NavLink className="active" to={"/"}><Navbar.Brand >Movie-App</Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Login</Nav.Link>
              <NavDropdown title="Kids" id="navbarScrollingDropdown">
                <NavDropdown.Item>Movies</NavDropdown.Item>
                <NavDropdown.Item>
                  TR
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  Latest
                </NavDropdown.Item>
              </NavDropdown>
              
              <Button variant="light" className="mbtn" onClick={() => {
                setModalOpen(true);
              }}>
                Add-movie
              </Button>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search ..."
                className="me-2"
                aria-label="Search" onChange={(e) => searchMovie(e.target.value)}/>
              <Button  variant="light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {modalOpen && <Modal setOpenModal={setModalOpen} addNewMovie={addNewMovie}/>}
    </>
  );
}

export default NavBar;