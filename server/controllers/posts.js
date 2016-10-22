console.log('posts controller');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
module.exports = {
    posts: function(req, res) {
        Post.find({}).populate('comments').exec(function(error, posts) {
          if(error) {
               console.log('ERROR: '+err);
          } else {
            console.log('populate:'+posts);
            for ( i in posts ) {
                console.log(posts[i].comments);
                }
            return res.json({posts: posts});
          }
        /* `bands.members` is now an array of instances of `Person` */
        });
    },
    post: function(req, res) {
          console.log("POST DATA", req.body);
          // create a new User with the name and age corresponding to those from req.body
          var post= new Post({name: req.body.name, message: req.body.message, comments: [] });
          // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
          post.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong with saving a post');
                console.log('ERROR: '+err);
                return res.json({err: err });
                // Post.find({}).populate('comments').exec(function(error, posts) {
                //   if(error) {
                //     console.log('ERROR: '+err);
                //     return res.json({err: error });
                //   } else { // else console.log that we did well and then redirect to the root route
                //     console.log('error when save post !'+err);
                //     return res.json({posts: posts});
                //   }
                // })
              //res.render('error', {err: err});
             } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a post!');
                //return res.json({post: post});
                Post.find({}, function(err, posts) {
                    if(err) {
                        console.log('ERROR: '+err);
                        return res.json({err: error });
                    } else { // else console.log that we did well and then redirect to the root route
                         console.log('successfully find posts!');
                         return res.json({posts: posts});
                    }
               })
            }
          });
    },
    add_comment: function(req, res) {
        Post.findOne({_id: req.params.id}, function(err, post){
            // data from form on the front end
            var comment = new Comment({name: req.body.name, text: req.body.text});
            console.log("JJJJJ "+req.body.name + ", " + req.body.text)
            //  set the reference like this:
            comment._post = req.params._id;
            // now save both to the DB
            comment.save(function(err){
                if (err) {
                   console.log('something went wrong with saving a comment');
                    return res.json({err: err });

                    // Post.find({}).populate('comments').exec(function(error, posts) {
                    //   if(error) {
                    //     console.log('ERROR: '+error);
                    //     return res.json({err: error });
                    //   } else { // else console.log that we did well and then redirect to the root route
                    //     console.log('successfully find posts!');
                    //     return res.json({err: err });
                    //   }
                    // })
                    //res.render('error', {err: err});
                }
                else {
                      post.comments.push(comment);
                      post.save(function(err){
                           if(err) {
                                console.log('Error');
                                return res.json({err: err });
                           } else {
                             Post.find({}).populate('comments').exec(function(error, posts) {
                               if(error) {
                                 console.log('ERROR: '+err);
                                 return res.json({err: err });
                               } else { // else console.log that we did well and then redirect to the root route
                                 console.log('successfully find posts!');
                                 return res.json({posts: posts});
                               }
                             })

                           }
                       });
                }
             });
        });
      }
 }
