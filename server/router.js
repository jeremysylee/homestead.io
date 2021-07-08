const router = require('express').Router();
const controller = require('./controllers/index.js');

router.get('/homes/:id', controller.getHome);

module.exports = router;