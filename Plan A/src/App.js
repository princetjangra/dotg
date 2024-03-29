import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MAIN_COURSE, SNACKS, HEALTHY, SWEETS } from "./shared/data";
import MainComponent from "./components/MainComponent";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <MainComponent
               main_course={MAIN_COURSE}
               snacks={SNACKS}
               healthy={HEALTHY}
               sweets={SWEETS}
            />
         </div>
      </BrowserRouter>
   );
}

export default App;
