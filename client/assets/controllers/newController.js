app.controller('newController', ['$scope','friendsFactory', '$http', '$location', function($scope, friendsFactory,
               $http, $location ) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
   index();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
$scope.create = function(){
        console.log("OOOO:"+$scope.friend.first_name);
        // $http.post('/friends', $scope.friend).then(function(returned_data){
        //     console.log("&&&&"+returned_data.data);
        //     $scope.friends = returned_data;
        //     console.log("^^^^^"+$scope.friends);
        //     $location.url("/");
        // });
        friendsFactory.create($scope.friend, function passedToFriendsFactoryCreate(friendsFromFactory){
          $scope.friends = friendsFromFactory;
          console.log("@@@@@"+$scope.friends);
          $location.url("/");
        });
    }
}]);


// app.controller('newController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
//       console.log("newController")
//       $scope.addUser = function(){
//         console.log($scope.user.name);
//
//         userFactory.create($scope.user, function passedToUserFactoryCreate(usersFromFactory){
//           $scope.users = usersFromFactory;
//           $location.url("/");
//         });
//     }
// }]);
