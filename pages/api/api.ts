import axios from 'axios'

const api = axios.create({
    baseURL: 'https://free-nba.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
})

export default api