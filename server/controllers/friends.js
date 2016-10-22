console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
    index: function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        Friend.find({}, function(err, friends) {
          if(err) {
            console.log('ERROR: '+err);
          } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully find friends!');
            //res.render('index', {mongooses: mongooses});
            //res.json({mongooses: mongooses});
            res.json(friends)
          }
        })
    },
    create: function(req, res) {
      console.log("UUUU: "+typeof(req.params));
      Friend.create(req.body, function (err, friend) {
          if (err) return console.log(err);
          return res.send(friend);
        });

      // var friend = new Friend({first_name: req.params.first_name, last_name: req.params.last_name,
      //               date: req.params.birthday});
      // friend.first_name = req.params.first_name;
      // friend.last_name = req.params.last_name;
      // friend.date = req.params.birthday;
      // console.log(friend.last_name);
      // // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
      // friend.save(function(err) {
      //   // if there is an error console.log that something went wrong!
      //   if(err) {
      //     console.log('something went wrong'+err);
      //   } else { // else console.log that we did well and then redirect to the root route
      //     console.log('successfully added a friend!');
      //     res.json(friend);
      //   }
      // })
    },
    delete: function(req, res) {
      Friend.remove({_id: req.params.id}, function(err, friends) {
        if(err) {
          console.log('ERROR: '+err);
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully remove friend!');
          console.log(friends);
          //res.redirect('/');
          res.json(friends);
        }
      })
    },
    show: function(req, res) {
      Friend.find({_id: req.params.id}, function(err, friend) {
        if(err) {
          console.log('ERROR: '+err);
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully find friend!');
          res.json(friend);
        }
      })
    },
    update: function(req, res){
        //your code here

        console.log("updating&&&"+req.params.id);
        console.log("updating&&&"+req.body.first_name);
        Friend.findOneAndUpdate({_id: req.params.id }, {first_name: req.body.first_name, last_name: req.body.last_name,  date: req.body.date},
          {upsert:true}, function(err, friend) {
            if(err) {
              console.log('ERROR: '+err);
            } else { // else console.log that we did well and then redirect to the root route
              console.log('successfully update friend!');
              res.json(friend);
              // res.redirect('/');
            }
          })
      }
    //   this.show = function(req,res){
    //     //your code here
    //     Friend.find({_id: req.params.id}, function(err, friend) {
    //       if(err) {
    //         console.log('ERROR: '+err);
    //       } else { // else console.log that we did well and then redirect to the root route
    //         console.log('successfully find friend!');
    //         res.json(friend);
    //         //res.json({placeholder:'index'});
    //       }
    //     })
    //     //res.json({placeholder:'show'});
    //   };
}



// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// var mongoose = require('mongoose');
// var Friend = mongoose.model('Friend');
//
// // Build out the methods in the friendsControllers below
// function FriendsController(){
//   this.index = function(req,res){
//     //your code here
//     // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
//     Friend.find({}, function(err, friends) {
//       if(err) {
//         console.log('ERROR: '+err);
//       } else { // else console.log that we did well and then redirect to the root route
//         console.log('successfully find friends!');
//         res.json(friends);
//         //res.json({friends: friends});
//         //res.json({placeholder: friends});
//         // res.json(mongooses);
//         //res.json({placeholder:'index'});
//       }
//     })
//     // res.json({placeholder:'index'});
//   };
//   this.create = function(req,res){
//     //your code here
//     console.log("****create: "+req);
//     //var friend = new Friend(req);
//     var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name,
//                               date: req.body.birthday, created_date: Date.now});
//       // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
//       friend.save(function(err) {
//         // if there is an error console.log that something went wrong!
//         if(err) {
//           console.log('something went wrong'+err);
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully added a friend!');
//           //res.json({friends: friends});
//           res.redirect('/');
//         }
//       })
//     //res.json({placeholder:'create'});
//   };
//   this.update = function(req,res){
//     //your code here
//     Friend.findOneAndUpdate({_id: req.params.id }, {first_name: req.params.first_name, last_name: req.params.last_name,  date: req.params.birthday},
//       {upsert:true}, function(err, friend) {
//         if(err) {
//           console.log('ERROR: '+err);
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully update friend!');
//           res.redirect('/');
//         }
//       })
//   };
//   this.delete = function(req,res){
//     //your code here
//     Friend.remove({_id: req.params.id}, function(err, friend) {
//         if(err) {
//           console.log('ERROR: '+err);
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully remove friend!');
//           res.redirect('/');
//         }
//       })
//     //res.json({placeholder:'delete'});
//   };
//   this.show = function(req,res){
//     //your code here
//     Friend.find({_id: req.params.id}, function(err, friend) {
//       if(err) {
//         console.log('ERROR: '+err);
//       } else { // else console.log that we did well and then redirect to the root route
//         console.log('successfully find friend!');
//         res.json(friend);
//         //res.json({placeholder:'index'});
//       }
//     })
//     //res.json({placeholder:'show'});
//   };
// }
// module.exports = new FriendsController(); // what does this export?
//


// var mongoose = require('mongoose');
// var Mongoose = mongoose.model('Mongoose');
// module.exports = {
//     home: function(req, res) {
//         // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
//         Mongoose.find({}, function(err, mongooses) {
//           if(err) {
//             console.log('ERROR: '+err);
//           } else { // else console.log that we did well and then redirect to the root route
//             console.log('successfully find mongooses!');
//             //res.render('index', {mongooses: mongooses});
//             //res.json({mongooses: mongooses});
//             res.json(mongooses)
//           }
//         })
//     },
//     new_mongoose: function(req, res) {
//       var mongoose = new Mongoose({name: req.params.name});
//       // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
//       mongoose.save(function(err) {
//         // if there is an error console.log that something went wrong!
//         if(err) {
//           console.log('something went wrong');
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully added a mongoose!');
//           res.redirect('/');
//         }
//       })
//     },
//     destroy: function(req, res) {
//       Mongoose.remove({name: req.params.name}, function(err, mongoose) {
//         if(err) {
//           console.log('ERROR: '+err);
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully remove mongoose!');
//           res.redirect('/');
//         }
//       })
//     },
//     find_mongoose: function(req, res) {
//       Mongoose.find({name: req.params.name}, function(err, mongoose) {
//         if(err) {
//           console.log('ERROR: '+err);
//         } else { // else console.log that we did well and then redirect to the root route
//           console.log('successfully find mongooses!');
//           res.json(mongoose)
//         }
//       })
//     }
// }
