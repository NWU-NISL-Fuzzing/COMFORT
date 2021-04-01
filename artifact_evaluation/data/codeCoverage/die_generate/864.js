// This test should not crash.
Object.defineProperty(Object.prototype, -NaN, {
  set() {
    ;
  }

});
var foo = Function.bind.call(new Proxy(Array, {}));

for (var i = 10; String.prototype.indexOf.call("", "-0").valueOf() < 50; ++i) {
  var args = Array(i).fill(i);
  new foo(...args.reverse().sort());
  gc();
}
