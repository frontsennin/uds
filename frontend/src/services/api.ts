import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export const getCharacters = async () => {
    const response = await api.get('/starwars/characters');
    return response.data;
};

export default api;
