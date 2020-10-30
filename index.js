// Loading configs to process.env object
require('custom-env').env(true, './configs/env');

const express = require('express');
const app = express();

// Express Middleware configs
const expressConfig = require('./configs/expressConfigs');
// Express Routes configs
const routeConfig = require('./configs/routeConfig');

expressConfig(app);
routeConfig(app);

const port = process.env.PORT;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = {
  app
};
