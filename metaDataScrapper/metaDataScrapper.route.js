const express = require('express');
const router = express.Router();

const metaDataScrapperController = require('./metaDataScrapper.controller');

router.post('/ogp', metaDataScrapperController.scrapMetaData);
// Add more routes here.
// router.get('/ogp', metaDataScrapperController.scrapMetaData);
// router.get('/ogp', metaDataScrapperController.scrapMetaData);
// router.get('/ogp', metaDataScrapperController.scrapMetaData);
// router.get('/ogp', metaDataScrapperController.scrapMetaData);

module.exports = router;
