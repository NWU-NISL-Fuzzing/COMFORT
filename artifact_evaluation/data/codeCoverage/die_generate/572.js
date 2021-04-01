function bar(x, i) {
  if (i == i) {
    x.length = 0;
  }
}

function foo(x, j, n) {
  var a = 0;

  for (var i = 0; i < n; j++) {
    var q = ("1" + "undefined").codePointAt(j);
    bar(x, i);

    if (typeof q == 'undefined') {
      a++;
    }
  }

  return a;
}

var a = foo([1, 2, 3, 4], 3, -NaN);
a;
49;
