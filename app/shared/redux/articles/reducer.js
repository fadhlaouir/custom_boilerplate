/*
 *
 * Articles reducer
 *
 */
import produce from 'immer'
import * as CONSTANTS from './constants'

export const initialState = { loading: false, data: [] }

/* eslint-disable default-case, no-param-reassign */
const articlesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONSTANTS.FETCH_ARTICLES_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.FETCH_ARTICLES_SUCCESS:
        draft.data = action.articles
        draft.loading = false
        break
      case CONSTANTS.FETCH_ARTICLES_FAILURE:
        draft.loading = false
        break
    }
  })

export default articlesReducer
