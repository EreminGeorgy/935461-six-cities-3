import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const handleTitleClick = () => {};

class App extends PureComponent {

  render() {
    const {proposalsNumber, offers} = this.props;

    return (
      <Main
        proposalsNumber={proposalsNumber}
        handleTitleClick={handleTitleClick}
        offers={offers}
      />
    );
  }
}

App.propTypes = {
  handleTitleClick: PropTypes.func,
  proposalsNumber: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    previewSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    raiting: PropTypes.number.isRequired,
    type: PropTypes.string,
    isPremium: PropTypes.bool,
  })).isRequired,
};


export default App;
