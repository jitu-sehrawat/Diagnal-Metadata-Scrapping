const expect = require('expect');
const request = require('supertest');

const { app } = require('../index');

describe(`Testing metaDataScrapper module`, () => {
  describe(`POST /ogp`, () => {
    it(`should return scrapped OG parameters like title, description and image.`, (done) => {
      let body = {
        "url": "https://diagnal.com/"
      };

      let expectedTitle = `Home - DIAGNAL`;
      let expectedDescription = `DIAGNAL provides technology platforms and solutions for innovative digital media companies to reach, engage and monetize user communities`;
      let expectedImages = [
        "https://secureservercdn.net/45.40.155.175/0ca.3b4.myftpupload.com/wp-content/uploads/2015/04/black_yellow.png?time=1604011405"
      ];

      request(app)
        .post(`/scrapper/ogp`)
        .send(body)
        .expect(200)
        .expect((res) => {
          expect(res.body.title).toBe(expectedTitle);
          expect(res.body.description).toBe(expectedDescription);
          expect(res.body.images).toEqual(expect.arrayContaining(expectedImages));
        })
        .end(done);
    });

    it(`should return scrapped OG parameters with all the images.`, (done) => {
      let body = {
        "url": "https://www.amazon.in/Apple-iPhone-Black-32GB-Storage/dp/B01LZKSVRB/"
      };

      let expectedImages = ["https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936311_.png","https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Diw_20/GW/swm_en._CB418536549_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png","https://images-na.ssl-images-amazon.com/images/I/31VlsPDOLxL._SX38_SY50_CR,0,0,38,50_.jpg","https://images-na.ssl-images-amazon.com/images/I/51ZT7z7hajL._SX38_SY50_CR,0,0,38,50_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg","https://images-na.ssl-images-amazon.com/images/I/31nXiZ5mv4L._SX38_SY50_CR,0,0,38,50_.jpg","https://images-na.ssl-images-amazon.com/images/I/213D3W73d1L._SX38_SY50_CR,0,0,38,50_.jpg","https://images-na.ssl-images-amazon.com/images/I/31gItnxp9aL._SX38_SY50_CR,0,0,38,50_.jpg","https://images-na.ssl-images-amazon.com/images/I/31XZokhwMeL._SX38_SY50_CR,0,0,38,50_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif","https://images-na.ssl-images-amazon.com/images/I/11XDafXNEwL._SS36_.jpg","https://images-na.ssl-images-amazon.com/images/I/11fP5l0DvYL._SS36_.jpg","https://images-na.ssl-images-amazon.com/images/I/11yQUEqRxvL._SS36_.jpg","https://images-na.ssl-images-amazon.com/images/I/11k67bKmvhL._SS36_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img15/rcx-events/test/HQP_VQL2._CB485935692_.png","https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/iPhone/whiteboxforapplehqp._CB458216615_.png","https://images-eu.ssl-images-amazon.com/images/I/41D9NDiSzjL._AC_UL115_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71Me%2BkBDRNL._AC_UL115_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71PD1Lz57gL._AC_UL115_.jpg","https://images-eu.ssl-images-amazon.com/images/I/51MmoFoNuoL._AC_UL160_SR117,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/51kGDXeFZKL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71aqNzEqj0L._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/710weRkP-nL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71zb0UaK0PL._AC_UL160_SR86,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/61d-phh4GfL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71Me%2BkBDRNL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71PD1Lz57gL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71%2BCWf-r73L._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/61uuaxn1W4L._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/61VWs6Nh4uL._AC_UL160_SR116,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/61Hrpg4-84L._AC_UL160_SR160,160_.jpg","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-eu.ssl-images-amazon.com/images/I/41DvAKt7CaL._AC_UL160_SR94,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/51tnWyoul3L._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/61-4mHT-mYL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/31vWP0YONmL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/61DTnVNR7pL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/71IHjrw1wVL._AC_UL160_SR128,160_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/ui/loadIndicators/loadIndicator-large._CB485943925_.gif","https://images-na.ssl-images-amazon.com/images/I/61sj2oulX5L._CR0,204,1224,1224_UX175.jpg","https://images-na.ssl-images-amazon.com/images/I/7103uFyt2jL._CR0,204,1224,1224_UX175.jpg","https://images-na.ssl-images-amazon.com/images/I/71BdFoE1ZqL._CR0,204,1224,1224_UX175.jpg","https://images-na.ssl-images-amazon.com/images/I/71JSSEa4InL._CR0,204,1224,1224_UX175.jpg","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif","https://images-eu.ssl-images-amazon.com/images/G/31/personalization/ybh/loading-4x-gray._CB485916689_.gif"];

      request(app)
        .post(`/scrapper/ogp`)
        .send(body)
        .expect(200)
        .expect((res) => {
          expect(res.body.images.length).toEqual(expectedImages.length);
        })
        .end(done);
    });


    it(`should return proper error message if "url" is missing.`, (done) => {
      let body = {
        "url": ""
      };

      let expectedErrorResponse = {
        "message": "URL is Mandatory.",
        "code": 404,
        "success": false
      };

      request(app)
        .post(`/scrapper/ogp`)
        .send(body)
        .expect(200)
        .expect((res) => {
          expect(res.body).toMatchObject(expectedErrorResponse)
        })
        .end(done);
    });
  });
});