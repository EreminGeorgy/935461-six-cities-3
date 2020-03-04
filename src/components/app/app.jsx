import React, {useState} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Main} from "../main/main.jsx";
import {Property} from "../property/property.jsx";
import {connect} from "react-redux";

export const App = (props) => {

  const {offers, city} = props;
  const [activeOffer, setActiveOffer] = useState(offers[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            handleTitleClick={setActiveOffer}
            offers={offers}
            city={city}
          />
        </Route>
        <Route exact path="/dev-property">
          <Property
            offer={activeOffer}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offersInActiveCity,
  city: state.activeCity,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired,
  })
};
