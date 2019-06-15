const express = require('express');
const router = express.Router();
const heroe = require('../controller/heroes.controller');

router.get('/superheroes', heroe.getHeroes);
router.get('/superheroes/:id', heroe.getHeroe);
router.post('/superheroes', heroe.createHeroe);
router.put('/superheroes', heroe.edithHeroe);
router.delete('/superheroes', heroe.deleteHeroe);

module.exports = router;