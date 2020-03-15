import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main.jsx";
import {Property} from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user.js";

export const App = (props) => {
  const {login} = props;

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
        <Route exact path="/dev-auth">
          <SignIn
            onSubmit={login}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  },
});

export default connect(null, mapDispatchToProps)(App);
