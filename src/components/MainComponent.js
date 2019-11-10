import React from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";

const MainComponent = props => {
   return (
      <div>
         <Header />
         <Home
            main_course={props.main_course}
            snacks={props.snacks}
            healthy={props.healthy}
            sweets={props.sweets}
         />
      </div>
   );
};

export default MainComponent;
