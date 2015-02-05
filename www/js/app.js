angular.module('halalApp', ['ionic', 'halalApp.controllers', 'halalApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'appCtrl'
  })
    .state('app.main', {
      url: "/main",
      views: {
        'menuContent': {
          templateUrl: "templates/main.html",
          controller: 'mainCtrl'
        }
      }
    })
    .state('app.details', {
      url: "/details/:url",
      views: {
        'menuContent': {
          templateUrl: "templates/details.html",
          controller: 'detailsCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/main');
});
