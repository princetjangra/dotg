import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class MainComponent extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Switch location={this.props.location}>
               <Route
                  path="/home"
                  component={() => (
                     <Home
                        main_course={this.props.main_course}
                        snacks={this.props.snacks}
                        healthy={this.props.healthy}
                        sweets={this.props.sweets}
                     />
                  )}
               />
               {/* <Route exact path="/aboutus" component={About} />
               <Route exact path="/help" component={Help} /> */}
               <Redirect to="/home" />
            </Switch>

            <Footer />
         </div>
      );
   }
}

export default MainComponent;
