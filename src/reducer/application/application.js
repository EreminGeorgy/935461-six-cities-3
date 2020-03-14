import {extend} from '../../utils/utils.js';

const initialState = {
  activeCity: null,
};

const ApplicationActions = {
  NEW_CITY: `NEW_CITY`,
};

const ActionCreator = {
  newCity: (newCity) => ({
    type: ApplicationActions.NEW_CITY,
    payload: newCity,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ApplicationActions.NEW_CITY:
      return extend(state, {
        activeCity: action.payload,
      });
  }
  return state;
};

export {reducer, ActionCreator};
