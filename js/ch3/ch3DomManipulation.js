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
    link: linkFunction,
  };
});

app.directive("myTemplateWidget", function() {
  return {
    restrict: "E",
    templateUrl: "my_template_widget.html",
    replace: true
  };
});

// transclude: true with ng-transclude means insert existing nodes as children
// of the ng-transclude element
app.directive("myTranscludeWidget", function() {
  return {
    restrict: "E",
    transclude: true,
    template: "<div ng-transclude><h3>Heading</h3></div>"
  };
});

app.directive("myConfigWidget", function() {
  var linkFunction = function(scope, element, attributes) {
    // either dot notation or bracket notation works
    scope.text  = attributes["myConfigWidget"];
    scope.text2 = attributes.anotherAttribute;
  };

  return {
    restrict: "A",
    template: "<p>{{text}} {{text2}}</p>",
    link: linkFunction,
    // this is called "isolate scope": makes sure that variables in this scope
    // don't overwrite identically named variables in parent scope
    scope: {}
  };
});
