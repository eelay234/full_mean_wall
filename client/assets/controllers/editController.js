app.controller('editController', ['$scope', 'shareDataService', 'friendsFactory', '$location', '$routeParams',
          function($scope, shareDataService, friendsFactory, $location, $routeParams) {
      /* Public Properties */
      var vm = this;
      vm.controlValue = "Current Name:";
      /* Public Methods */
      vm.getFriend = function() {
        console.log("in getFriend!!!!");
        $scope.friend = friendsFactory.getFriend($routeParams.id);
        $scope.friend.date = new Date($scope.friend.date);
      }
      vm.update = function() {
        console.log("vm update"+$routeParams.id);
        friendsFactory.update($scope.friend, $routeParams.id, function passedToFriendssFactoryUpdate(friendFromFactory){
          $scope.friend = friendFromFactory;
          console.log("%%%%%%: "+$scope.friend.date);
          $scope.friend.date = new Date($scope.friend.date);
          $location.url("/");
          // what is this?
          //vm.controlValue = "Updated Name: ";
        });
      }
      /* on load time */
      vm.getFriend();
      console.log("VM: "+$routeParams.id);
      return vm;
    }]);
