/**
 *
 * Layout
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import TopBar from './TopBar'
// shut down liveshare temporary
// import LiveShare from '../../shared/components/LiveShare'
import './layout.scss'

const Layout = ({ children }) => (
  <div className="layout">
    {/* shut down liveshare temporary */}
    {/* <LiveShare /> */}
    <TopBar />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Layout
