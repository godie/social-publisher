const router = require('express').Router();

router.route('/').get((req,res) => {
  msg = 'Hello ' + (req.query.name || 'World') + ' from get request';
  res.json(msg);
});


router.route('/:lang').get((res,req) => {
});

router.route('/').post((req,res) => {
  let result = req.body.a + req.body.b;
  res.json(result);
})

module.exports = router;