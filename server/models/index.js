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
};
