import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
// import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferPageScreen from "../offer-page-screen/offer-page-screen";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentId: null,
    };

    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderPage()}
          </Route>
          <Route exact path="/login">
            <AuthScreen />
          </Route>
          {/* <Route exact path="/favorites">
            <FavoritesScreen offers={this.props.offers} />
          </Route> */}
          <Route path="/offer/:id?" component={OfferPageScreen}>
            <OfferPageScreen
              currentId={1}
              onCardTitleClick={this._handleCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderPage() {
    const currentId = this.state.currentId;

    if (currentId) {
      return (
        <OfferPageScreen
          currentId={currentId}
          onCardTitleClick={this._handleCardTitleClick}
        />
      );
    } else {
      return (
        <MainScreen
          cities={this.props.cities}
          onCardTitleClick={this._handleCardTitleClick}
        />
      );
    }
  }

  _handleCardTitleClick(id) {
    this.setState({
      currentId: id,
    });
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  // offers: PropTypes.array.isRequired,
};

export default App;
