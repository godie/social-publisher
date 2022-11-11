const router = require('express').Router();
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working


const bizSdk = require('facebook-nodejs-business-sdk');

const Page = bizSdk.Page; 
const Photo = bizSdk.Photo;

const app_secret = 'd0789e6370dae4c1322536cd79c994e3';
const app_id = '824316838734059';
const showDebugingInfo = true; // Setting this to true shows more debugging info

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};


router.route('/photo').post((req, res) => {
  let user_token = req.get('fb_token');
  let pageId = req.body.page_id;
  let photoUrl =  req.body.photo_url;

  const api = bizSdk.FacebookAdsApi.init(user_token);

  if (showDebugingInfo) {
    api.setDebug(true);
  }
  let fields, params;
  fields = [];
  params = {
  'url' : photoUrl,
  'published' : 'false',
  'message' : 'This is a test value',
};
const photos = (new Page(pageId)).createFeed(
  fields,
  params
);

  logApiCallResult('photos api call complete.', photos);
  res.json(photos);

});

module.exports = router;