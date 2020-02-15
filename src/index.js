import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";

const settings = {
  proposalsNumber: 312,
};

ReactDOM.render(
    <App
      proposalsNumber={settings.proposalsNumber}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
