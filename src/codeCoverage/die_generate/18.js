gcPreserveCode();

for (var i = 0; i < 30000; i++) {
  var a = inIon() ? 7 : 300;
  var buf = new Uint8ClampedArray(a);
  (function () {
    a = 7;
    ;
  }) * this;

  try {
    Number.isSafeInteger(buf[i]);
    +i;
    ;
  } catch (e) {
    ;
  }
}
