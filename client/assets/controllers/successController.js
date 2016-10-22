app.controller('successController', ['$scope', '$routeParams', 'postsFactory', 'usersFactory', 'shareUserService', '$cookieStore', '$http', '$location',
           function($scope, $routeParams, postsFactory, usersFactory, shareUserService, $cookieStore,
               $http, $location ) {
      console.log("Success controller starting...");
      $scope.c = [];
      var getUser = function() {
        console.log(shareUserService.getUser());
        $scope.user_login = shareUserService.getUser();
      }
      getUser();
      var posts = function() {
          postsFactory.posts(function beingPassedToTheFactoryIndexByThisController(postsFromTheFactory) {
            $scope.posts = postsFromTheFactory.posts;
          } /* end args passed to userFactor index */ ); //end userFactory method invokation
      } //end usersIndex
      posts();
      $scope.post = function(){
              var parameter = {};
              parameter.message =  $scope.message;
              parameter.name = shareUserService.getUser().first_name;
              postsFactory.post(parameter, function passedToFriendsFactoryCreate(postsFromFactory){
                if (postsFromFactory.err) {
                   $scope.errorMessage_post = postsFromFactory.err;
                }
                else {
                  posts();
                }
              });
          }

     $scope.add_comment = function(id){
         var comment = {};
         var parameter = {};
         //console.log(document.getElementById("c").value);
         parameter.text =  $scope.c[id]; //document.getElementById("c").value; //document.getElementById("c").value; //document.getElementById(id).value; //$scope.comment;
         parameter.name = shareUserService.getUser().first_name;
         parameter._post = id;
         parameter.created_at = Date.now;
         postsFactory.add_comment(parameter, id, function passedToPostsFactoryUpdate(postsFromFactory){
             if (postsFromFactory.err) {
                $scope.errorMessage_post = postsFromFactory.err;
             }
             else {
               posts();
             }
       });
    }

}])
