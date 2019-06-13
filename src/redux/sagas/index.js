import { all } from 'redux-saga/effects'
import watchFetchUser from './users/index'

export default function* rootSaga() {
  yield all([
    watchFetchUser()
  ])
}