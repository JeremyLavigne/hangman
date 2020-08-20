import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

const getScores = async (languageName) => {
  const request = axios.get(`${baseUrl}${languageName}`)
  const response = await request
    return response.data
}

const addScore = async (languageName, newObject) => {
    const request = axios.post(`${baseUrl}${languageName}`, newObject)
    const response = await request
        return response.data
}

/*
const update = async  (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    const response = await request
        return response.data
}

const deletePerson = async  (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request
        return response.data
}
  */
export default { getScores, addScore }