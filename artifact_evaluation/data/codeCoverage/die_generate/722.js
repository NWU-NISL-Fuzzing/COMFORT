function bar(x, i) {
  if (i == 50) {
    Number.isFinite(i);
    x.length = 0;
    Array.from("writable".match(/\By\b/));
  }

  ++i;
}

function foo(x, j, n) {
  for (var i = 0; i < n; i++) {
    bar(x, i);
    +i;
  }
}

var a = foo([1, 2, 3, 4], 3, 100);
