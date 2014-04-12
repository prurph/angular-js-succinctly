var app = angular.module("MyApp", []);

app.directive("basket", function() {
  return {
    restrict: "E",
    controller: function($scope, $element, $attrs) {
      $scope.content = [];
      this.addApple = function() {
        $scope.content.push("apple");
      };

      this.addOrange = function() {
        $scope.content.push("orange");
      };
    },
    link: function(scope, element) {
      element.bind("mouseenter", function() {
        console.log(scope.content);
      });
    }
  };
});

// require directive defines dependency to basket controller, meaning link gets
// passed the basket controller as well as scope, element, attrs

app.directive("apple", function() {
  return {
    require: "basket",
    link: function(scope, element, attrs, basketCtrl) {
      for(var i=0; i<attrs.apple; i++) {
        basketCtrl.addApple();
      }
    }
  };
});

app.directive("orange", function() {
  return {
    require: "basket",
    link: function(scope, element, attrs, basketCtrl) {
      basketCtrl.addOrange();
    }
  };
});
