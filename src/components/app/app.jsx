import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main.jsx";
import {Property} from "../property/property.jsx";

export const App = () => {

  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            handleTitleClick={setActiveOffer}
          />
        </Route>
        <Route path="/dev-property">
          <Property
            offer={activeOffer}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
