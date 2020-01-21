import axios from 'axios'
import { requestHeader } from 'shared/utils/requestHeader'
import URL from './constants'

export const fetchArticles = async () => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.article.getAll,
    requestHeader(),
  )
  return result.data
}
