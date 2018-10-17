var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:id', function(req, res, next) {
	request('https://api.mercadolibre.com/items/'+ req.params.id, function (error, response, body) {
	  item=JSON.parse(body);
	   res.json(item);
	});
});
router.get('/Desc/:id', function(req, res, next) {
	request('https://api.mercadolibre.com/items/'+ req.params.id+'/description', function (error, response, body) {
		item=JSON.parse(body);
		res.json(item);
	});
});
router.get('/Cat/:id', function(req, res, next) {
	request('https://api.mercadolibre.com/categories/'+ req.params.id, function (error, response, body) {
		item=JSON.parse(body);
		res.json(item);
	});
});


module.exports = router;

