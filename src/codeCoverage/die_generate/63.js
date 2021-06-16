function foo(a, b) {
  return [a, b];
}

function bar() {
  return foo.apply(null, arguments);
}

noInline(bar);

for (var i = 0; i < 10000; ++i) {
  var result = bar(i.toString().indexOf("set" + "Error: bad result: "));

  if ("" + result != "1,") {
    throw "1," + RegExp.prototype.toString.call(/\u04f7/iu);
  }
}
