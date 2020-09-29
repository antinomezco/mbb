import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'http://antinomy.pythonanywhere.com',
    timeout: 1000,
    headers: {
        "Content-type": "application/json"
      }
})

export {getAPI}