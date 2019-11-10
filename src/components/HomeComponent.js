import React, { Component } from "react";
import { Veg } from "./vegIcons";
// import { ReactComponent as Veg } from "./assets/images/veg.svg";
// import { ReactComponent as NonVeg } from "./assets/images/non-veg.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Image, Container, Button } from "react-bootstrap";

const HeroSection = () => {
   return (
      <Row className="hero mx-0">
         <Col md={true} className="mx-0 px-0">
            <Image src="./assets/images/heroMen.jpg" alt="Men" fluid />
            <div className="hero-caption d-inline-block mx-auto white fw5">
               Dishes on the Go
            </div>
         </Col>
      </Row>
   );
};

const Dish = props => {
   return (
      <Col md={true}>
         <Image src={props.dish.img} alt={props.dish.name} fluid />
         <p className="mb-1">{props.dish.name}</p>
         <Image
         // src={
         //    props.dish.veg
         //       ? "./assets/images/veg.svg"
         //       : "./assets/images/non-veg.svg"
         // }
         // src={props.dish.veg ? <Veg /> : <NonVeg />}
         />
         <Veg />

         <Button className="ml-auto add-btn">ADD</Button>
         <span className="fw5">₹100</span>
      </Col>
   );
};

export class Home extends Component {
   render() {
      return (
         <>
            <HeroSection />
            <Container>
               <h5>Popular Foods</h5>
               <Row className="popular">
                  {this.props.main_course.slice(0, 3).map(dish => (
                     <Dish key={dish.id} dish={dish} />
                  ))}
               </Row>
            </Container>
         </>
      );
   }
}

export default Home;
