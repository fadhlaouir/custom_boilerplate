import { put, takeEvery, all, call } from 'redux-saga/effects'
import * as api from 'shared/services/profile.service'
import * as CONSTANTS from './constants'

// Individual exports for testing
export function* setRoles(action) {
  try {
    yield put({
      type: CONSTANTS.SET_ROLES_SUCCESS,
      roles: action.roles,
    })
  } catch (e) {
    console.log('e: ', e)
    yield put({ type: CONSTANTS.SET_ROLES_FAILURE, e })
  }
}

export function* setRolesWatcher() {
  yield takeEvery(CONSTANTS.SET_ROLES_REQUEST, setRoles)
}

export function* getSettings() {
  try {
    const result = yield call(api.getSettings)
    yield put({
      type: CONSTANTS.GET_SETTINGS_SUCCESS,
      URLS: result,
    })
  } catch (err) {
    yield put({
      type: CONSTANTS.GET_SETTINGS_FAILURE,
    })
  }
}

export function* getSettingsWatcher() {
  yield takeEvery(CONSTANTS.GET_SETTINGS_REQUEST, getSettings)
}

export default function* profileSaga() {
  yield all([setRolesWatcher(), getSettingsWatcher()])
}
