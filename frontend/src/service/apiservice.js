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

export const updateUser = async (id ,newInfo) => {
  try {
    const resp = await api.put(`/user/${id}`, newInfo)
    return resp.data
  } catch (e) {
    console.log(e)
  }
}

export const makeStock = async (id,stockInfo) => {
  try {
    const resp = await api.post(`/user/${id}/stock`, stockInfo)
    return resp.data
  } catch (e) {
    console.log(e)
  }
}

export const getStocks = async (id) => {
  try {
    const resp = await api.get(`/user/${id}/stocks`)
    return resp.data
  } catch (e) {
    console.log(e)
  }
}

export const getUser= async (id) =>{
  try {
    const resp = await api.get(`/user/${id}`)
    return resp.data
  } catch (e) {
    console.log(e)
  }
}
