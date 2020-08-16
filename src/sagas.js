import { put, takeEvery, all, call } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// обратите внимание, как мы экспортируем rootSaga
// единая точка входа для запуска всех Саг одновременно
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
