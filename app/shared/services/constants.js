// we implement here just an example of getAll
const article = {
  getAll: '?country=us&apiKey=c39a26d9c12f48dba2a5c00e35684ecc',
  get: id => `<REST-OF-THE-URL>${id}`,
  postArticle: `<REST-OF-THE-URL>`,
  putArticle: id => `<REST-OF-THE-URL>/${id}`,
  deleteArticle: id => `<REST-OF-THE-URL>/${id}`,
}

export default {
  /* @todo uncomment the line below to enable dynamic endpoint */
  // baseApiUrl: () => window.baseApiUrl,

  /* @todo remove the line below if dynamic endpoint is enabled */
  baseApiUrl: () => 'https://newsapi.org/v2/top-headlines',
  article,
}
