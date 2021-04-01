with ({}) {
  ;
}
x = new Int8Array(1);

function f(y) {
  x[0] = y;
}

f();
f(3);
f(7);
x.buffer;
f(0);
f(1 + 1073741823);
x[0];
0;
