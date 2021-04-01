var global = this;

(function () {
  global.__defineGetter__("x", /x/.constructor);
})();

for (var a = 0; a < 4; ++a) {
  if (a % 4 == 1) {
    var __es_v0 = new Uint16Array(2048);
  } else {
    print(x);
  }
}
