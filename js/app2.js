var app = angular.module("MyApp", []);

app.directive(["show", "size"], function() {
  return {
    link: function(scope, element, attributes) {
      // input box has ng-model="visible" so its value becomes that of visible
      // here we watch for changes in changes in the attributes.show value
      // which is referenced as show="visible", thus when the checkbox changes
      // visible changes which changes attributes.show which triggers this func
      scope.$watch(attributes.show, function(value) {
        element.css('display', value? '' : 'none');
      });
    }
  };
});

// pass in "size" as an argument
app.directive("size", function() {
  return {
    link: function(scope, element, attributes) {
      // identically the other checkbox is ng-model="font-size", and we have
      // the directive size="font-size" later, so here we toggle the font-size
      // css based on if the variable is true/false
      scope.$watch(attributes.size, function(value) {
        element.css('font-size', value? '32px' : '16px');
      });
    }
  };
});
