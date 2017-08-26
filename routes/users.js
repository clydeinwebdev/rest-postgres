var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




// const { Client } = require('pg');
// const client = new Client({
//   user: 'acnsxmavspshiy',
//   host: 'ec2-23-21-227-73.compute-1.amazonaws.com',
//   database: 'dda14evojtovdq',
//   password: '4a14de9f2a61e21e0f785a946c2490f16041a991093d407223851ecad66024ec',
//   port: 5432,
// });

// router.get('/user', function(req, res, next) {
// 	res.send('test');
	// client.connect();
	// client.query('select * from users', (err, res) => {
	//   	console.log(err, res);
	// 	res.send(JSON.stringify(res));
	//   	client.end();
	// });
// });

module.exports = router;
