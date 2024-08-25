import axios from 'axios'

const baseUrl = 'http://192.168.0.6:3000/api'

const Axios = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
})

export default Axios
