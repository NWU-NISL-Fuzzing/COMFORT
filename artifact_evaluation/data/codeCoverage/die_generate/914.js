// |jit-test| exitstatus: 6
function f(x) {
  if (x === x) {
    return;
  }

  f(x - 1);
  f(x - 1);
  f(x - 1);
  f(x - 1);
  f(x - 1);
  f(x - 1);
}

f(100);
0;
1;
