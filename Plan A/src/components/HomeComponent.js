import React, { Component } from "react";
import { Veg, NonVeg } from "./vegIcons";
// import { ReactComponent as Veg } from "./assets/images/veg.svg";
// import { ReactComponent as NonVeg } from "./assets/images/non-veg.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
   Row,
   Col,
   Container,
   Media,
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
   Button
} from "reactstrap";

const HeroSection = () => {
   return (
      <Row className="hero mx-0">
         <Col md={true} className="mx-0 px-0">
            <div className="img-fluid hero-img xlarge-fs text-center white">
               Dishes on the Go
            </div>
         </Col>
      </Row>
   );
};

const Dish = props => {
   return (
      <Col md={true} className="my-2">
         <Card>
            <CardImg
               top
               width="100%"
               src={props.dish.img}
               alt={props.dish.name}
            />
            <CardBody>
               <CardTitle className="mb-1">{props.dish.name}</CardTitle>
               {props.dish.veg ? <Veg /> : <NonVeg />}

               <CardSubtitle className="d-inline-block">
                  {props.dish.category.map(category => (
                     <span className="xxsmall-fs grey60">
                        {"  "}
                        {category}
                        {" | "}
                     </span>
                  ))}
               </CardSubtitle>
               {/* <CardText></CardText> */}
               <Button className="ml-auto add-btn">ADD</Button>
               <p className="fw6 mb-0">₹100</p>
            </CardBody>
         </Card>
         {/* <Media
            object
            className="rounded"
            data-src={props.dish.img}
            alt={props.dish.name}
            fluid="true"
            rounded="true"
         />
         <p className="mb-1">{props.dish.name}</p> */}
         {/* <img className="img-fluid"
            src={
               props.dish.veg
                  ? "./assets/images/veg.svg"
                  : "./assets/images/non-veg.svg"
            }
            src={props.dish.veg ? <Veg /> : <NonVeg />}
         /> */}
         {/* {props.dish.veg ? <Veg /> : <NonVeg />}
         {props.dish.category.map(category => (
            <span
               className="xxsmall-fs grey60"
               style={{ letterSpacing: "0.02rem" }}
            >
               {" "}
               {category}
               {" | "}
            </span>
         ))}
         <Button className="ml-auto add-btn">ADD</Button>
         <span className="fw6">₹100</span> */}
      </Col>
   );
};

export class Home extends Component {
   render() {
      return (
         <>
            <HeroSection />
            <Container>
               {/* <img className="" alt="Hero" fluid="true" /> */}
               <h5>Popular Foods: </h5>
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
