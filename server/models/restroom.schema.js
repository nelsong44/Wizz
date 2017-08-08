//requires
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create the listing schema
var restroomSchema = new Schema({
  //set data type of each specific property - for data integrity - ensure user input matches data requirements
  venue: {type: String, required: true},
  street: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zipcode: {type: Number, required: true},
  rating: {type: Number, default: 0, required: true},
  unisex: {type: Boolean, default: false, required: true},
  accessible: {type: Boolean, default: false, required: true},
  changingTable: {type: Boolean, default: false, required: true},
  comment: {type: String, default: 'Be the first to comment!', required: false}
});//end restroomSchema

//assign the schema to a var
var Restroom = mongoose.model('Restroom', restroomSchema);

//export the schema to use in application
module.exports = Restroom;
