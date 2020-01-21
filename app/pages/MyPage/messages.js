/*
 * MyPage Messages
 *
 * This contains all the text for the MyPage page.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.pages.MyPage'

export default defineMessages({
  helmetDescription: {
    id: `${scope}.helmetDescription`,
    defaultMessage: 'Description of MyPage',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'MyPage',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MyPage page!',
  },
})
