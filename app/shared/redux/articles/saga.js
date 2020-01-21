import { takeEvery, put, all, call } from 'redux-saga/effects'
import * as api from 'shared/services/article.service'
import * as CONSTANTS from './constants'

// Individual exports for testing
export function* fetchArticles(action) {
  try {
    const data = yield call(api.fetchArticles)
    yield put({
      type: CONSTANTS.FETCH_ARTICLES_SUCCESS,
      articles: data.articles,
    })
  } catch (e) {
    yield put({ type: CONSTANTS.FETCH_ARTICLES_FAILURE, e })
  }
}

export function* fetchArticlesWatcher(action) {
  yield takeEvery(CONSTANTS.FETCH_ARTICLES_REQUEST, fetchArticles)
}

export default function* articlesSaga() {
  yield all([fetchArticlesWatcher()])
}
