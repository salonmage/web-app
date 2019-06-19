import { all } from 'redux-saga/effects'
import watchFetchUser from './userLogin/sagas'

export default function* rootSaga() {
  yield all([
    watchFetchUser()
  ])
}