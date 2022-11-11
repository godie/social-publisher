const router = require('express').Router();

const helloRoute = require('./hello');
const facebookRoute = require('./facebook');

router.use('/hello', helloRoute);
router.use('/facebook', facebookRoute);

module.exports = router;