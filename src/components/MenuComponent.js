import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Veg, NonVeg } from "./Icons";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card className="shadow-sm">
      <Link to={`/menu/${dish.id}`}>
        <div className="overflow-hidden">
          <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        </div>
        <div className="p-2">
          <CardTitle className="regular-fs fw5 mb-1">{dish.name}</CardTitle>
          {dish.veg ? <Veg /> : <NonVeg />}{" "}
          <span className="xsmall-fs grey60 fw3">{dish.category}</span>
          <p className="fw6 regular-fs">₹{dish.price}</p>
        </div>
      </Link>
    </Card>
  );
}

class VegNonveg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { veg: true, nonveg: true };
  }

  checkItem(ev) {
    const { name } = ev.target;
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }

  render() {
    return (
      <div className="ml-auto row my-2 d-flex align-items-center">
        <FormGroup className="mr-2" check>
          <Label check>
            <Input
              type="checkbox"
              name="veg"
              checked={this.state.veg}
              onChange={e => this.checkItem(e)}
            />{" "}
            Veg
          </Label>
        </FormGroup>
        <FormGroup className="" check>
          <Label check>
            <Input
              type="checkbox"
              name="nonveg"
              checked={this.state.nonveg}
              onChange={e => this.checkItem(e)}
            />{" "}
            NonVeg
          </Label>
        </FormGroup>
      </div>
    );
  }
}

function Menu(props) {
  const menu = props.dishes.dishes
    .filter(dish => dish.category === "Main Course")
    .map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-4 my-3">
          <RenderMenuItem dish={dish} />
        </div>
      );
    });
  const snacks = props.dishes.dishes
    .filter(dish => dish.category === "Snacks")
    .map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-4 my-3">
          <RenderMenuItem dish={dish} />
        </div>
      );
    });
  const healthy = props.dishes.dishes
    .filter(dish => dish.category === "Healthy")
    .map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-4 my-3">
          <RenderMenuItem dish={dish} />
        </div>
      );
    });
  const sweets = props.dishes.dishes
    .filter(dish => dish.category === "Sweets")
    .map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-4 my-3">
          <RenderMenuItem dish={dish} />
        </div>
      );
    });

  if (props.dishes.isLoading)
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  else if (props.dishes.errmess)
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errmess}</h4>
        </div>
      </div>
    );
  else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb className="bg-white my-2">
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <VegNonveg />
        </div>

        <h3>Main Course</h3>
        <hr />
        <div className="row">{menu}</div>
        <h3>Snacks</h3>
        <hr />
        <div className="row">{snacks}</div>
        <h3>Healthy</h3>
        <hr />
        <div className="row">{healthy}</div>
        <h3>Sweets</h3>
        <hr />
        <div className="row">{sweets}</div>
      </div>
    );
}

export default Menu;
