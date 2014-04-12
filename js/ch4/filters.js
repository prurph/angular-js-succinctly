var app = angular.module("MyApp", []);

app.filter("reverse", function() {
  return function(input, options) {
    var result = "",
        suffix = options.suffix || "";
        prefix = options.prefix || "";

    input = input || "";
    for(var i=0; i<input.length; i++) {
      result = input.charAt(i) + result;
    }
    if (result.length > 0) {
      result += suffix;
      result = prefix + result;
    }
    return result;
  };
});

app.filter("exclude", function() {
  return function(input, exclusion) {
    var result = [];
    for(var i=0; i<input.length; i++) {
      if (input[i] !== exclusion) {
        result.push(input[i]);
      }
    }

    return result;
  };
});

app.filter("sortAscending", function() {
  return function(input, sort) {
    return sort ? input.sort() : input;
  };
});

app.filter("checkmark", function() {
  return function(data) {
    return data ? '\u2713' : '\u2718';
  };
});
