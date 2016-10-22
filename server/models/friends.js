console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
var FriendSchema = new mongoose.Schema({
   first_name:  { type: String, required: true, minlength: 3},
   last_name:  { type: String, required: true, minlength: 3},
   date: { type: Date, default: Date.now },
   created_date: { type: Date, default: Date.now }
 }, {timestamps: true });


var Friend = mongoose.model('Friend', FriendSchema); // We are setting this Schema in our Models as 'Friend'
var friend = new Friend({ first_name: 'John', last_name: 'Lina', date: Date.now, created_date: Date.now });
friend.save(function (err) {
  if (err) // ...
  console.log('something wrong with saving');
});
