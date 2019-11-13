import React from "react";
import About from "./AboutComponent";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
   postComment,
   fetchDishes,
   fetchComments,
   fetchPromos,
   fetchLeaders,
   postFeedback
} from "./../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = state => ({
   dishes: state.dishes,
   comments: state.comments,
   promotions: state.promotions,
   leaders: state.leaders
});

const mapDispatchToProps = dispatch => ({
   postComment: (dishId, rating, author, comment) =>
      dispatch(postComment(dishId, rating, author, comment)),
   fetchDishes: () => dispatch(fetchDishes()),
   resetFeedbackForm: () => dispatch(actions.reset("feedback")),
   fetchComments: () => dispatch(fetchComments()),
   fetchPromos: () => dispatch(fetchPromos()),
   fetchLeaders: () => dispatch(fetchLeaders()),
   postFeedback: (
      firstname,
      lastname,
      telnum,
      email,
      agree,
      contactType,
      message
   ) =>
      dispatch(
         postFeedback(
            firstname,
            lastname,
            telnum,
            email,
            agree,
            contactType,
            message
         )
      )
});

class Main extends React.Component {
   componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
   }

   render() {
      const HomePage = () => (
         <Home
            dish={this.props.dishes.dishes.filter(d => d.featured)[0]}
            dishesLoading={this.props.dishes.isLoading}
            dishesErrmess={this.props.dishes.errmess}
            promotion={
               this.props.promotions.promotions.filter(p => p.featured)[0]
            }
            promoLoading={this.props.promotions.isLoading}
            promoErrmess={this.props.promotions.errmess}
            leader={this.props.leaders.leaders.filter(l => l.featured)[0]}
            leaderLoading={this.props.leaders.isLoading}
            leaderErrmess={this.props.leaders.errmess}
         />
      );

      const DishWithId = ({ match }) => (
         <Dishdetail
            dish={
               this.props.dishes.dishes.filter(
                  dish => dish.id === parseInt(match.params.dishId, 10)
               )[0]
            }
            isLoading={this.props.dishes.isLoading}
            errmess={this.props.dishes.errmess}
            comments={this.props.comments.comments.filter(
               c => c.dishId === parseInt(match.params.dishId, 10)
            )}
            commentsErrmess={this.props.comments.errmess}
            postComment={this.props.postComment}
         />
      );

      return (
         <div>
            <Header />
            <TransitionGroup>
               <CSSTransition
                  key={this.props.location.key}
                  classNames="page"
                  timeout={300}
               >
                  <Switch location={this.props.location}>
                     <Route path="/home" component={HomePage} />
                     <Route
                        exact
                        path="/aboutus"
                        component={() => <About leaders={this.props.leaders} />}
                     />
                     <Route
                        exact
                        path="/menu"
                        component={() => <Menu dishes={this.props.dishes} />}
                     />
                     <Route path="/menu/:dishId" component={DishWithId} />
                     <Route
                        exact
                        path="/contactus"
                        component={() => (
                           <Contact
                              postFeedback={this.props.postFeedback}
                              resetFeedbackForm={this.props.resetFeedbackForm}
                           />
                        )}
                     />
                     <Redirect to="/home" />
                  </Switch>
               </CSSTransition>
            </TransitionGroup>

            <Footer />
         </div>
      );
   }
}

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(Main)
);
