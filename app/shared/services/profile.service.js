import axios from 'axios'

export const getSettings = async () => {
  const result = await axios.post('/_settings')
  return result.data
}
