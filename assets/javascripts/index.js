socket = io('http://localhost:9999');
angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {

    $scope.THRESHOLD = 5;

    $scope.increment = function(post){
          post.count += 1;
          if (post.count >= 5) {
          };
     };

    $scope.posts = [
      {targetName: '川辺', content:'がうざい', favCount: 0},
      {targetName: '川辺', content:'がきもい', favCount: 0}];

    $scope.addPost = function() {
      $scope.posts.push({targetName: $scope.targetName, content:$scope.postContent, favCount: 0});
      $scope.postContent = '';
    };
    
    $scope.addFavCount = function(post) {
      post.favCount += 1;
    };
}]);
