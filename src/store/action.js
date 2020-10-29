
export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
};

export const setActiveCity = (id) => {
  return {
    type: ActionType.SET_ACTIVE_CITY,
    payload: id,
  };
};
