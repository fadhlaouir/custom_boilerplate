import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the articles state domain
 */

const selectArticlesDomain = state => state.articles || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by Articles
 */

const makeSelectArticles = () =>
  createSelector(
    selectArticlesDomain,
    substate => substate,
  )

const getLatestArticles = () =>
  createSelector(
    selectArticlesDomain,
    substate => ({
      loading: substate.loading,
      data: substate.data.filter((article, index) => index < 5),
    }),
  )

export default makeSelectArticles
export { selectArticlesDomain, getLatestArticles }
