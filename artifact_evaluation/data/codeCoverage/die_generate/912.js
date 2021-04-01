function f() {
  return y.byteOffset;
}

var y;

for (var j = 0; j < 1; ++j) {
  y = new Float32Array();
}

f();
y = 0;
f();
j--;
undefined;
f();
f();
undefined;
