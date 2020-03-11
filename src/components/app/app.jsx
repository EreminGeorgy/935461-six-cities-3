import React, {useState} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";
import {connect} from "react-redux";
import {getSelectedCity, getSelectedOffers} from "../../reducer/data/selectors";

export const App = (props) => {

  const {offersInActiveCity, city} = props;

  if (offersInActiveCity && offersInActiveCity.length < 1) {
    return <p>No data loaded</p>;
  }

  const [activeOffer, setActiveOffer] = useState(offersInActiveCity && offersInActiveCity[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            handleTitleClick={setActiveOffer}
            offers={offersInActiveCity}
            city={city}
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

const mapStateToProps = (state) => ({
  offersInActiveCity: getSelectedOffers(state),
  city: getSelectedCity(state),
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  offersInActiveCity: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })),
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
  })
};
