const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Film = require('../models/film');

// AddFilm
router.post('/addfilm', (req, res, next) => {
  let newFilm = new Film({
    name: req.body.name,
    director: req.body.director,
    year: req.body.year,
    description: req.body.description
  });

  Film.addFilm(newFilm, (err, film) => {
    if(err){
      res.json({success: false, msg:'Failed to enter this item'});
    } else {
      res.json({success: true, msg: 'Item added !'});
    }
  });
});

// getFilm
//router.get('/getfilms', (req, res, next) => {
//  res.json({film: req.film});
//});


router.get('/getfilms', function(req, res) {
        // use mongoose to get all todos in the database
        Film.find(function(err, films) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            res.json(films); // return all todos in JSON format
        });
    });


module.exports = router;
