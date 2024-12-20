const express = require('express');
const startWorkService = require('./services/startWorkService');

const router = express.Router();


router.get('/starwars/characters', async (req, res) => {
    try {
        const characters = await startWorkService.getAllCharacters();
        res.json(characters);
    } catch (error) {
        res.status(500).json({
            error: error.message,
            timestamp: new Date().toISOString()
        })
    }
});

module.exports = router;
