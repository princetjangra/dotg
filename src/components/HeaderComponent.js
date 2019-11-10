import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export class Header extends Component {
   render() {
      return (
         <>
            <Navbar bg="white" color="#FD0054">
               {/* <div className="container"> */}
               <Navbar.Brand
                  className="mr-auto fw3 small-fs"
                  style={{ color: "#FD0054" }}
               >
                  <img
                     src="./assets/images/logo.png"
                     width="40"
                     height="auto"
                     className="d-inline-block align-middle"
                     alt="React Bootstrap logo"
                  />{" "}
                  Dishes on the Go
               </Navbar.Brand>
               <Navbar.Collapse>
                  <Nav className="ml-auto xsmall-fs">
                     <Nav.Link href="#">Join/Login</Nav.Link>
                     <Nav.Link href="#">Signup</Nav.Link>
                     <Nav.Link href="#">Help</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </>
      );
   }
}

export default Header;
