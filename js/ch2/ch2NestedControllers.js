var app = angular.module("MyApp", []);

app.controller("MyCtrl", function($scope) {
  $scope.name = "Prescott";
  $scope.user = {
    name: "Murphy"
  };
});

app.controller("MyNestedCtrl", function($scope) {
});


app.factory("UserService", function() {
  var users = ["Peter", "Daniel", "Nina"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    }
  };
});

app.controller("MyCtrl", function($scope, UserService) {
  $scope.users = UserService.all();
});

// This way breaks when minified (injection relies on exact string rep of
// UserService)
// app.controller("AnotherCtrl", function($scope, UserService) {
//   $scope.firstUser = UserService.first();
// });

// So use this instead: strings in arrays not changed in minification
app.controller("AnotherCtrl", ["$scope", "UserService",
  function($scope, UserService) {
    $scope.firstUser = UserService.first();
  }
]);
