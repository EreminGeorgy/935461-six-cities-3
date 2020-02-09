import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleClickHandler = () => {};

const App = (props) => {
  const {proposalsNumber, placesList} = props;

  return (
    <Main
      proposalsNumber={proposalsNumber}
      placesList={placesList}
      titleClickHandler={titleClickHandler}
    />
  );
};

App.propTypes = {
  proposalsNumber: PropTypes.number.isRequired,
  placesList: PropTypes.array.isRequired
};


export default App;
