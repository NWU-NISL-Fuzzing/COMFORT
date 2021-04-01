function f() {
  var x = undefined ? 1 : 4294967295;
  print(false || 4294967295 ^ x ^ x);
}

f();
