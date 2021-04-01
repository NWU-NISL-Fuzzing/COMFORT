var f32 = new Float32Array(1);
f32[0] = 13;
var str = "CAN HAS cheezburger? OKTHXBYE";
var c;

function f() {
  str = str.substr(f32[1], f32[2147483648]);
  c = str[f32[0]];
}

for (var n = 100; n; --n) {
  f();
  -f32[n];

  var __es_v0 = f32.slice().filter(function () {
    f();
    f32[n - n] >>= Math.atan(n.valueOf());
  });

  Int32Array.prototype.reduce.call(f32, function () {
    str = str;
    n++;
    return (n << 13) % f32[n];
  });
}

print(c);
