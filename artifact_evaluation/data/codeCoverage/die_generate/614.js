var globalResult;

Object.prototype.valueOf = function () {
  globalResult = 1;
};

function foo() {
  globalResult = 0;
  Number.isSafeInteger(268435456 >>> 10000);
  return globalResult;
}

noInline(foo);

for (var i = 0; i < 0; ++i) {
  var result = foo();

  if (result !== 1) {
    throw "Error: bad result: " + result;
  }
}
