import * as React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from "../main/main";
import Property from "../property/property";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import PrivateRoute from "../private-route/private-route";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user";
import {Offer} from "../../types";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../utils/const";

interface Props {
  login: Offer[];
  authorizationStatus: string;
}

export const App: React.FunctionComponent<Props> = (props: Props) => {
  const {login, authorizationStatus} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route path={`${AppRoute.PROPERTY}/:id`} render={() => {
          return <Property />;
        }} />
        <Route exact path={AppRoute.AUTH}>
          {(authorizationStatus === AuthorizationStatus.AUTH) ?
            <Redirect to={AppRoute.ROOT} /> :
            <SignIn
              onSubmit={login}
            />
          }
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (<Favorites />);
          }}
        />
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
