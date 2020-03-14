import {createAPI} from "./api.js";

const RouteMap = {
  OFFERS: `/hotels`,
};

const axios = createAPI(() => {});

function getOffers() {
  return axios.get(RouteMap.OFFERS);
}

export const ApplicationApi = {getOffers};
