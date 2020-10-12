import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCardScreen from "../place-card-screen/place-card-screen";

class PlaceCardListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: 0,
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  render() {
    return this.props.offers.map((offer) => {
      const {id} = offer;
      return < PlaceCardScreen
        key={id}
        offer={offer}
        onCardHover={this._handleCardHover}
      />;
    });
  }

  _handleCardHover(id) {
    this.setState({activeCardId: id});
  }
}

PlaceCardListScreen.propTypes = {
  offers: PropTypes.array.isRequired
};

export default PlaceCardListScreen;
