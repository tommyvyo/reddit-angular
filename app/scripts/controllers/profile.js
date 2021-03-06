'use strict';

angular.module('redditApp')
  .controller('ProfileCtrl', function ($scope, $routeParams, $http, Reddit) {
    
    $scope.username = $routeParams.username;
   
  
    // Load the user's information 
    $scope.loaded_user_info = false;
    $scope.error_loading_user_info = false;

    $scope.successLoadingUserInfo = function(data) {
      $scope.loaded_user_info = true;
       
      if (data["kind"] == "t2") {
        $scope.user = data['data'];
      }
    };

    $scope.errorLoadingUserInfo = function(data, status, headers, config) {
      $scope.error_loading_user_info = true; 
    };

    $http.get(Reddit.getUrl('user/'+$scope.username+'/about.json'))
    .success($scope.successLoadingUserInfo)
    .error($scope.errorLoadingUserInfo)

    $scope.loaded_user_history = false;

  });
