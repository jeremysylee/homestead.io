const router = require('express').Router();
const controller = require('./controllers/index');

router.post('/login', controller.login);
router.get('/homes/:id/currentBid', controller.fetchCurrentBid);
router.get('/homes/:id', controller.getHome);
router.get('/homes/:id/bids', controller.getBids);
router.put('/homes/:id/bid', controller.bid);
module.exports = router;
