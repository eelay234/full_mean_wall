console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(req,callback){
      console.log("cccc:"+req.last_name);
      $http.post('/friends', req).then(function(returned_data){
        console.log("&&&&"+returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(friend, idx, callback){ // what parameters do we need?
      // Your code here
      console.log("friendsFactory update:"+idx);
      console.log("friendsFactory update:"+friend.first_name);
      // console.log(friends[0]);
      // id = this.getFriend(idx)._id;
      var parameter = JSON.stringify({first_name:friend.first_name, last_name:friend.last_name,
                                  date: friend.date});
      var parameter = friend;
      // var data = $.param({
      //           fName: $scope.firstName,
      //           lName: $scope.lastName
      //       });
      id = this.getFriend(idx)._id;
      console.log("parameeter="+parameter.last_name);
      $http.post('/friends/'+id, parameter).then(function(returned_data){
        console.log("return from http get:"+returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(idx, callback){// what parameters do we need?
        // Your code here
        console.log("friendsFactory delete:"+idx);
        id = this.getFriend(idx)._id;
        $http.delete('/friends/'+id).then(function(returned_data){
          console.log("return from http get:"+returned_data.data);
          friends = returned_data.data;
          callback(friends);
        });
    };
    this.getFriend = function(idx, callback){
      return friends[idx];
    };
    this.show = function(idx, callback){// what parameters do we need?
        // Your code here
        console.log("friendsFactory show:"+idx);
        console.log(friends[0]);
        id = this.getFriend(idx)._id;
        $http.get('/friends/'+id).then(function(returned_data){
          console.log("return from http get:"+returned_data.data);
          friend = returned_data.data;
          callback(friend);
        });
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };

  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
