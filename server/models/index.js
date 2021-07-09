const db = require('../../database/index');

module.exports = {

  login: (callback, credentials) => {
    const queryString = `SELECT * FROM users WHERE username = '${credentials.username}'`;
    db.query(queryString, (err, res) => {
      if (err) { callback(err); }
      const data = res.rows[0] || {};
      const shapedData = { userToken: data.token, userId: data.id };
      callback(null, shapedData);
    });
  },

  fetchCurrentBid: (callback, homeId) => {
    const queryString = `SELECT * FROM bids WHERE home_id = '${homeId}' ORDER BY max_bid DESC`;
    db.query(queryString, (err, res) => {
      if (err) { callback(err); }
      callback(null, (res.rows[1].max_bid + 10000));
    });
  },

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
    const queryString = `SELECT * FROM bids WHERE home_id = ${homeId} ORDER BY max_bid DESC OFFSET 1`;
    db.query(queryString, (err, res) => {
      if (err) { callback(err); }
      callback(null, res.rows);
    });
  },

  bid: (callback, homeId, userId, bid) => {
    const queryString = `INSERT INTO bids VALUES (default, '${homeId}', ${bid}, ${userId})
      ON CONFLICT (user_id)
      DO UPDATE SET max_bid = ${bid}`;
    db.query(queryString, (err) => {
      if (err) { callback(err); }
      callback(null);
    });
  },

  checkForWin: (callback, homeId, userId) => {
    const queryString = [`SELECT * FROM bids WHERE home_id = ${homeId} ORDER BY max_bid DESC`, `SELECT * from BIDS WHERE user_id = '${userId}'`];
    db.query(queryString.join(';'), (err, res) => {
      if (err) { callback(err); }
      const checkForBidder = res[1].rows[0] || { id: false };
      if (res[0].rows[0].user_id.toString() === userId) {
        callback(null, true);
      } else if (!checkForBidder.id) {
        callback(null, 'noBid');
      } else {
        callback(null, false);
      }
    });
  },
};
