import cities from "../mocks/cities.js";
import offers from "../mocks/offers.js";
import reviews from "../mocks/reviews.js";
import {extend} from "../utils.js";
import {ActionType} from "./action";

const initialState = {
  city: cities[0],
  reviews: reviews[0],
  offers: offers.filter((offer) => {
    return offer.cityIds.includes(cities[0].id);
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        city: cities.find((city) => {
          return city.id === action.payload;
        }),
        reviews: reviews.find((review) => {
          return review.id === action.payload;
        }),
        offers: offers.filter((offer) => {
          return offer.cityIds.includes(action.payload);
        }),
      });
  }

  return state;
};

export {reducer};
