/*
 *
 * Articles actions
 *
 */
import * as CONSTANTS from './constants'

export function fetchArticles() {
  return {
    type: CONSTANTS.FETCH_ARTICLES_REQUEST,
    test: 'eeee',
  }
}
