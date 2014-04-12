var app = angular.module("MyApp", []);

app.directive("myIsolateScope", function() {
  var linkFunction = function(scope, element, attributes) {
    scope.text  = attributes.myIsolateScope;
    scope.text2 = attributes.secondAttribute;
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


// @text binds scope text model to directive's text attribute
// changes to parent scope text will change local scope txt but not the other
// way around

// for birectional binding use text: "=text"
app.directive("myBindToDirective", function() {
  return {
    restrict: "E",
    template: "<p>{{text}}</p>",
    scope: {
      text: "@text"
    }
  };
});

// pass expression as a function to directive using &
app.directive("myWidgetExpr", function() {
  var linkFunction = function(scope, element, attributes) {
    // pass fn attribute to directive (local scope defines fn)
    // call function in linkFunction, pass in expression arguments as hash
    scope.text = scope.fn({ count: 5, count2: 5 });
  };

  return {
    restrict: "E",
    template: "<p>{{text}}</p>",
    link: linkFunction,
    scope: {
      fn: "&fn"
    }
  };
});

// compile method only has access to templates element and its attributes
// contrast with link function that has access to DOM instance and scope as well
app.directive("repeatNTimes", function() {
  return {
    restrict: "E",
    compile: function(tElement, attrs) {
      var content = tElement.children();
      for (var i=1; i<attrs.repeat; i++) {
        tElement.append(content.clone());
      }
    }
  };
});

// use compile for template DOM manipulation only, use link to add behavior
// if using link/compile combined, compile function must return link
app.directive("repeatPTimes", function() {
  return {
    restrict: "E",
    compile: function(tElement, attrs) {
      var content = tElement.children();
      for (var i=1; i<attrs.repeat; i++) {
        tElement.append(content.clone());
      }

      return function(scope, element, attrs) {
        element.on("click", "h1", function() {
          $(this).css({"background-color": "red"});
        });
      };
    }
  };
});
