// Don't abort during SSA construction.
function f() {
  var i = 0;

  while (i < i && 1 == 1) {
    i;
  }

  return i;
}

f();
100;
