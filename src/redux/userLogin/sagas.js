import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchUser(action) {
  yield delay(1000)
  yield put({ type: 'INCREMENT', payload: 'Hello Saga' })
}

export default function* watchFetchUser() {
  yield takeEvery('INCREMENT_ASYNC', fetchUser)
}