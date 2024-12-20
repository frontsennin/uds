const axios = require('axios');

const BASE_URL = 'https://akabab.github.io/starwars-api/api';

class StartWorkService {
    async getAllCharacters() {
        try {
            const response = await axios.get(`${BASE_URL}/all.json`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch characters');
        }
    }
}

module.exports = new StartWorkService();
