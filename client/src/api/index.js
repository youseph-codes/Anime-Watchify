import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertAnime = payload => api.post('/anime', payload)
export const getAllAnime = () => api.get('/anime')
export const updateAnimeById = (id, payload) => api.put('/anime/${id}', payload)
export const deleteAnimeById = id => api.delete('/anime/${id}')
export const getAnimeById = id => api.get('/anime/${id}')

const apis = {
    insertAnime,
    getAllAnime,
    updateAnimeById,
    deleteAnimeById,
    getAnimeById
}

export default apis