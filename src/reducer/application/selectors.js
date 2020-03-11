import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.APPLICATION;

export const getSelectedCity = (state) => {
  return state[NAME_SPACE].activeCity;
};
