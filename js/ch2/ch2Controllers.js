var MyCtrl = function($scope) {
  $scope.value = 1;
  $scope.name  = "";

  $scope.incrementValue = function(increment) {
    $scope.value += increment;
  };

  $scope.getIncrementedValue = function() {
    return $scope.value;
  };

  $scope.$watch("name", function(newVal, oldVal) {
    if ($scope.name.length > 0) {
      $scope.greeting = "Hello, " + $scope.name;
    } else {
      $scope.greeting = "";
    }
  });

  $scope.$watch(function() {
    return $scope.name;
  }, function(newValue, oldValue) {
    console.log("change detected: " + newValue);
  });
};
