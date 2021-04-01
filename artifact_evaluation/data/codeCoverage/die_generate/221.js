function foo() {
  var x = {};

  x.__proto__ = function () {
    return 0;
  };

  return Object.values(x).reverse();
}

var a = foo();
var b = foo();
a.__proto__ === "writable".split("caller", 1).reverse().__proto__;
false;
