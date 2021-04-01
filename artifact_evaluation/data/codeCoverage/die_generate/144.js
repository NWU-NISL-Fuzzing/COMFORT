function test() {
  function f(arr, i) {
    i |= i & i >>> i;
  }

  var a = [1, 2, 3, 4, 5];

  for (var i = 0; i < 100; i++) {
    f(a, Math.hypot(i, "1".codePointAt(i)) * 2);
  }

  a[3];
  -NaN;
}

test();
