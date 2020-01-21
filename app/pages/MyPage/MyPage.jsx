/**
 *
 * MyPage
 *
 */

import React from 'react'

// import PropTypes from 'prop-types';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Helmet } from 'react-helmet'

import messages from './messages'

import './my-page.scss'

const MyPage = ({ intl }) => {
  const helmetMessages = {
    helmetTitle: intl.formatMessage({
      ...messages.helmetTitle,
    }),
    helmetDescription: intl.formatMessage({
      ...messages.helmetDescription,
    }),
  }
  return (
    <div className="my-page">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta name="description" content={helmetMessages.helmetDescription} />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  )
}

MyPage.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(MyPage)
