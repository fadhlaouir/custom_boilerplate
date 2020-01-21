/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/**
 *
 * Menu
 *
 */

import React, { memo } from 'react'
import { X_IDENTITY_LOGOUT_URL } from 'shared/constants'
import { Menu as MenuOfAnt, Dropdown } from 'antd'
import useWindowSize from '@rehooks/window-size'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import routes from 'shared/routes'
import messages from './messages'
import './menu.scss'

const logoutCallback = () => {
  localStorage.removeItem('token')
  window.location.href = X_IDENTITY_LOGOUT_URL()
}
const menuItemsMobile = (
  <MenuOfAnt onClick={e => e}>
    <MenuOfAnt.Item key="1" onClick={logoutCallback}>
      <FormattedMessage {...messages.logout} />
    </MenuOfAnt.Item>

    <MenuOfAnt.Item key="2">
      <Link to={routes.DASHBOARD.path}>
        <FormattedMessage {...messages.dashboard} />
      </Link>
    </MenuOfAnt.Item>
  </MenuOfAnt>
)
const menuItems = (
  <MenuOfAnt>
    <MenuOfAnt.Item key="1" onClick={logoutCallback}>
      <FormattedMessage {...messages.logout} />
    </MenuOfAnt.Item>
  </MenuOfAnt>
)

function Menu() {
  const windowSize = useWindowSize()
  return (
    <div className="titan-menu global-flex-horizontal-end">
      <Dropdown
        overlay={windowSize.innerWidth < 992 ? menuItemsMobile : menuItems}
        overlayStyle={{ width: '110px' }}
        trigger={['click']}
        placement="bottomRight"
      >
        <img
          src={require('../../../../assets/images/TopBar/cog.png')}
          alt="cog"
        />
      </Dropdown>
    </div>
  )
}

export default memo(Menu)
