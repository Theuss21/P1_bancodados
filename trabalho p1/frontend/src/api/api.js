import axios from 'axios'

const API_URL = 'http://localhost:8000'

export const getUsers = () => axios.get(\`\${API_URL}/users\`)
export const createUser = (user) => axios.post(\`\${API_URL}/users\`, user)
