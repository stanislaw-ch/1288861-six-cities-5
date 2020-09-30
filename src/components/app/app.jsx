import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";


const App = (props) => {
  const {placesCount} = props;

  return (
    <WelcomeScreen placesCount={placesCount} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
