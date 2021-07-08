const db = require('../../database/index');

module.exports = {
  getHome: (callback, homeId) => {
    const queryString = [`SELECT * FROM homes, address WHERE homes.id = '${homeId}'`, `SELECT * FROM photos WHERE home_id = '${homeId}'`];
    db.query(queryString.join(';'), (err, data) => {
      if (err) { callback(err); }
      const shapedData = data[0].rows[0];
      shapedData.photos = data[1].rows;
      callback(null, shapedData);
    });
  },

  getBids: (callback, homeId) => {
    const queryString = `SELECT * FROM bids WHERE home_id = ${homeId} ORDER BY max_bid DESC`;
    db.query(queryString, (err, res) => {
      if (err) { callback(err); }
      callback(null, res.rows);
    });
  },
};
