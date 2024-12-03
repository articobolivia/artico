import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Resume2 from "./Resume2";

import Projects from "./Projects";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/HomePage" component={Homepage} />
      <Route path="/Resume2" component={Resume2} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Aboutme" component={Aboutme} />
    </Switch>

    
  );
};

export default Main;
