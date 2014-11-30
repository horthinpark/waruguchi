socket = io('http://localhost:9999');
angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {
    $scope.increment = function(post){
          post.count += 1;
            }

    $scope.posts = [
      {targetName: '川辺', content:'がうざい', fav_count: 0},
      {targetName: '川辺', content:'がきもい', fav_count: 0}];

    $scope.addPost = function() {
      $scope.posts.push({user_name: $scope.userName, content:$scope.postContent, fav_count: 0});
      $scope.postContent = '';
    };
    
    $scope.addFavCount = function(post) {
      post.fav_count += 1;
    };
}]);
