var app = angular.module("MyApp", []);

// directive method expects function used for initialization/dep injection
// app.directive("directiveName", function factory(injectables) { CODE });

app.directive("myWidget", function() {
  var linkFunction = function(scope, element, attributes) {
    element.on("click", function() {
      $(this).children().first().css({"background-color": "red" });
    });
  };

  return {
    restrict: "E",
    link: linkFunction
  };
});
