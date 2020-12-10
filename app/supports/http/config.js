import axios from 'axios'
import { HTTP_RESPONSE } from '../utils/context'

const clientApi = axios.create({
  baseURL: process.env.BASE_URL
})

// interceptors request
clientApi.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// interceptors response
clientApi.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === HTTP_RESPONSE.UNAUTHORIZED) { }
  return Promise.reject(error)
})

export default clientApi
