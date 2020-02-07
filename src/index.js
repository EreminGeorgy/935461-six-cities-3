import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PROPOSALS_NUMBER: 312,
  PLACES_LIST: [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`
  ]
};


ReactDOM.render(
    <App
      proposalsNumber={Settings.PROPOSALS_NUMBER}
      placesList={Settings.PLACES_LIST}
    />,
    document.querySelector(`#root`)
);
