const express = require('express');
const routes = require('./routes');
require('dotenv').config()

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

//TODO:
// if sequelize SYNC is needed here...
// CURRENTLY, SYNC appears to be part of ASYNC/AWAIT function in ./seeds/index.js
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});