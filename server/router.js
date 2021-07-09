const router = require('express').Router();
const controller = require('./controllers/index');

router.get('/homes/:id/currentBid', controller.fetchCurrentBid);
router.get('/homes/:id', controller.getHome);
router.get('/homes/:id/bids', controller.getBids);
module.exports = router;
