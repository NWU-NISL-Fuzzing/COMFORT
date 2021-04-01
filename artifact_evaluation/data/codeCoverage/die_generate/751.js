function returnZero() {
  return 0;
}

function test() {
  returnZero();
  var a = "a";
  var b = "b";
  a = a;

  if (returnZero()) {
    return a + b;
  } else {
    return b + a;
  }
}

test();
"ba";
