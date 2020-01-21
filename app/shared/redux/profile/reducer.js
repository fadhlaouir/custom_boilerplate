/*
 *
 * Profile reducer
 *
 */
import produce from 'immer'
import * as CONSTANTS from './constants'
import { generateUrl } from './urlGenerator'

export const initialState = {
  loading: true,
  data: { roles: [] },
  URLS: {},
}

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONSTANTS.SET_ROLES_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.SET_ROLES_SUCCESS:
        draft.loading = false
        draft.data.roles = action.roles
        break
      case CONSTANTS.SET_ROLES_FAILURE:
        draft.loading = false
        break
      case CONSTANTS.GET_SETTINGS_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.GET_SETTINGS_SUCCESS:
        window.baseApiUrl = generateUrl(action.URLS.GATEWAY_URL, 'v1/')
        window.X_IDENTITY_URL = generateUrl(action.URLS.IDENTITY_URL)
        draft.URLS = action.URLS
        draft.loading = false
        break
      case CONSTANTS.GET_SETTINGS_FAILURE:
        draft.loading = false
    }
  })

export default profileReducer
