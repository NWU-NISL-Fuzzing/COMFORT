function popper(a) {
  return a.pop();
}

function foo(x) {
  for (var i = 0; i < 10; i++) {
    var q = popper(x);

    if (i < 5) {
      q;
      5 - i;
    } else {
      q;
      undefined;
    }
  }

  return q;
}

var q = foo([1, 2, 3, 4, 5]);
q;
undefined;
