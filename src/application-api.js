import {createAPI} from "./api.js";

const RouteMap = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
};

const axios = createAPI(() => {});

function getOffers() {
  return axios.get(RouteMap.OFFERS);
}

function login() {
  return axios.get(RouteMap.LOGIN);
}

function signIn(loginData) {
  return axios.post(RouteMap.LOGIN, loginData);
}

export const ApplicationApi = {getOffers, login, signIn};
