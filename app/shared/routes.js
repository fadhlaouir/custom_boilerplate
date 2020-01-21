import Articles from 'pages/Articles/Loadable'

export default {
  ROOT: {
    path: '/',
  },
  DASHBOARD: {
    path: '/dashboard',
    component: Articles,
  },
  // ARTICLE_DETAILS: {
  //   path: '/article-details/:articleId',
  //   linkPath: id => `/article-details/${id}`,
  //   component: Articles,
  // },
}
