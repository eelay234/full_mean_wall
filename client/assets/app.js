var app = angular.module("app", ["ngRoute", 'ngCookies']);
app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
    .when("/", {
      templateUrl: 'partials/login_registration.html',
      controller: 'loginController'
    })
    .when("/success", {
      templateUrl: 'partials/success.html',
      controller: 'successController',
      resolve: {
                    factory: checkRouting
                }
    })
    .when("/posts", {
        //template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
        templateUrl: 'partials/success.html',
        controller: 'successController',
        resolve: {
                      factory: checkRouting
                  }
    })
    .when("/post", {
        //template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
        templateUrl: 'partials/success.html',
        controller: 'successController',
        resolve: {
                      factory: checkRouting
                  }
    })
    .when('/add_comment/:id', {
          templateUrl: 'partials/success.html',
          controller: 'successController',
          resolve: {
                        factory: checkRouting
                    }
    })
    .when("/logout", {
      templateUrl: 'partials/login_registration.html',
      controller: 'loginController',
      resolve: {
                    factory: logoff
                }
    })
    .when("/new", {
        //template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
        templateUrl: 'partials/new.html',
        controller: 'newController',
        resolve: {
                      factory: checkRouting
                  }
    })
    .when('/edit/:id', {
          templateUrl: 'partials/edit.html',
          controller: 'editController',
          controllerAs: 'eC',
          resolve: {
                        factory: checkRouting
                    }
    })
    .when('/show/:id', {
          templateUrl: 'partials/show.html',
          controller: 'indexController',
          resolve: {
                        factory: checkRouting
                    }
    })
    .otherwise({
        redirectTo: '/'
    });
});
var checkRouting= function ($q, $rootScope, $location) {
    if ($rootScope.user) {
    //if (shareUserService.getUser())
        console.log("rootscope user true");
        return true;
    } else {
      console.log("rootscope user false");
        var deferred = $q.defer();
             deferred.reject();
             $location.path("/");
        return deferred.promise;
    }
};
var logoff= function ($q, $rootScope, $location) {
      $rootScope.user = false;
      console.log("rootscope user false");
};
