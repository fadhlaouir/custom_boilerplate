/**
 *
 * Articles
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import { useInjectReducer } from 'utils/injectReducer'
import { getLatestArticles } from '../../shared/redux/articles/selectors'
import reducer from '../../shared/redux/articles/reducer'

import * as actions from '../../shared/redux/articles/actions'

import saga from '../../shared/redux/articles/saga'

import Articles from './Articles'

const ArticlesIndex = props => {
  useInjectReducer({ key: 'articles', reducer })

  return <Articles {...props} />
}

const mapStateToProps = createStructuredSelector({
  articles: getLatestArticles(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'articles', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
  withSaga,
)(ArticlesIndex)
