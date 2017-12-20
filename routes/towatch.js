const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const ToWatch = require('../models/towatch');

// To Watch list
router.post('/towatch', (req, res, next) => {
  //res.send('TOWATCH');
  let newTW = new ToWatch({
    //filmName: req.body.data
    filmName: req.body.filmName,
    seen: false
  });

  ToWatch.addToWatch(newTW, (err, toWatch) => {
    if(err){
      res.json({success: false, msg:'Failed to enter this item'});
    } else {
      res.json({success: true, msg: 'Item added !'});
    }
  });
});

// To see
router.post('seetowatch', (req, res, next) =>{
  const filmName = req.body.filmName;

  User.getFilmByName(filmName, (err, film) => {
      if(err) throw err;
      if(!film){
          return res.json({success: false, msg: 'Filmnot found'});
      }
    });
});


router.get('/getlist', function(req, res) {
        // use mongoose to get all todos in the database
        ToWatch.find(function(err, towatch) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
            res.json(towatch); // return all todos in JSON format
        });
    });

router.get('/deletefilm/:id', function(req, res) {
  let filmid = req.body;

  const test = ToWatch.findOne(req.body._id);

  ToWatch.delete(filmid, (err, toWatch) => {
    if(err){
      res.json({success: false, msg:'Failed to enter this item'});
    } else {
      res.json({success: true, msg: 'Item deleted ! test'+filmid});
    }
  });
});

router.delete('/deletefilm/:id', function( req, res, next) {
    console.log(req.params.id);
    ToWatch.find({ _id: req.params.id}, function(err) {
      if(err) {
        req.status(504);
        req.end();
        console.log(err);
      }
    }).remove(function (err) {
      console.log(err);
      if (err) {
        res.end(err);
      } else {
        res.end();
      }
    });
  });

  router.post('/modifyfilm/:id', function( req, res, next) {
      console.log(req.params.id);
      ToWatch.find({ _id: req.params.id}, function(err) {
        if(err) {
          req.status(504);
          req.end();
          console.log(err);
        }
      }).remove(function (err) {
        console.log(err);
        if (err) {
          res.end(err);
        } else {
          res.end();
        }
      });
    });

module.exports = router;
