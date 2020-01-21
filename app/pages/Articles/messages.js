/*
 * Articles Messages
 *
 * This contains all the text for the Articles container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.Articles'

export default defineMessages({
  introduction: {
    id: `${scope}.introduction`,
    defaultMessage: 'Hi, click on the button to display all the Articles',
  },
  refresh: {
    id: `${scope}.refresh`,
    defaultMessage: 'Refresh',
  },
  articlesList: {
    id: `${scope}.articlesList`,
    defaultMessage: 'Articles list',
  },
  helmetDescription: {
    id: `${scope}.helmetDescription`,
    defaultMessage: 'Description of Project Details',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Project Details',
  },
})
