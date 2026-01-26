import Axios from 'axios'

const api = Axios.create({
  baseURL: `${process.env.API_URL}/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
