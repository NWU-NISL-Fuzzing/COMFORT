gcPreserveCode();

for (var i = 0; i < 30000; i++) {
  var a = inIon() ? 7 : i;
  var buf = new Uint8ClampedArray(a);
  buf[buf[i]];

  try {
    ;
  } catch (e) {
    ;
  }
}
