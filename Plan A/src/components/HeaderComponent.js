import React, { Component } from "react";
import {
   Nav,
   Navbar,
   NavbarBrand,
   NavbarToggler,
   Collapse,
   NavItem,
   Jumbotron,
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Form,
   FormGroup,
   Input,
   Label
} from "reactstrap";
import { NavLink } from "react-router-dom";

export class Header extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isNavOpen: false,
         isModalOpen: false
      };

      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
   }

   toggleNav() {
      this.setState({ isNavOpen: !this.state.isNavOpen });
   }

   toggleModal() {
      this.setState({ isModalOpen: !this.state.isModalOpen });
   }

   handleLogin(ev) {
      alert(
         "Username: " +
            this.username.value +
            " Password: " +
            this.password.value +
            " Remember: " +
            this.remember.checked
      );
      ev.preventDefault();
   }

   render() {
      return (
         <>
            <Navbar bg="white" color="#FD0054">
               <NavbarToggler onClick={this.toggleNav} />
               <NavbarBrand
                  className="mr-auto fw3 small-fs"
                  style={{ color: "#FD0054" }}
                  href="/"
               >
                  {/* <img
                     src="./assets/images/logo.png"
                     width="40"
                     height="auto"
                     className="d-inline-block align-middle"
                     alt="React Bootstrap logo"
                  /> */}
                  <div>
                     <span className="logo-text align-middle">DG</span> Dishes
                     on the Go
                  </div>
               </NavbarBrand>
               <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav className="ml-auto xsmall-fs" navbar>
                     <NavItem>
                        <NavLink to="/login">Join/Login</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/signup">Signup</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink to="/help">Help</NavLink>
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
         </>
      );
   }
}

export default Header;
