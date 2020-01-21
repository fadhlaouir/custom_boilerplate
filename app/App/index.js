/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Spin } from 'antd'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import { useInjectReducer } from 'utils/injectReducer'
import {
  makeSelectRoles,
  makeSelectLoading,
  makeSelectURLS,
} from 'shared/redux/profile/selectors'
import reducer from 'shared/redux/profile/reducer'
import * as actions from 'shared/redux/profile/actions'
import saga from 'shared/redux/profile/saga'
import * as constants from 'shared/constants'
import FourOfFour from 'pages/FourOfFour'
import { isEmpty } from 'lodash'
import { setAccessTokenIfDefined, getRoles } from '../shared/utils/access-token'
import { registerPushNotification } from '../shared/utils/onesignal'
import Layout from './Layout'
import routes from '../shared/routes'
import './global-styles.scss'

function App({ setRoles, roles, getSettings, loading, URLS }) {
  useInjectReducer({ key: 'profile', reducer })
  useEffect(() => {
    getSettings()
  }, [])
  setAccessTokenIfDefined()
  useEffect(() => {
    if (
      URLS !== undefined &&
      URLS.GATEWAY_URL !== undefined &&
      URLS.IDENTITY_URL !== undefined
    ) {
      /* @todo uncomment these lines to enable oauth  */

      // const token = localStorage.getItem('token')
      // if (!token) {
      //   window.location = `${constants.X_IDENTITY_URL()}?redirectUrl=${
      //     window.location.href
      //   }`
      // }
      // const rolesFromToken = getRoles()

      /* @todo remove the line below if oauth is enabled  */
      const rolesFromToken = 'ADMIN'

      if (JSON.stringify(roles) !== JSON.stringify(rolesFromToken)) {
        setRoles(rolesFromToken)
      }
      registerPushNotification()
    }
  }, [URLS])

  if (!isEmpty(window.baseApiUrl))
    return (
      <Spin spinning={loading}>
        <div>
          <Layout>
            {roles.length ? (
              <Switch>
                <Route
                  exact
                  path={routes.ROOT.path}
                  render={() => <Redirect to={routes.DASHBOARD.path} />}
                />
                <Route
                  exact
                  path={routes.DASHBOARD.path}
                  render={props => (
                    <routes.DASHBOARD.component roles={roles} {...props} />
                  )}
                />

                <Route component={FourOfFour} />
              </Switch>
            ) : (
              <div className="global-loading-spinner">
                <Spin size="large" />
              </div>
            )}
          </Layout>
        </div>
      </Spin>
    )
  return <p>Loading Endpoint</p>
}
App.propTypes = {
  roles: PropTypes.array,
  setRoles: PropTypes.func.isRequired,
  getSettings: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  URLS: PropTypes.any,
}

const mapStateToProps = createStructuredSelector({
  roles: makeSelectRoles(),
  loading: makeSelectLoading(),
  URLS: makeSelectURLS(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'profile', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
  withSaga,
)(App)
