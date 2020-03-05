import axios from 'axios'
const URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: `${URL}`
})

export const findUser = async (cred) => {
  try {
    const resp = await api.post('/login', cred)
    return resp.data
  } catch (e) {
    console.log(e)
  }
}

export const makeUser = async (regInfo) => {
  try {
    const resp = await api.post('/signup', regInfo)
    return resp.data
  } catch (e) {
    console.log(e)
  }
}
