angular.module('waruguchiApp', [])
  .controller('PostController', ['$scope', function($scope) {
    $scope.todos = [
      {text:'あいつうざい', done:true},
      {text:'あいつきもい', done:false}];

    $scope.addPost = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.postText = '';
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.posts;
      $scope.posts = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
}]);
