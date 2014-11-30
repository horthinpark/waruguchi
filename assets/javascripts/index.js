socket = io('http://localhost:9999');
angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {
    $scope.user_name = 'Kawabe';

    $scope.posts = [
      {targetName: '川辺', content:'がうざい'},
      {targetName: '川辺', content:'がきもい'}];

    $scope.addPost = function() {
      $scope.posts.push({user_name: $scope.userName, content: $scope.postContent});
      $scope.postContent = '';
    };
}]);
