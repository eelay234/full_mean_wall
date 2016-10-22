app.controller('indexController', ['$scope', '$rootScope', 'shareDataService', 'friendsFactory', '$location', function($scope, $rootScope, shareDataService, friendsFactory, $location) {
      /* Private Methods */
      /* on load time */
      var friendsIndex = function() {
          friendsFactory.index(function beingPassedToTheFactoryIndexByThisController(friendsFromTheFactory) {
            $scope.friends = friendsFromTheFactory;
            console.log("here "+$scope.friends);
          } /* end args passed to userFactor index */ ); //end userFactory method invokation
        } //end usersIndex

      /* Scope Methods */
      $scope.show = function(friend_id) {
          console.log("showing "+friend_id);
          friendsFactory.show(friend_id, function(returnedData){
            $scope.friend = returnedData[0];
            $rootScope.friend = $scope.friend;
            console.log("#########");
            //console.log(($scope.friend)[0].first_name);
            console.log($scope.friend.first_name);
            $scope.friend.date = new Date($scope.friend.date);
            shareDataService.putFriend($scope.friend);
            $location.url('/show/'+friend_id);
          });
        }
        $scope.edit = function(friend_id) {
            console.log("editing "+friend_id);
            friendsFactory.show(friend_id, function(returnedData){
              $scope.friend = returnedData[0];
              //$rootScope.friend = $scope.friend;
              console.log("#########");
              //console.log(($scope.friend)[0].first_name);
              console.log($scope.friend.first_name);
              $scope.friend.date = new Date($scope.friend.date);
              shareDataService.putFriend($scope.friend);
              $location.url('/edit/'+friend_id);
            });
          }
          $scope.delete = function(friend_id) {
              console.log("editing "+friend_id);
              friendsFactory.delete(friend_id, function(returnedData){
                //$scope.friends = returnedData;
                friendsIndex();
                $location.url('/');
              });
            }
      //   /* on load time */
      console.log("loading the controller");
      console.log(friendsFactory);
      console.log(this);
      friendsIndex();

}]);
