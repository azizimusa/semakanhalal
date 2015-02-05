angular.module('halalApp.controllers', [])

.controller('mainCtrl', function($scope,$rootScope,$ionicLoading,$ionicScrollDelegate,action) {
  $scope.status = "Please use search form above to begin.";
  $scope.form = {};
  $scope.submit = function(){
  $rootScope.show();

    action.list($scope.form).then(function(response){
      $rootScope.listing = response.data;
      $rootScope.hide();

      if(!$rootScope.listing){
        $scope.status = "Product not found";
      }

      $ionicScrollDelegate.scrollTop(true);
    })
  }

})

.controller('appCtrl', function($scope,$rootScope,$ionicLoading,action) {
  $rootScope.show = function() {
    $ionicLoading.show({
      template: 'Please wait...'
    });
  };
  $rootScope.hide = function(){
    $ionicLoading.hide();
  };
})

.controller('detailsCtrl', function($scope,$rootScope,$stateParams,action){

  $rootScope.show();

  $scope.currentUrl = $rootScope.listing[$stateParams.url].url;

  $scope.appBrowser = function(){
    var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

    window.open($scope.currentUrl, '_blank', 'location=yes', 'toolbar=no');
  }

  action.detail($rootScope.listing[$stateParams.url].url).then(function(response){
    $scope.productDetails = response.data;

    if(!$scope.productDetails.products){
      $scope.productStatus = "No Product";
    }
    $rootScope.hide();
  })

});
