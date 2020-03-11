import {extend} from '../../utils/utils.js';

const initialState = {
  activeCity: null,
};

const ActionCreator = {
  newCity: (newCity) => ({
    type: `NEW_CITY`,
    payload: newCity,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return extend(state, {
        activeCity: action.payload,
      });
  }
  return state;
};

export {reducer, ActionCreator};
