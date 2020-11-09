import cities from "../mocks/cities.js";
import mocksOffers from "../mocks/offers.js";
import reviews from "../mocks/reviews.js";
import {extend} from "../utils.js";
import {ActionType} from "./action";
import {SortType} from "../const.js";

const initialOffers = mocksOffers.filter((offer) => {
  return offer.cityIds.includes(cities[0].id);
});

const initialState = {
  reviews: reviews[0],
  mocksOffers,
  city: cities[0],
  sortType: SortType.POPULAR,
  offers: initialOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        city: action.payload.city,
        offers: action.payload.offers,
        reviews: action.payload.reviews,
      });
    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        sortType: action.payload.sortType,
        offers: action.payload.offers,
      });
  }

  return state;
};

export {reducer};
