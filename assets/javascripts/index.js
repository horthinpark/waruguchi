socket = io('http://localhost:9999');
angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {
    $scope.user_name = 'Kawabe';

    $scope.posts = [
      {content:'川辺うざい'},
      {content:'川辺きもい'}];

    $scope.addPost = function() {
      $scope.posts.push({user_name: $scope.userName, content:$scope.postText});
      $scope.postText = '';
    };
}]);
