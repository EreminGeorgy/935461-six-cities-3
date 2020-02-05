import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const Settings = {
  PROPOSALS_NUMBER: 312
};

ReactDOM.render(
    <App
      proposalsNumber={Settings.PROPOSALS_NUMBER}
    />,
    document.querySelector(`#root`)
);
