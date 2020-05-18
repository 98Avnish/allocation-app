const express = require('express');
const router = express.Router();

let user = 'User';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', user: user});
});

router.post('/', function (request, response) {
  console.log(request.body);
  user = request.body.name;
  response.redirect('/');
});

module.exports = router;
