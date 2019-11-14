import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label
} from "reactstrap";
import { Veg, NonVeg } from "./Icons";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => !val || val.length >= len;

function RenderDish({ dish }) {
  return (
    <div className=" m-1">
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <div className="row">
          <div className="col-12 col-md-6 overflow-hidden">
            <img className="img-fluid rounded-lg shadow" src={baseUrl + dish.image} alt={dish.name} />
          </div>

          <div className="col-12 col-md-6 ">
            <div className="xlarge-fs fw6 mb-1">{dish.name}</div >
            {dish.veg ? <Veg /> : <NonVeg />}{" "}
            <span className="small-fs fw4 grey60">{dish.category}</span>
            <div className="large-fs fw6 my-1">₹{dish.price}</div>
            <hr />
            <p>{dish.description}</p>
            <b>Allergen:</b>
            <p>{dish.allergen}</p>
          </div>
        </div>
      </FadeTransform>
    </div>
  );
}

function RenderComments({ comments, dishId, postComment }) {
  return (
    <div className="col-12 col-md-6 ml-auto m-1">
      <h3 className="ml-auto">Comments: </h3>

      <Stagger in>
        {comments.map(c => {
          return (
            <Fade in>
              <div key={c.id}>
                <div>{c.comment}</div>
                <div>
                  -- {c.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(c.date)))}
                </div>
                <br />
              </div>
            </Fade>
          );
        })}
      </Stagger>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isModalOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmitComment(values) {
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    alert("Current State is: " + JSON.stringify(values));
    this.toggleModal();
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit A Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmitComment(values)}>
              <div className="form-group">
                <Label htmlFor="rating">Rating</Label>

                <Control.select
                  defaultValue={parseInt(5)}
                  model=".rating"
                  name="rating"
                  id="rating"
                  className="form-control"
                >
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    required,
                    maxLength: maxLength(15),
                    minLength: minLength(3)
                  }}
                />
                <Errors
                  model=".author"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                  }}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  className="form-control"
                  rows="6"
                  validators={{
                    required
                  }}
                />
                <Errors
                  model=".comment"
                  className="text-danger"
                  show="touched"
                  messages={{
                    required: "Required"
                  }}
                />
              </div>
              <div className="form-group">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const Dishdetail = props => {
  if (props.isLoading)
    return (
      <div className="container">
        <div className="row">
          <Loading></Loading>
        </div>
      </div>
    );
  else if (props.commentsErrmess)
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errmess}</h4>
        </div>
      </div>
    );

  return props.dish != null ? (
    <div className="container">
      <div className="row">
        <Breadcrumb className="bg-white">
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        {/* <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div> */}
      </div>
      <div className="row">
        <RenderDish dish={props.dish} />
      </div>
      <div className="row">

        <RenderComments
          comments={props.comments}
          dishId={props.dish.id}
          postComment={props.postComment}
        />
      </div>
    </div>
  ) : (
      <div></div>
    );
};

export default Dishdetail;
