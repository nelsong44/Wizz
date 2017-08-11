//server-side restroom route
//requires
var express = require('express');
var router = express.Router();
//require the model inside the route it will be used in
var Restroom = require('../models/restroom.schema.js');

//request to get all restrooms from db
router.get('/', function(req, res) {
  Restroom.find({}, function(err, data) { //find * (same as in mongoose)
    if(err) {
      console.log('find error: ', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      console.log('All restrooms from db: ', data);
    }
  });//end find
});//end get

//request to store a new Restroom in the db
router.post('/', function(req, res) {
  console.log('adding a new restroom in db: ', req.body);

  var addRestroom = new Restroom(req.body);
  addRestroom.save(function(err, data) {
    console.log('saved restroom: ', data); //restroom object saved in db
    if(err) {
      console.log('error saving to db: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }//end if
  });//end save
});//end post

//request to update a Restroom from the db after editing
router.put('/:id', function(req, res) {
  console.log('edit restroom with id: ',  req.params.id);
  // Restroom.findByIdAndUpdate(
  //   { _id: req.params.id },
  //   function(err, data) {
  //     if(err) {
  //       console.log('save error: ', err);
  //       res.sendStatus(500);
  //     } else {
  //       res.sendStatus(200);
  //     }//end if
  //   }//end function
  // );//end findByIdAndUpdate
});//end update

//export the router
module.exports = router;
