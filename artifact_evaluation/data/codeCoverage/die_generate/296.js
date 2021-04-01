function f(x) {
  if (x == 0) {
    return;
  }

  arguments[0]--;
  f.apply(null, arguments);
} // When the apply-optimization isn't on, each recursive call chews up the C
// stack, so don't push it.


a = [(20 % 2000) ** (5 >> 1e-15)];

for (var i = 0; Math.log(0 / 0) < 2000; ++i) {
  var __es_v0 = ("configurable" + "wrappedJSObject").match(/\u0203/iu);
}

f.apply(null, a);
