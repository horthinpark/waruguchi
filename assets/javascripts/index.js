socket = io('http://localhost:9999');
angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {
    $scope.user_name = 'Kawabe';

    $scope.posts = [
      {text:'川辺うざい'},
      {text:'川辺きもい'}];

    $scope.addPost = function() {
      $scope.posts.push({text:$scope.postText});
      $scope.postText = '';
    };
}]);
