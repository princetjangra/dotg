import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderItem({ item, isLoading, errmess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errmess) {
    return <h4>{errmess}</h4>;
  } else
    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <Card>
          <Link to={`/menu/${item.id}`} className="overflow-hidden">
            <div className="overflow-hidden">
              <CardImg src={baseUrl + item.image} alt={item.name} />
            </div>
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              {item.designation ? (
                <CardSubtitle>{item.designation}</CardSubtitle>
              ) : null}
              <CardText>{item.description}</CardText>
            </CardBody>
          </Link>
        </Card>
      </FadeTransform>
    );
}

function Home(props) {
  return (
    <div className="container">
      <div className="container py-4">
        <h1>Featured: </h1>
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderItem
              item={props.dish}
              isLoading={props.dishesLoading}
              errmess={props.dishesErrmess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderItem
              item={props.promotion}
              isLoading={props.promoLoading}
              errmess={props.promoErrmess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderItem
              item={props.leader}
              isLoading={props.leaderLoading}
              errmess={props.leaderErrmess}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
