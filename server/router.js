const router = require('express').Router();
const controller = require('./controllers/index');

router.get('/homes/:id', controller.getHome);

module.exports = router;
