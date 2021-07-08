const models = require('../models');

const controllers = {
  getHome: (req, res) => {
    const homeId = req.params.id;
    models.getHome((err, data) => {
      if (err) { res.status(400).send(err); }
      res.status(200).send(data);
    }, homeId);
  },
};

module.exports = controllers;
