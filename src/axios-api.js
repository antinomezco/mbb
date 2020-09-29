import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'https://antinomy.pythonanywhere.com',
    timeout: 1000,
    headers: {
        "Content-type": "application/json"
      }
})

export {getAPI}