var app = angular.module('todoApp',[]);


app.controller("TodoController",function($scope) {



  $scope.todos = [
    {text : 'Learn AngularJS',done  : false}
    ,{text : "Learn the basics",done : false}
    ,{text : "Complete all the exercises",done: false}
  ];
  $scope.getTotalTodos = function(){
    return $scope.todos.length;
  }

  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.formTodoText,done:false});
    $scope.formTodoText = "";
  }



});
