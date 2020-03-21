import React, {useState} from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from "../main/main.jsx";
import {Property} from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user.js";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user";

export const App = (props) => {
  const {login, authorizationStatus} = props;

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
          {(authorizationStatus === AuthorizationStatus.AUTH) ?
            <Redirect to={`/`} /> :
            <SignIn
              onSubmit={login}
            />
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.checkAuth(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  login: PropTypes.func,
  authorizationStatus: PropTypes.string,
};
