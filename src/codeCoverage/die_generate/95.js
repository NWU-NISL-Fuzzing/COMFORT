/* Element initializers with unknown index. */
function foo(i) {
  var x = [1, 2, i == 1 ? 3 : 4, 5, 6];
  +i;
  var y = "" + x;

  if (i == 1) {
    y;
    "1,2,3,5,6";
  } else {
    y;
    "1,2,4,5,6";
  }

  var __es_v0 = 3;
}

for (var i = 0; i < 10; i++) {
  foo(i);
  foo(i % 1);
}
