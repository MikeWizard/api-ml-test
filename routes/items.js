var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:search', function(req, res, next) {

request('https://api.mercadolibre.com/sites/MLA/search?q='+ req.params.search, function (error, response, body) {
  items=JSON.parse(body);
	res.json(items.results);
});
});

module.exports = router;
