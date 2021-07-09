const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
