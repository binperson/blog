import axios from 'axios'
import { createError } from './util'
const blogAPI = `/proxyPrefix/api/post`

const aboutAPI = `/proxyPrefix/api/post/57dbe47c2993f70dc6d6b12c`

const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      console.log('---------------', resp)
      if (resp.status === 401) {
        reject(createError(401, 'need auth'))
      }
    })
  })
}

export default {
  fetchAbout () {
    return handleRequest(request.get(aboutAPI))
  },
  fetchBlogByPage (page = 0, perPage = 10) {
    let api = `${blogAPI}?limit=${perPage}&skip=${page * perPage}`
    return handleRequest(request.get(api))
  }
}
