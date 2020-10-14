import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferPageScreen from "../offer-page-screen/offer-page-screen";

class App extends PureComponent {
  constructor(props) {
    super(props);
    const {offersCount, offers} = props;

    this.state = {
      offers: null,
    };

    this.offersCount = offersCount;
    this.offers = offers;
    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreen
              offersCount={this.offersCount}
              offers={this.offers}
              onCardTitleClick={this._handleCardTitleClick}
            />
          </Route>
          <Route exact path="/login">
            <AuthScreen />
          </Route>
          <Route exact path="/favorites">
            <FavoritesScreen offers={this.props.offers[0]} />
          </Route>
          <Route path="/offer/:id?" component={OfferPageScreen}>
            <OfferPageScreen offers={this.props.offers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _handleCardTitleClick(currentOffer) {
    this.setState({
      offer: currentOffer,
    });
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
