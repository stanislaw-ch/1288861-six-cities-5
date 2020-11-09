import React from "react";
import PropTypes from "prop-types";
import PlaceCardScreen from "../place-card-screen/place-card-screen";

const PlaceCardListScreen = (props) => {

  return props.offers.map((offer) => {
    return < PlaceCardScreen
      key={offer.id}
      offer={offer}
      onCardHover={props.onCardHover}
      onCardTitleClick={props.onCardTitleClick}
    />;
  });
};

PlaceCardListScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func,
};

export default PlaceCardListScreen;
