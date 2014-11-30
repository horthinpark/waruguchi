function S4 () {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
}

function uuid () {
  return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()
}

function findByPostid (id, arr) {
  return arr.filter(function (item) {
    return item.post_id == id;
  });
}

angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {

    $scope.THRESHOLD = 5;

    socket = io.connect('http://localhost:9999');
    socket.on('post', function (data) {
      var found = findByPostid(data.post_id, $scope.posts)[0]
      if (!found) {
        $scope.posts.push(data);
      } else {
        found.favCount+= 1
      }
      $scope.$apply();
    })

    $scope.posts = [
      {targetName: '川辺', content:'がうざい', favCount: 0, post_id: 1},
      {targetName: '川辺', content:'がきもい', favCount: 0, post_id: 2}];

    $scope.addPost = function() {
      post = {targetName: $scope.targetName, content: $scope.postContent, favCount: 0, post_id: uuid()};
      socket.send(post);
      $scope.posts.push(post);
      $scope.postContent = '';
    };
    
    $scope.addFavCount = function(post) {
      socket.send(post);
      post.favCount += 1;
    };
}]);
