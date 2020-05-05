import * as React from "react";
import {useRef, useCallback} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {connect} from "react-redux";
import {getSelectedCity} from "../../reducer/data/selectors";

export const SignIn = (props) => {
  const {city, onSubmit} = props;

  if (!city) {
    return <p>No data loaded</p>;
  }

  const mailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (evt) => {

    evt.preventDefault();

    onSubmit({
      login: mailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const memoSubmit = useCallback(handleSubmit, []);

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={memoSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={mailRef}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={passwordRef}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>
                  {city.name}
                </span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

const mapStateToProps = (state) => ({
  city: getSelectedCity(state),
});

export default connect(mapStateToProps)(SignIn);
