const models = require('../models');

const controllers = {

  login: (req, res) => {
    const { credentials } = req.body;
    models.login((err, data) => {
      if (err) { res.status(404).send(err); }
      res.status(200).send(data);
    }, credentials);
  },

  fetchCurrentBid: (req, res) => {
    const homeId = req.params.id;
    models.fetchCurrentBid((err, data) => {
      if (err) { res.status(400).send(err); }
      res.status(200).send(data.toString());
    }, homeId);
  },

  getHome: (req, res) => {
    const homeId = req.params.id;
    models.getHome((err, data) => {
      if (err) { res.status(400).send(err); }
      res.status(200).send(data);
    }, homeId);
  },

  getBids: (req, res) => {
    const homeId = req.params.id;
    models.getBids((err, data) => {
      if (err) { res.status(400).send(err); }
      res.status(200).send(data);
    }, homeId);
  },

  bid: (req, res) => {
    const { bid } = req.query;
    const { userId } = req.query;
    const homeId = req.params.id;
    models.bid((err) => {
      if (err) { res.status(400).send(err); }
      res.status(200).send('bid added');
    }, homeId, userId, bid);
  },
};

module.exports = controllers;
