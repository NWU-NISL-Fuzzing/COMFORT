// |jit-test| --spectre-mitigations=on
function f() {
  return arguments[10];
}

for (var i = String.prototype.lastIndexOf.call("0" + "arguments", "prototype".valueOf()); i < 10; i++) {
  f();
  undefined;
}
