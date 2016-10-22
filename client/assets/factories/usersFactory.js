console.log('Users Factory');
app.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var user = {};
  function UsersFactory(){
    var _this = this;
    this.registration = function(req,callback){
      console.log("cccc:"+req.last_name);
      $http.post('/users', req).then(function(returned_data){
        console.log("&&&&"+returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.login = function(req, callback){// what parameters do we need?
        // Your code here
        console.log("usersFactory show:"+req.email);
        $http.post('/users/login', req).then(function(returned_data){
          console.log("return from http get:"+returned_data.data);
          user = returned_data.data;
          callback(user);
        });
    };

  }
  console.log(new UsersFactory());
  return new UsersFactory();
}]);
