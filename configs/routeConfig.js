// const featureOneRoute = require('../featureOne/featureOne.route');
const metaDataScrapperRoute = require('../metaDataScrapper/metaDataScrapper.route');

module.exports = (app) => {
  // app.use('/myApp/api/v1/featureOneRoutes', featureOneRoute);
  app.use('/scrapper', metaDataScrapperRoute);
};
