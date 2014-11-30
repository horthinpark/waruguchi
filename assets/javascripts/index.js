angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {
    $scope.posts = [
      {text:'あいつうざい'},
      {text:'あいつきもい'}];

    $scope.addPost = function() {
      $scope.posts.push({text:$scope.postText});
      $scope.postText = '';
    };
}]);
