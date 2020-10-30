const ogs = require('open-graph-scraper');
module.exports = { scrapMetaData };

async function scrapMetaData (req, res) {
  let customerError = {};
  try {
    // console.log('LOGING scrapMetaData');

    //
    // We can check the req obj for body or params value that we needs in this route before
    // proceeding down the code
    //
    
    if (!req.body.url) {
      customerError.message = `URL is Mandatory.`;
      customerError.code = 404;
      customerError.success = false;
      throw customerError;
    }

    const options = { url: req.body.url };    
    let {error, result, response} = await ogs(options);

    let customResponse = {
      "title": `${result.ogTitle}`,
      "description": `${result.ogDescription}`,
      "images": [...await getImages(result.ogImage)]
    }

    res.send(customResponse);
  } catch (error) {
    res.send(error);
  }
}

async function getImages (ogImages) {
  let images = [];

    if (Array.isArray(ogImages)) {
      images = ogImages.map((ogImage) => ogImage.url)
    } else {
      images = ogImages.hasOwnProperty('url') ? [ogImages.url] : []
    }

    return images
}
