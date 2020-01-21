/**
 *
 * Articles
 *
 */

import React, { useEffect } from 'react'

// import PropTypes from 'prop-types';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { Helmet } from 'react-helmet'

import { Button, List, Spin } from 'antd'

import './articles.scss'
import { isEmpty } from 'lodash'
import { PropTypes } from 'prop-types'
import messages from './messages'

const Articles = ({ articles, fetchArticles, intl }) => {
  useEffect(() => {
    fetchArticles()
  }, [])
  const helmetMessages = {
    helmetTitle: intl.formatMessage({
      ...messages.helmetTitle,
    }),
    helmetDescription: intl.formatMessage({
      ...messages.helmetDescription,
    }),
  }
  return (
    <div className="articles">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta name="description" content={helmetMessages.helmetDescription} />
      </Helmet>
      <FormattedMessage {...messages.introduction} />

      <div className="buttons">
        <Button onClick={fetchArticles}>
          <FormattedMessage {...messages.refresh} />
        </Button>
      </div>
      <div className="articles-list">
        <Spin spinning={articles.loading}>
          {!isEmpty(articles.data) && (
            <List
              header={
                <div className="articles-list-header">
                  <FormattedMessage {...messages.articlesList} />
                </div>
              }
              bordered
              dataSource={articles.data.map(article => article.title)}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          )}
        </Spin>
      </div>
    </div>
  )
}

Articles.propTypes = {
  articles: PropTypes.object.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Articles)
