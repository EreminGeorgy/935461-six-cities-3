import React from "react";
import Main from "./main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {proposalsNumber} = props;

  return (
    <Main proposalsNumber={proposalsNumber} />
  );
};


export default App;
