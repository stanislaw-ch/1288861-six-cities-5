import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferPageScreen from "../offer-page-screen/offer-page-screen";

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offersCount={offersCount}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={props.offers[0]}/>
        </Route>
        <Route path="/offer/:id?" component={OfferPageScreen}>
          <OfferPageScreen offers={props.offers[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
