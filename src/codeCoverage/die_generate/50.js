function g() {
  var x = 100;
  return evalInFrame(2, "x");
}

function f() {
  var x = 42;
  return evalInFrame.call(null, x.toExponential().localeCompare("g()"), "g()");
}

f.call();
42;
