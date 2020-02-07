import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {proposalsNumber, placesList} = props;

  return (
    <Main
      proposalsNumber={proposalsNumber}
      placesList={placesList}
    />
  );
};

App.propTypes = {
  proposalsNumber: PropTypes.number.isRequired,
  placesList: PropTypes.array.isRequired
};


export default App;
