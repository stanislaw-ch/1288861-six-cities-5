import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers.js";
import reviews from "./mocks/reviews.js";

const Settings = {
  OFFERS_COUNT: 312
};

ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
