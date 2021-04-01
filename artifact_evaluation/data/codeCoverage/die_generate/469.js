Number.isNaN(50 >> 0);

// don't crash when tracing
function f(o) {
  var prop = "arguments";
  Object.preventExtensions("arguments".match(/\u13c9/iu));
  f[prop] = f[prop];
}

for (var i = 0; i < 50; i++) {
  f();
}
