import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCardScreen from "../place-card-screen/place-card-screen";
import {SortType} from "../../const.js";

class PlaceCardListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: 0,
    };

    this._sortOffersByType = this._sortOffersByType.bind(this);
  }

  render() {
    const offers = this._sortOffersByType(this.props.offers);

    return offers.map((offer) => {
      const {id} = offer;
      return < PlaceCardScreen
        key={id}
        offer={offer}
        onCardHover={this.props.onCardHover}
        onCardTitleClick={this.props.onCardTitleClick}
      />;
    });
  }

  _sortOffersByType(offers) {
    let sortedOffers = [];
    const sortType = this.props.sortType;
    const offersCopy = offers.slice();

    switch (sortType) {
      case SortType.LOW_TO_HIGH:
        sortedOffers = offersCopy.sort((a, b) => a.price - b.price);
        break;
      case SortType.HIGH_TO_LOW:
        sortedOffers = offersCopy.sort((a, b) => b.price - a.price);
        break;
      case SortType.TOP_RATED_FIRST:
        sortedOffers = offersCopy.sort((a, b) => b.starsCount - a.starsCount);
        break;
      case SortType.POPULAR:
        sortedOffers = offersCopy;
        break;
    }
    return sortedOffers;
  }
}

PlaceCardListScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onCardHover: PropTypes.func,
};

export default PlaceCardListScreen;
