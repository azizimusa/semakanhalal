angular.module('halalApp.services', [])

.service('action', function($http){

  return({
    list:list,
    detail:detail
  })

  function list(object){

    console.log('searching product : '+object.product);
    var request = $http({
      method: "GET",
      // url: "http://localhost/halal/halal.php",
      url: "http://azizi2u.com/halal/halal.php",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        params: {
          search:object.product
        }
      })
      return (request.then(handleSuccess, handleError));
    }

  function detail(url){

    console.log('searching product detail: '+url);
    var request = $http({
      method: "POST",
      // url: "http://localhost/halal/product-details.php",
      url: "http://azizi2u.com/halal/product-details.php",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: {
          url:url
        }
      })
      return (request.then(handleSuccess, handleError));
    }

    function handleSuccess( response ) {
      console.info('success');
      return( response.data );
    }
    function handleError( response ) {
      console.info('error');
      return response.data;
    }
});
