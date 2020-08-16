import { put, takeEvery, all, call } from 'redux-saga/effects'
import { OffersActions } from "./reducer/data/data.js";

import {ApplicationApi} from "./application-api.js";
import {ModelOffer} from "./utils/adapters.js";

import { getCities } from "./utils/utils.js";


const getOffers = function() {
  return ApplicationApi.getOffers().then(ModelOffer.parseOffers);
}

const getOffersClosest = function(id) {
  return ApplicationApi.getClosestOffers(id).then(ModelOffer.parseOffers);
}

export function* loadOffers() {
  console.log('loading');
  const response = yield call(getOffers);

  yield put({ type: 'LOAD_OFFERS', payload: response  });
  let cities = getCities(response);
  yield put({ type: 'GET_CITIES', payload: cities  });
  yield put({ type: 'UPDATE_CITY', payload: cities[0]  });
}

export function* loadOffersClosest(id) {
  try {
    const response = yield call(getOffersClosest(id));
console.log(response);
    yield put({ type: 'LOAD_OFFERS_CLOSEST', payload: response  });
  } catch (error) {
    yield put({ type: "LOAD_OFFERS_FAILURE", payload: error });
  }

}

export function* watchloadOffers() {
  yield takeEvery('LOAD_OFFERS_REQUEST', loadOffers);
}

export function* watchClosest(id) {
  yield takeEvery('CLOSEST_REQUEST', loadOffersClosest(id));
}

// обратите внимание, как мы экспортируем rootSaga
// единая точка входа для запуска всех Саг одновременно
export default function* rootSaga() {
  yield all([
    watchloadOffers(),
    watchClosest()
  ])
}
