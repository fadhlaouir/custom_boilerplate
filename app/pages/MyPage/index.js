/**
 *
 * MyPage
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import { useInjectReducer } from 'utils/injectReducer'
import makeSelectMyPage from '../../shared/redux/mypage/selectors'
import reducer from '../../shared/redux/mypage/reducer'

import * as actions from '../../shared/redux/mypage/actions'

import saga from '../../shared/redux/mypage/saga'

import MyPage from './MyPage'

const MyPageIndex = props => {
  useInjectReducer({ key: 'myPage', reducer })

  return <MyPage {...props} />
}

const mapStateToProps = createStructuredSelector({
  myPage: makeSelectMyPage(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'myPage', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
  withSaga,
)(MyPageIndex)
