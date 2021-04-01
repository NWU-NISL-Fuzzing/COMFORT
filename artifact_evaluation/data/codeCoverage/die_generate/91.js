/* Non-reentrant call on an inner and outer closure. */
function foo() {
  var x = 0;

  function bar() {
    foo();
    var y = 0;

    function baz() {
      bar();
      return ++x + ++y;
    }

    return baz;
  }

  var __es_v0 = x;
  return bar();
}

var a = foo();
var b = foo();
a() + a() + b() + b();
12;
