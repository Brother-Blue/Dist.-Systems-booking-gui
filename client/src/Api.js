// I do not know if we actually need this, but I am assuming we do...

import axios from 'axios'

export const Api = axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT || 'http://localhost:3000/api'
  })
  