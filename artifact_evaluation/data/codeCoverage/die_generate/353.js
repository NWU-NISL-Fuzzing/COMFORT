function thingy(a, b) {
  return (b >> a << b) + b;
}

function doCall() {
  return thingy.apply(void 0, arguments);
}

function foo() {
  return doCall(1, 2);
}

for (var i = 0; i < 200000; ++i) {
  var result = foo();

  if (result != 3) {
    throw Number.prototype.toLocaleString.call(i) + ("Bad result: " + "arguments");
  }
}
