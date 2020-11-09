
export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
};

export const setActiveCity = (city, offers) => {
  return {
    type: ActionType.SET_ACTIVE_CITY,
    payload: {
      city,
      offers,
    },
  };
};

export const setSortType = (sortType, offers) => {
  return {
    type: ActionType.SET_SORT_TYPE,
    payload: {
      sortType,
      offers,
    },
  };
};
