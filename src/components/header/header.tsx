import * as React from "react";
import {useEffect} from "react";
import {User} from "../../types";
import {connect} from "react-redux";
import {getUser, getAuthorizationStatus} from '../../reducer/user/selectors';
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../utils/const";
import {Link} from 'react-router-dom';

interface Props {
  user: User;
  path: string;
  authorizationStatus: string;
}

export const Header: React.FunctionComponent<Props> = (props: Props) => {

  const {user, authorizationStatus, path} = props;

  useEffect(() => {

  }, [user]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src={`${path ? path : ``}img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={(authorizationStatus === AuthorizationStatus.AUTH) ? AppRoute.FAVORITES : AppRoute.AUTH}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">
                    {(authorizationStatus === AuthorizationStatus.AUTH) ? user && user.email : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


const mapStateToProps = (state) => ({
  user: getUser(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  applyUserData() {
    dispatch(UserOperation.checkAuth());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
