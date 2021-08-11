import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

import "../theme/fonts.css";
import "../theme/normalize.css";
import "../theme/global.css";
import "../theme/main.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <LeftSide />
        <RightSide />
      </div>
    </Router>
  );
};

export default App;
