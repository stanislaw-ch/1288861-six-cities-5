import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
// import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferPageScreen from "../offer-page-screen/offer-page-screen";
import {withCurrentId} from "../../hocs/with-current-id/with-current-id";

const App = (props) => {

  const renderPage = () => {
    const currentId = props.currentId;

    if (currentId) {
      return (
        <OfferPageScreen
          currentId={currentId}
          onCardTitleClick={props.onCardTitleClick}
        />
      );
    } else {
      return (
        <MainScreen
          cities={props.cities}
          onCardTitleClick={props.onCardTitleClick}
        />
      );
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderPage()}
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
            onCardTitleClick={props.onCardTitleClick}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  // offers: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  currentId: PropTypes.number,
};

export default withCurrentId(App);
