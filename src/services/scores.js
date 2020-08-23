import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

const getScores = async (languageName, easyMode) => {
  let request

  if (easyMode) {
    request = axios.get(`${baseUrl}${languageName}-easy`)
  } else {
    request = axios.get(`${baseUrl}${languageName}-normal`)
  }

  const response = await request
  return response.data
}

const addScore = async (languageName, newObject, easyMode) => {
  let request

  if (easyMode) {
    request = axios.post(`${baseUrl}${languageName}-easy`, newObject)
  } else {
    request = axios.post(`${baseUrl}${languageName}-normal`, newObject)
  }

  const response = await request
  return response.data

}


export default { getScores, addScore }