console.log('routes');
var friends = require('../controllers/friends.js');
var users = require('../controllers/users.js');
var posts = require('../controllers/posts.js');

// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.post('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
  app.post('/users/login', users.login);
  app.post('/users', users.registration);
  app.post('/post', posts.post);
  app.get('/posts', posts.posts);
  app.post('/add_comment/:id', posts.add_comment);
}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
