var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('API Documentation');
});


var promise = require('bluebird');
var options = {
	promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://acnsxmavspshiy:4a14de9f2a61e21e0f785a946c2490f16041a991093d407223851ecad66024ec@ec2-23-21-227-73.compute-1.amazonaws.com:5432/dda14evojtovdq?ssl=true';
var db = pgp(connectionString);

router.get('/users', function(req, res, next){
	db.any('select * from users')
	.then(function(data){
		res.status(200)
			.json({
				status: 'success',
				data: data,
				message: 'Retrieved all users'
			});
	})
	.catch(function(err){
		return next(err);
	});
});

router.get('/users/:id', function(req, res, next){
	var userid = parseInt(req.params.id);
	db.one('select * from users where id = $1', userid)
	.then(function(data){
		res.status(200)
			.json({
				status: 'success',
				data: data,
				message: 'Retrieved one user'
			});
	})
	.catch(function(err){
		return next(err);
	});
});

/*
const { Pool } = require('pg');
const pool = new Pool({
  user: 'acnsxmavspshiy',
  password: '4a14de9f2a61e21e0f785a946c2490f16041a991093d407223851ecad66024ec',
  database: 'dda14evojtovdq',
  port: 5432,
  host: 'ec2-23-21-227-73.compute-1.amazonaws.com',
  ssl: true
});

router.get('/user', function(req, res, next) {
	// res.send('asdfasdfa');
	// res.send('test');
	pool.connect();
	pool.query('select * from users', (err, res) => {
	  	console.log(err, res);
	  	// res.set('Content-Type', 'application/json');
    	res.format({json:function(){
    		res.send({message: 'hey'});
    	}});
		// res.send(JSON.stringify(res));
	  	pool.end();
	});
});

*/
module.exports = router;
