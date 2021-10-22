import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  //console.log('service: object ', object)
  const response = await axios.post(baseUrl, object)
  //console.log('service: response ', response)
  return response.data
}

const updateAnecdote = async (content) => {
  const response = await axios.put(`${baseUrl}/${content.id}`, content)
  return response.data
}

const anecdotes = {
  getAll,
  createNew,
  updateAnecdote
}

export default anecdotes