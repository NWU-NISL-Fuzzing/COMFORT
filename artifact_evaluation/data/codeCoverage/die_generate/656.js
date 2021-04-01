function f() {
  try {
    ;
  } catch (x) {
    return;
  } finally {
    var __es_v0 = Number.prototype.toLocaleString.call(2).toLowerCase();
  }
}

try {
  f();
} catch (x) {
  ;
}
